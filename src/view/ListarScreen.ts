import promptSync from 'prompt-sync';  // Importa o prompt-sync para capturar a entrada do usuário
import { EstoqueController } from '../control/EstoqueController';
import {ScreenView} from "./ScreenView";

export default class ListarScreen extends ScreenView {
  private controlador: EstoqueController;

  constructor(controlador: EstoqueController){
    super()
    this.controlador = controlador;
  }

  public async listarProdutos(): Promise<void> {
    this.log("Você escolheu listar os produtos.");
    
    // Chama o controlador para obter os produtos
    const produtos = await EstoqueController.listarProdutos();
    
    if (produtos.length === 0) {
      console.log("Não há produtos cadastrados.");
    } else {
      console.log("Produtos cadastrados:");

      // Verifique a lista de produtos antes de exibi-los
      //console.log(produtos);

      // Exibe os produtos
      produtos.forEach((produto, index) => {
        console.log(`${index + 1} - ID: ${produto.id}, Nome: ${produto.nome}, Preço: ${produto.preco}, Quantidade: ${produto.quantidade}, Categoria: ${produto.categoria}`);
      });
    }
  }
}
