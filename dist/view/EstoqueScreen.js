"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstoqueScreen = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync")); // Importa o prompt-sync
class EstoqueScreen {
    // private adicionar: AdicionarScreen;
    // private listarProdutos: ListarScreen;
    // private editarProduto: EditarScreen;
    // private removerProduto: RemoverScreen
    // private controlador: EstoqueController;
    constructor(controller) {
        this.prompt = (0, prompt_sync_1.default)();
        // this.controlador = controlador;
        // this.adicionar = new AdicionarScreen();
        // this.listarProdutos = new ListarScreen();
        // this.editarProduto = new EditarScreen();  // Inicializa a tela de editar produto
        // this.removerProduto = new RemoverScreen();
        this.controller = controller;
    }
    exibirMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            while (true) { // Loop contínuo até o usuário escolher sair
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
                        yield adicionarScreen.adicionarProduto();
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
                        return; // Sai do loop e encerra a execução
                    default:
                        console.log('Opção inválida. Tente novamente.');
                        break;
                }
            }
        });
    }
}
exports.EstoqueScreen = EstoqueScreen;
