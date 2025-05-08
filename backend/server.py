import http.server
import socketserver
import json
from dijkstra import dijkstra
from data import graph, gerar_chamas, locais_seguro

PORT = 8000


class MeuServidor(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        print(f"🔍 Requisição recebida: {self.path}")

        # ✅ Tratamento para a rota raiz `/`
        if self.path.strip() == "/":
            self.send_response(200)
            self.send_header("Content-type", "application/json")
            # 🔥 Permite requisições externas
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            self.wfile.write(json.dumps(
                {"mensagem": "🔥 API rodando! Use /status ou /caminho-seguro"}).encode("utf-8"))

        # ✅ Rota `/status`
        elif self.path.strip() == "/status":
            locais_em_chamas = gerar_chamas()
            locais_seguros = locais_seguro(locais_em_chamas)

            self.send_response(200)
            self.send_header("Content-type", "application/json")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            self.wfile.write(json.dumps({
                "locais_em_chamas": locais_em_chamas,
                "locais_seguros": locais_seguros
            }).encode("utf-8"))

        
        elif self.path.startswith("/caminho-seguro?"):
            try:
                parametros = self.path.split("?")[1]
                valores = dict(param.split("=")
                               for param in parametros.split("&"))
                origem = valores.get("origem")
                destino = valores.get("destino")

                if origem and destino:
                    caminho = dijkstra(graph, origem, destino)
                    print(f"✅ Caminho encontrado: {caminho}")

                    self.send_response(200)
                    self.send_header("Content-type", "application/json")
                    self.send_header("Access-Control-Allow-Origin", "*")
                    self.end_headers()
                    self.wfile.write(json.dumps(
                        {"caminho_seguro": caminho}).encode("utf-8"))
                else:
                    raise ValueError("Parâmetros inválidos")

            except Exception as e:
                self.send_response(400)
                self.send_header("Content-type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(json.dumps({"erro": str(e)}).encode("utf-8"))

        
        else:
            self.send_response(404)
            self.send_header("Content-type", "application/json")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            self.wfile.write(json.dumps(
                {"erro": "Não Deu em Malandragem"}).encode("utf-8"))



with socketserver.TCPServer(("", PORT), MeuServidor) as httpd:
    print(
        f"🚀 Servidor rodando na porta {PORT}... Acesse http://127.0.0.1:{PORT}/status")
    httpd.serve_forever()
