
import Avaliacao from './avaliacao.js';// ✅ Importando a classe Avaliacao

class Produto {
  constructor(nome, preco, categoria, descricao, estoque, desconto = 0) {
    this.nome = nome;
    this.preco = preco;
    this.categoria = categoria;
    this.descricao = descricao;
    this.estoque = estoque;
    this.desconto = desconto;
    this.avaliacoes = [];
  }

  // Método para adicionar avaliações ao produto
  adicionarAvaliacao(usuario, nota, comentario) {
    if (nota < 1 || nota > 5) {
      console.log("❌ A nota deve estar entre 1 e 5.");
      return;
    }
    this.avaliacoes.push({ usuario, nota, comentario });
  }

  // Método para calcular a média das avaliações
  calcularMediaAvaliacoes() {
    if (this.avaliacoes.length === 0) return 0;
    const totalNotas = this.avaliacoes.reduce((soma, avaliacao) => soma + avaliacao.nota, 0);
    return (totalNotas / this.avaliacoes.length).toFixed(2);
  }

  // Método para exibir as avaliações no terminal
  exibirAvaliacoes() {
    console.log(`\n📢 Avaliações para ${this.nome}:`);
    
    if (this.avaliacoes.length === 0) {
      console.log("❌ Nenhuma avaliação disponível.");
      return;
    }

    console.log("──────────────────────────────────────────");
    this.avaliacoes.forEach(avaliacao => {
      console.log(`⭐ ${avaliacao.nota}/5 | 📝 ${avaliacao.usuario}: "${avaliacao.comentario}"`);
    });
    console.log("──────────────────────────────────────────");

    console.log(`📊 Média das avaliações: ${this.calcularMediaAvaliacoes()} ⭐`);
  }

  // Método para salvar os dados do produto e avaliações em um arquivo JSON
  salvarDadosEmJSON() {
    const dados = {
      nome: this.nome,
      preco: this.preco,
      categoria: this.categoria,
      descricao: this.descricao,
      estoque: this.estoque,
      desconto: this.desconto,
      avaliacoes: this.avaliacoes
    };

    fs.writeFileSync(`dados_${this.nome.replace(/\s+/g, '_')}.json`, JSON.stringify(dados, null, 2));
    console.log("✅ Dados salvos com sucesso!");
  }

  // Método para carregar os dados do produto a partir de um arquivo JSON
  carregarDadosDoJSON() {
    const nomeArquivo = `dados_${this.nome.replace(/\s+/g, '_')}.json`;

    if (fs.existsSync(nomeArquivo)) {
      const dados = JSON.parse(fs.readFileSync(nomeArquivo, 'utf8'));
      this.preco = dados.preco;
      this.categoria = dados.categoria;
      this.descricao = dados.descricao;
      this.estoque = dados.estoque;
      this.desconto = dados.desconto;
      this.avaliacoes = dados.avaliacoes || [];

      console.log("🔄 Dados carregados com sucesso!");
    } else {
      console.log("⚠ Nenhum arquivo de dados encontrado.");
    }
  }
}

export default Produto;
