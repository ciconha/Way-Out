import random

locais = [
    "🏤 Praça de Alimentação", "🚪Entrada Principal", "🚪Saída Lateral", "👜 Gucci",
    "🛒 Davó", "🏦 Americanas", "🏯 Cinemark", "👓 Óticas Carol", "🈴 Like Tatto", "📱 Samsung","📓 Le Postiche","👕 Riachuelo","🏯 Calvin Klein", "Arezzo","Centauro","Polo Wear"]


def gerar_chamas():
    return random.sample(locais, k=random.randint(1, len(locais)//3))


def locais_seguro(chamas):
    return [local for local in locais if local not in chamas]


graph = {
    "Entrada Principal": {"🏤 Praça de Alimentação": 2},
    "Lojas": {"🏦 Oticas Carol": 2, "🌉 Americanas": 4},
    "Cinema": {"Cinemark": 4, "Davó": 3},
    "2loja": {"Like Tatto": 2, "Samsung":1 , "Le Postiche":2, "Riachuelo":3, "Calving Kleing":4, "Gucci":5},
    "3loja": {"Arezzo": 1, "Centauro":2, "Polo Wear":3},
    "Entrada": {"Entrada": 1},
    "Saída Lateral": {"Saida": 2}
}
