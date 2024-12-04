import promptSync from 'prompt-sync'; // Importa o prompt-sync
import AdicionarScreen from "./AdicionarScreen"; // Importa a tela de adicionar produto
import { EstoqueController } from '../control/EstoqueController';
import ListarScreen from './ListarScreen';
import EditarScreen from './EditarScreen';
import RemoverScreen from './RemoverScreen';

export class EstoqueScreen {
  private prompt = promptSync();
  private controller: EstoqueController;
  // private adicionar: AdicionarScreen;
  // private listarProdutos: ListarScreen;
  // private editarProduto: EditarScreen;
  // private removerProduto: RemoverScreen
  // private controlador: EstoqueController;


  constructor(controller: EstoqueController) {
    // this.controlador = controlador;
    // this.adicionar = new AdicionarScreen();
    // this.listarProdutos = new ListarScreen();
    // this.editarProduto = new EditarScreen();  // Inicializa a tela de editar produto
    // this.removerProduto = new RemoverScreen();
    this.controller = controller;
  }

  public async exibirMenu(): Promise<void> {
    while (true) {  // Loop contínuo até o usuário escolher sair
      console.log(`
      ========== Estoque ==========
      Escolha uma opção:
      1 - Adicionar Produtos
      2 - Listar Produtos
      3 - Editar Produtos
      4 - Remover Produtos
      5- Sair
      `);

      const opcao = this.prompt('Digite o número da opção desejada: ');

      switch (opcao) {
        case '1':
          let adicionarScreen = this.controller.getScreen("adicionar");
          await adicionarScreen.adicionarProduto();
          break;
        case '2':
          //await this.listarProdutos.listarProdutos();  // Chama a tela de listar produtos
          break;
        case '3':
          //await this.editarProduto.editarProduto();  // Chama a tela de editar produto
          break;
        case '4':
          //await this.removerProduto.removerProduto();
          break;  
        case '5':
          console.log('Saindo do sistema...');
          return;  // Sai do loop e encerra a execução
        default:
          console.log('Opção inválida. Tente novamente.');
          break;
      }
    }
  }
}