import Produto from "./BaseProduct";  // Importando a classe Produto

export class ProdutoConcreto extends Produto {
 
  // O construtor da subclasse chama o construtor da classe abstrata
  constructor(nome: string, preco: number, quantidade: number, categoria: string) {
    super(nome, preco, quantidade, categoria);  // Chama o construtor da classe pai (Produto)
  }

  // Método específico da classe ProdutoConcreto (se necessário)
  public detalhesProduto(): string {
    return `Produto: ${this.nome}, Preço: R$${this.preco}, Quantidade: ${this.quantidade}`;
  }

  descricao(): string {
    throw new Error("Method not implemented.");
  }
}
