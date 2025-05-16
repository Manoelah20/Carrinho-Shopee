import Carrinho from './carrinho.js';
import Produto from './produto.js';

const meuCarrinho = new Carrinho();

// ✅ Carregar carrinho salvo antes de adicionar novos itens
meuCarrinho.carregarCarrinhoDeJSON();

// Criando produtos
const smartphone = new Produto('Smartphone', 1500);
const laptop = new Produto('Laptop', 5000);
const foneOuvido = new Produto('Fone de ouvido', 200);

// Adicionando produtos ao carrinho
meuCarrinho.adicionarProduto(smartphone, 1);
meuCarrinho.adicionarProduto(laptop, 1);
meuCarrinho.adicionarProduto(foneOuvido, 2);

// Exibindo carrinho atualizado
meuCarrinho.exibirCarrinho();

// ✅ Salvando carrinho em arquivo JSON
meuCarrinho.salvarCarrinhoEmJSON();

//O que esse código faz?
//✅ Importa a classe Produto 
//✅ Instancia um produto chamado Notebook Gamer 
//✅ Adiciona avaliações ao produto, incluindo nome do usuário, nota e comentário 
//✅ Exibe todas as avaliações no terminal
//✅ Recuperar os dados de um produto salvo no JSON diretamente