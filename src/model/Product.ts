import BaseProduto from "./BaseProduto";  // Importando a classe Produto

export class Product extends BaseProduto {
  // O construtor da subclasse chama o construtor da classe abstrata
  constructor(nome: string, preco: number, quantidade: number, categoria: string) {
    super(nome, preco, quantidade, categoria);  // Chama o construtor da classe pai (Produto)
  }

  descricao(): string {
    return `O produto ${this.nome} custa ${this.preco} e há ${this.quantidade} unidades disponiveis`;
  }
}
