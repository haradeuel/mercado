import promptSync from "prompt-sync"; // Importa o prompt-sync
import { EstoqueController } from "../control/EstoqueController"; // Importa o controlador

export default class RemoverScreen {
  private prompt = promptSync();

  // Método para remover o produto
  public async removerProduto(): Promise<void> {
    //console.log("Você escolheu remover um produto.");

    // Solicita ao usuário o ID do produto a ser removido
    const id = parseInt(this.prompt("Digite o ID do produto a ser removido: "));

    if (isNaN(id)) {
      console.log("ID inválido. Produto não removido.");
      return;
    }

    // Chama o controlador para remover o produto
    await EstoqueController.removerProduto(id);
  }
}
