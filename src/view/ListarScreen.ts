import EstoqueController from "../control/EstoqueController";

export default class ListarScreen {
  private estoqueController: EstoqueController;

  constructor(controller: EstoqueController) {
    this.estoqueController = controller;
  }

  public listarProdutos(): void {
    const produtos = this.estoqueController.getProdutos();

    if (produtos.length === 0) {
      console.log("Não há produtos no estoque.");
    } else {
      console.log("Produtos no estoque:");
      for (let i = 0; i < produtos.length; i++) {
        const produto = produtos[i];
        console.log(`${i + 1}. Nome: ${produto.getNome()}, Categoria: ${produto.getCategoria()}, Preço: R$${produto.getPreco()}, Quantidade: ${produto.getQuantidade()}`);
       
      }
    }
  }
}
