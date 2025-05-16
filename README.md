# Carrinho-Shopee
Projeto carrinho shopee utilizando Node.js
#########################################
Objetivo Do Projeto:

Criar carrinho de compras baseado no carrinho de compras da Shoppe, aonde o carrinho armazene itens e faça o cálculo de sub-itens automaticamente.

Este projeto consiste em um sistema de carrinho de compras, inspirado na Shopee, desenvolvido em Node.js e executado no terminal. O usuário pode interagir com o sistema para adicionar, remover e modificar produtos, realizando cálculos automáticos de preços e quantidades.

🚀 Tecnologias Utilizadas:
Node.js

JavaScript (ES6+)

Módulo fs (File System) para salvar e carregar dados em JSON

🎯 Funcionalidades:

✅ Adicionar produtos ao carrinho 
✅ Remover produtos do carrinho 
✅ Exibir todos os produtos no carrinho 
✅ Adicionar avaliações aos produtos 
✅ Calcular total da compra automaticamente 
✅ Salvar e carregar dados do carrinho e produtos usando JSON

📂 Estrutura do Projeto:
carrinho-shopee/
│── src/
│   ├── index.js         # Arquivo principal para execução no terminal
│   ├── carrinho.js      # Classe do carrinho de compras
│   ├── produto.js       # Classe para representar os produtos
│   ├── avaliacao.js     # Classe para manipular avaliações dos produtos
│── services/            # Pasta para serviços auxiliares
│   ├── carrinhoService.js  # Lógica de manipulação do carrinho
│── dados/               # Pasta para armazenar arquivos JSON gerados
│── package.json         # Configuração do Node.js
│── README.md            # Documentação do projeto

📥 Instalação e Uso: ✨

1️⃣ Clone o repositório:
git clone https://github.com/Manoelah20/carrinho-shopee.git

2️⃣ Acesse a pasta do projeto:
bash
cd carrinho-shopee
3️⃣ Instale as dependências (caso haja):
bash
npm install
4️⃣ Execute o projeto:
bash
node src/index.js

✨ Como adicionar avaliações?

Dentro do index.js, utilize os métodos da classe Produto:

javascript
const Produto = require('./src/produto');

const notebook = new Produto("Notebook Gamer", 5000, "Eletrônicos", "Notebook potente para jogos e trabalho", 10, 15);
notebook.adicionarAvaliacao("Manoela", 5, "Ótimo desempenho!");
notebook.adicionarAvaliacao("Carlos", 4, "Muito bom, mas poderia ter mais bateria.");
notebook.exibirAvaliacoes();
notebook.salvarDadosEmJSON();

🔗 Referências🚀

Node.js Documentação
DIO - Carrinho de Compras Shopee
😃
