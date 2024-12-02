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
const AdicionarScreen_1 = __importDefault(require("./AdicionarScreen")); // Importa a tela de adicionar produto
const ListarScreen_1 = __importDefault(require("./ListarScreen"));
const EditarScreen_1 = __importDefault(require("./EditarScreen"));
const RemoverScreen_1 = __importDefault(require("./RemoverScreen"));
class EstoqueScreen {
    constructor(controlador) {
        this.prompt = (0, prompt_sync_1.default)();
        this.controlador = controlador;
        this.adicionar = new AdicionarScreen_1.default();
        this.listarProdutos = new ListarScreen_1.default();
        this.editarProduto = new EditarScreen_1.default(); // Inicializa a tela de editar produto
        this.removerProduto = new RemoverScreen_1.default();
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
                        yield this.adicionar.adicionarProduto(); // Chama a tela de adicionar produto
                        break;
                    case '2':
                        yield this.listarProdutos.listarProdutos(); // Chama a tela de listar produtos
                        break;
                    case '3':
                        yield this.editarProduto.editarProduto(); // Chama a tela de editar produto
                        break;
                    case '4':
                        yield this.removerProduto.removerProduto();
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
