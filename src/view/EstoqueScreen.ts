import EstoqueController from "../control/EstoqueController";
import AdicionarScreen from "./AdicionarScreen";
import ListarScreen from "./ListarScreen";
// import RemoverScreen from "./RemoverScreen";
// import AdicionarQuantidadeScreen from "./AdicionarQuantidadeScreen";
import promptSync from "prompt-sync";

export default class EstoqueScreen {
  private prompt = promptSync();
  private estoqueController: EstoqueController;

  private adicionarScreen: AdicionarScreen;
  private listarScreen: ListarScreen;
  private removerScreen: RemoverScreen;
  private adicionarQuantidadeScreen: AdicionarQuantidadeScreen;

  constructor(controller: EstoqueController) {
    this.estoqueController = controller;

    // Inicializa as views
    this.adicionarScreen = new AdicionarScreen(controller);
    this.listarScreen = new ListarScreen(controller);
    
  }

  // Exibir o menu de opções
  public exibirMenu(): void {
    while (true) {
      console.log(`
                ======== Estoque Supermercado ========
                1. Listar produtos
                2. Adicionar produto
                3. Atualizar quantidade
                4. Remover produto
                5. Sair
            `);

      const opcao = this.prompt("Escolha uma opção:");

      switch (opcao) {
        case "1":
          this.listarScreen.listarProdutos(); // Chama a view de listar produtos
          break;
        case "2":
          this.adicionarScreen.adicionarProduto(); // Chama o método da AdicionarScreen
          break;
        case "3":
          this.adicionarQuantidadeScreen.adicionarQuantidade(); // Chama a view de adicionar quantidade
          break;
        case "4":
          this.removerScreen.removerProduto(); // Chama a view de remover produto
          break;
        case "5":
          console.log("Saindo ...");
          return;
        default:
          console.log("Opção Inválida");
      }
    }
  }
}
