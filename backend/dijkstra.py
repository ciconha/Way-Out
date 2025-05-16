import heapq


def dijkstra(graph, origem, destino, locais_em_chamas):
    if origem not in graph or destino not in graph:
        return ["Nenhum caminho disponível - O local de partida ou destino não está conectado no grafo!"]

    distancias = {nó: float("inf") for nó in graph}
    distancias[origem] = 0

    fila_prioridade = [(0, origem)]
    caminhos = {origem: [origem]}

    while fila_prioridade:
        distancia_atual, nó_atual = heapq.heappop(fila_prioridade)

        if nó_atual == destino and len(caminhos[nó_atual]) >= 8:
            # ✅ Agora só finaliza se houver pelo menos 6 locais!
            return caminhos[nó_atual]

        for vizinho, peso in graph[nó_atual].items():
            nova_distancia = distancia_atual + peso

            if nova_distancia < distancias[vizinho]:
                distancias[vizinho] = nova_distancia
                heapq.heappush(fila_prioridade, (nova_distancia, vizinho))
                caminhos[vizinho] = caminhos[nó_atual] + [vizinho]

    return ["Nenhum caminho disponível - O destino não pode ser alcançado!"]
