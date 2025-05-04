import random

locais = [
    "Praça de Alimentação", "Entrada Principal", "Saída Lateral", "Loja de Eletrônicos",
    "Supermercado", "Estacionamento", "Cinema", "Farmácia", "Livraria", "Cafeteria"
]


def gerar_chamas():
    return random.sample(locais, k=random.randint(1, len(locais)//3))


def locais_seguro(chamas):
    return [local for local in locais if local not in chamas]


graph = {
    "Entrada Principal": {"Praça de Alimentação": 2, "Loja de Eletrônicos": 3},
    "Praça de Alimentação": {"Supermercado": 2, "Cinema": 4},
    "Loja de Eletrônicos": {"Saída Lateral": 3, "Farmácia": 2},
    "Supermercado": {"Estacionamento": 4, "Livraria": 3},
    "Cinema": {"Cafeteria": 2},
    "Farmácia": {"Livraria": 3},
    "Livraria": {"Saída Lateral": 5},
    "Cafeteria": {"Saída Lateral": 3},
    "Saída Lateral": {"Estacionamento": 2}
}
