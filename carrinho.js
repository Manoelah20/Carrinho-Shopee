import fs from 'fs';

class Carrinho {
  constructor() {
    this.produtos = [];
  }

  adicionarProduto(produto, quantidade) {
    const itemExistente = this.produtos.find(item => item.nome === produto.nome);

    if (itemExistente) {
      itemExistente.quantidade += quantidade;
    } else {
      this.produtos.push({ ...produto, quantidade });
    }
  }

  removerProduto(nomeProduto) {
    this.produtos = this.produtos.filter(item => item.nome !== nomeProduto);
  }

  modificarQuantidade(nomeProduto, novaQuantidade) {
    const item = this.produtos.find(item => item.nome === nomeProduto);
    if (item) {
      item.quantidade = novaQuantidade;
    }
  }

  calcularTotal() {
    return this.produtos.reduce((total, item) => total + item.preco * item.quantidade, 0);
  }

  contarItens() {
    return this.produtos.reduce((total, item) => total + item.quantidade, 0);
  }

  exibirCarrinho() {
    console.log("\n🛒 Carrinho de Compras:");
    
    if (this.produtos.length === 0) {
      console.log("❌ Carrinho vazio.");
      return;
    }

    this.produtos.forEach(item => {
      console.log(`📦 ${item.nome} | Quantidade: ${item.quantidade} | Preço unitário: R$${item.preco.toFixed(2)}`);
    });

    console.log("──────────────────────────────────────────");
    console.log(`🛍️ Total de itens: ${this.contarItens()}`);
    console.log(`💰 Valor total da compra: R$${this.calcularTotal().toFixed(2)}`);
  }

  salvarCarrinhoEmJSON() {
    const dadosCarrinho = {
      produtos: this.produtos,
      totalCompra: this.calcularTotal(),
      totalItens: this.contarItens()
    };

    fs.writeFileSync('./arquivos/carrinho.json', JSON.stringify(dadosCarrinho, null, 2));
    console.log("✅ Carrinho salvo com sucesso em arquivos/carrinho.json!");
  }

  carregarCarrinhoDeJSON() {
    const arquivo = './arquivos/carrinho.json';
    
    if (fs.existsSync(arquivo)) {
      const dados = JSON.parse(fs.readFileSync(arquivo, 'utf8'));
      this.produtos = dados.produtos;
      console.log("🔄 Carrinho carregado com sucesso!");
    } else {
      console.log("⚠ Nenhum carrinho salvo encontrado.");
    }
  }
}

export default Carrinho;

