from fastapi import FastAPI
from dijkstra import dijkstra
from data import graph, locais, gerar_chamas

app = FastAPI()

@app.get("/")
def home():
    return {"mensagem": "API de navegação segura 🚀"}

@app.get("/caminho-seguro/")
def obter_caminho(origem: str, destino: str):
    caminho = dijkstra(graph, origem, destino)
    return {"caminho_seguro": caminho}

@app.get("/locais/")
def obter_locais():
    return {"locais": locais}

@app.get("/chamas/")
def obter_chamas():
    chamas = gerar_chamas()
    return {"locais_em_chamas": chamas}
