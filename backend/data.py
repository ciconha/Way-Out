import random
import json

locais = [
    "Praça De Alimentação", "Entrada Principal", "Saída Lateral", "Gucci",
    "Davó", "Americanas", "Cinemark", "Óticas Carol", "Like Tatto",
    "Samsung", "Le Postiche", "Riachuelo", "Calvin Klein", "Arezzo",
    "Centauro", "Polo Wear",]


def gerar_chamas():
    quantidade = max(1, min(len(locais)//3, len(locais)))  
    return random.sample(locais, k=quantidade)

def locais_seguro(chamas):
    return [local for local in locais if local not in chamas]

def gerar_grafo():
    graph = {local: {} for local in locais}
    for i in range(len(locais)):
        vizinhos = random.sample(locais, k=random.randint(1, 16))  
        for vizinho in vizinhos:
            if vizinho != locais[i]:
                peso = random.randint(1, 1)
                graph[locais[i]][vizinho] = peso
                graph[vizinho][locais[i]] = peso  
    return graph

graph = gerar_grafo()

print(" Grafo de conexões:", json.dumps(graph, indent=6))