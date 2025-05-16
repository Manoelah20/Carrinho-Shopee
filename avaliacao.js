class Avaliacao {
  constructor(usuario, nota, comentario) {
    if (nota < 1 || nota > 5) {
      throw new Error("❌ A nota deve estar entre 1 e 5.");
    }
    this.usuario = usuario;
    this.nota = nota;
    this.comentario = comentario;
  }
}

// ✅ Exportação correta para ES Module
export default Avaliacao;

