import http.server
import socketserver
import json
from urllib.parse import unquote_plus
import unicodedata
from dijkstra import dijkstra
from data import graph, gerar_chamas, locais_seguro, locais

PORT = 8000

def normalizar_nome(nome):
    nome = unquote_plus(nome).strip().title()
    return unicodedata.normalize("NFC", nome)  

class MeuServidor(http.server.SimpleHTTPRequestHandler):
    def do_OPTIONS(self):
        """ Tratamento de requisições OPTIONS para evitar bloqueios de CORS """
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_GET(self):
        print(f" Requisição recebida: {self.path}")

        self.send_response(200)
        self.send_header("Content-type", "application/json")
        self.send_header("Access-Control-Allow-Origin", "*")  
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

        if self.path.strip() == "/":
            self.wfile.write(json.dumps({"mensagem": "⛩️ Caminho tá seguro, Lek"}).encode("utf-8"))

        elif self.path.strip() == "/status":
            locais_em_chamas = gerar_chamas()
            locais_seguros = locais_seguro(locais_em_chamas)

            if not locais_seguros:
                locais_seguros = ["Nenhum local seguro disponível"]

            self.wfile.write(json.dumps({
                "locais_em_chamas": locais_em_chamas,
                "locais_seguros": locais_seguros,
                "todos_locais": locais
            }).encode("utf-8"))

        elif self.path.strip() == "/pesos":
            print(" Debug - Requisição para obter pesos recebida!")
            if not isinstance(graph, dict) or not graph:
                self.send_response(500)
                self.wfile.write(json.dumps({"erro": "O objeto `graph` não está carregado corretamente!"}).encode("utf-8"))
            else:
                self.wfile.write(json.dumps({"pesos": graph}, indent=4).encode("utf-8"))

        elif self.path.startswith("/caminho-seguro?"):
            try:
                locais_em_chamas = gerar_chamas()
                locais_seguros = locais_seguro(locais_em_chamas)

                parametros = self.path.split("?")[1]
                valores = dict(param.split("=") for param in parametros.split("&"))
                origem = normalizar_nome(valores.get("origem", ""))
                destino = normalizar_nome(valores.get("destino", ""))

                if not origem or not destino:
                    raise ValueError("Erro: Você deve informar um local de partida e um destino válidos!")

                print(" Locais em chamas:", locais_em_chamas)

                grafo_seguro = {local: conexoes for local, conexoes in graph.items() if local not in locais_em_chamas}
                for local in grafo_seguro:
                    grafo_seguro[local] = {k: v for k, v in grafo_seguro[local].items() if k not in locais_em_chamas}

                if origem not in grafo_seguro or destino not in grafo_seguro:
                    raise ValueError(f"Erro: '{origem}' ou '{destino}' estão bloqueados!")

                caminho = dijkstra(grafo_seguro, origem, destino, locais_em_chamas)

                self.wfile.write(json.dumps({
                    "caminho_seguro": caminho,
                    "novo_destino": destino
                }).encode("utf-8"))

            except Exception as e:
                self.send_response(400)
                self.wfile.write(json.dumps({"erro": str(e)}).encode("utf-8"))

with socketserver.TCPServer(("", PORT), MeuServidor) as httpd:
    print(f" Servidor rodando na porta {PORT}... Acesse http://192.168.0.100:8000/status")
    httpd.serve_forever()
