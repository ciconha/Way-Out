import http.server
import socketserver
import json
from dijkstra import dijkstra
from data import graph, gerar_chamas, locais_seguro

PORT = 8000

class MeuServidor(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        print(f"Requisição recebida: {self.path}")

        if self.path == "/status":
            locais_em_chamas = gerar_chamas()
            locais_seguros = locais_seguro(locais_em_chamas)

            self.send_response(200)
            self.send_header("Content-type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps({
                "locais_em_chamas": locais_em_chamas,
                "locais_seguros": locais_seguros
            }).encode("utf-8"))

        elif self.path.startswith("/caminho-seguro?"):
            parametros = self.path.split("?")[1]
            valores = dict(param.split("=") for param in parametros.split("&"))
            origem = valores.get("origem")
            destino = valores.get("destino")

            if origem and destino:
                caminho = dijkstra(graph, origem, destino)
                print(f"Caminho encontrado: {caminho}")

                self.send_response(200)
                self.send_header("Content-type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps({"caminho_seguro": caminho}).encode("utf-8"))
            else:
                self.send_response(400)
                self.end_headers()
                self.wfile.write(json.dumps({"erro": "Parâmetros inválidos"}).encode("utf-8"))

        else:
            self.send_response(404)
            self.end_headers()
            self.wfile.write(json.dumps({"erro": "Rota não encontrada"}).encode("utf-8"))

with socketserver.TCPServer(("", PORT), MeuServidor) as httpd:
    print(f"Servidor rodando na porta {PORT}...")
    httpd.serve_forever()
