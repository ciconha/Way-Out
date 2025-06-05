import heapq

def dijkstra(graph, origem, destino, locais_em_chamas):
    graph_filtrado = {nó: conexoes for nó, conexoes in graph.items() if nó not in locais_em_chamas}  

    if origem not in graph_filtrado or destino not in graph_filtrado:
        return [" Nenhum caminho disponível - O local de partida ou destino está bloqueado!"]

    distancias = {nó: float("inf") for nó in graph_filtrado}
    distancias[origem] = 0

    fila_prioridade = [(0, origem)]
    caminhos = {origem: [origem]}

    while fila_prioridade:
        distancia_atual, nó_atual = heapq.heappop(fila_prioridade)

        if nó_atual == destino:
            return list(dict.fromkeys(caminhos[nó_atual]))  

        for vizinho, peso in graph_filtrado[nó_atual].items():
            nova_distancia = distancia_atual + peso

            if vizinho not in locais_em_chamas and nova_distancia < distancias[vizinho]:
                distancias[vizinho] = nova_distancia
                heapq.heappush(fila_prioridade, (nova_distancia, vizinho))
                caminhos[vizinho] = caminhos[nó_atual] + [vizinho]

    return ["❌ Nenhum caminho disponível - O destino não pode ser alcançado!"]
