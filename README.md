# 🚀 WayOut

**Resumo:** O WayOut é um aplicativo de simulação de Saída em casos de incêndio em shoppings. Utilizando um algoritmo, ele identifica áreas de risco, analisa locais seguros e calcula a rota mais eficiente para o usuário, garantindo uma saída segura.

---

## 🎯 Objetivo

O WayOut é um aplicativo de evacuação de emergência para incêndios em shoppings, ajudando usuários a encontrar rotas seguras. Ele identifica áreas de perigo e locais seguros, permitindo que o usuário veja o melhor caminho antes de tomar uma decisão. Com base na Teoria dos Grafos, os locais do shopping são representados como pontos conectados, onde as rotas são calculadas usando o algoritmo de Dijkstra, garantindo eficiência e segurança. O sistema evita zonas bloqueadas e otimiza trajetos para uma saída rápida e segura. A motivação do projeto é reduzir pânico e desorientação, tornando a evacuação mais organizada e acessível por meio da tecnologia. O aplicativo processa dados em tempo real, garantindo que as informações sejam sempre atualizadas e confiáveis. Além disso, a interface simples permite que qualquer pessoa use o sistema sem dificuldades.

---

## 👨‍💻 Tecnologias Utilizadas

```
- Python
- React
- Expo
- Typescript
- Node.js
- Express.js
- API Rest
- Miro
- Dijkstra

```
---

## 🗂️ Estrutura do Projeto

```
└── 📦 Way-Out
    ├── 📁 backend
    │   ├── 🐍 data.py
    │   ├── 🐍 dijkstra.py
    │   └── 🐍 server.py
    ├── 📁 src
    │   └── 📁 api
    │       ├── 🔹 apiService.ts
    │       └── 📁 assets
    │           ├── 📄 Logo WayOut1.png
    │           ├── 📄 Mapa.jpeg
    │           └── 📁 screens
    │               ├── 🔵 inicio.tsx
    │               ├── 🔹 iniciostyle.ts
    │               ├── 🔵 mapa.tsx
    │               ├── 🔹 mapastyle.ts
    │               ├── 🔵 Resultado.tsx
    │               ├── 🔵 simulacao.tsx
    │               └── 🔹 simulacaostyle.ts
    ├── 🔵 App.tsx
    ├── 🔹 Index.ts
    └── 🔹 style.ts

```

---

## ⚙️ Como Executar

### ✅ Rodando Localmente

1. Clone o repositório:

```
cd Way-Out-main
```

2. Configure o servidor e inicie o sistema:

```
cd "caminho da pasta do backend" 
ipconfig
Ira peguar o seu Endereço IPv4 e colocar no link da API | http://IPv4:8000 | Caso queira ver como funciona a API coloque status no link | http://IPv4:8000/status
python server.py
coloque o link da API: http://IPv4:8000 nesses arquivos :
-apiService
-Resultado.tsx
-simulacao.tsx
```

3. Instale as dependências:

```
npm install
npm install expo
```

4. Execute a aplicação:

```
npx expo start
```

---

## 📸 Demonstrações


<h2 aling= "center"> Tela de Carregamento </h2>

---


<table>
  <tr>
    <td style="width: 30%; vertical-align: top;">
      <p>A tela de início apresenta a barra de Carregamento</p>
    </td>
    <td style="width: 40%;">
      <img src="https://github.com/user-attachments/assets/c0c864fd-c093-4f6a-a41a-1972315a21af" alt="Tela de Início" width="50%">
    </td>
  </tr>
</table>

---


<h2 aling= "center"> Tela de Inicio </h2>

---


<table>
  <tr>
    <td style="width: 10%; vertical-align: top;">
      <p>A tela de início apresenta os Botões de Simulação de Mapa</p>
    </td>
    <td style="width: 7%;">
      <img src="https://github.com/user-attachments/assets/d2df7569-7fda-4623-aa30-e148ba3f14c1" alt="Tela de Início" width="30%" >
    </td>
  </tr>
</table>


---


<h2 aling= "center"> Tela do Mapa </h2>

---


<table>
  <tr>
    <td style="width: 10%; vertical-align: top;">
      <p>A tela do Mapa onde Todos os Locais do Shopping</p>
    </td>
    <td style="width: 7%;">
      <img src="https://github.com/user-attachments/assets/94ce3921-f9bb-4e30-af43-69f424448b92" alt="Tela do Mapa" width="30%" >
    </td>
  </tr>
</table>

---


<h2 aling= "center"> Tela de Simulação </h2>

---


<table>
  <tr>
    <td style="width: 10%; vertical-align: top;">
      <p>Os locais que são gerados automaticamente sendo eles, locais de perigo e seguro</p>
    </td>
    <td style="width: 7%;">
      <img src="https://github.com/user-attachments/assets/80433c9b-9bd1-475f-ac02-cec13ac9c973" alt="Tela de Simulação" width="70%" >
    </td>
     <td style="width: 10%; vertical-align: top;">
      <p>Mais para baixo tem 2 inputs, onde o usuário irá análisar o local de partida e chegada.</p>
      <p> 1 - O local de partida e o locao onde ele está no momento.</p>
     <p> 2 - O local de chegada é onde o usuário pretende chegar.</p>
    </td>
    <td style="width: 7%;">
      <img src="https://github.com/user-attachments/assets/24ad4f02-a114-4554-97ba-70afd948c0a6" alt="Tela de Simulação" width="70%" >
    </td>
  </tr>
</table>

---


<h2 aling= "center"> Tela do Resulato </h2>

---


<table>
  <tr>
    <td style="width: 10%; vertical-align: top;">
      <p>O resultado que aparece para o usuario quando Digita no input o local de partida e de chegada</p>
    </td>
    <td style="width: 7%;">
      <img src="https://github.com/user-attachments/assets/8b6fbd2f-31a5-4899-8403-21432c00876a" width="70%" >
    </td>
         <td style="width: 10%; vertical-align: top;">
      <p>Caso o usuário Digite um local que esteja em Perigo o sistema ira Redirecionar um outro local seguro e proximo aquele que o usuário escolheu</p>
    </td>
    <td style="width: 7%;">
      <img src="https://github.com/user-attachments/assets/86b55ee8-1e19-437e-b2ea-4dcecf410388" alt="Tela de Resultado" width="70%" >
    </td>
  </tr>
</table>

---












---

## 👥 Equipe

| Nome | GitHub |
|------|--------|
| Guilherme Ribeiro | [@Guilherme](https://github.com/fulano) |
| Mariana Freire | [@Mariana](https://github.com/ciclano) |

---

## 🧠 Disciplinas Envolvidas


- Teoria dos Grafos


---

## 🏫 Informações Acadêmicas

- Universidade: **Universidade Braz Cubas**
- Curso: **Ciência da Computação** 
- Semestre: 5º 
- Período: Manhã 
- Professora orientadora: **Dra. Andréa Ono Sakai**
- Evento: **Mostra de Tecnologia 1º Semestre de 2025**
- Local: Laboratório 12
- Datas: 05 e 06 de junho de 2025

---

## 📄 Licença

MIT License — sinta-se à vontade para utilizar, estudar e adaptar este projeto.


---
