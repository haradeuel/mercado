import promptSync from 'prompt-sync';  // Importa o prompt-sync
import { EstoqueController } from '../control/EstoqueController';

export default class EditarScreen {
  private prompt = promptSync();
  private controlador: EstoqueController;

  constructor(controlador: EstoqueController){
    this.controlador = controlador;
  }
  public async editarProduto(): Promise<void> {
    console.log("Você escolheu editar um produto.");

    // Pergunta o ID do produto a ser editado
    const id = parseInt(this.prompt("Digite o ID do produto que deseja editar: "), 10);

    // Pergunta o novo preço e quantidade
    const preco = parseFloat(this.prompt("Digite o novo preço do produto: "));
    const quantidade = parseInt(this.prompt("Digite a nova quantidade do produto: "), 10);

    // Chama o controlador para editar o produto
    await EstoqueController.editarProduto(id, preco, quantidade);

    console.log("Produto editado com sucesso!");
  }
}
