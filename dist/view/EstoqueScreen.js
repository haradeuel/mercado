"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AdicionarScreen_1 = __importDefault(require("./AdicionarScreen"));
const ListarScreen_1 = __importDefault(require("./ListarScreen"));
// import RemoverScreen from "./RemoverScreen";
// import AdicionarQuantidadeScreen from "./AdicionarQuantidadeScreen";
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class EstoqueScreen {
    constructor(controller) {
        this.prompt = (0, prompt_sync_1.default)();
        this.estoqueController = controller;
        // Inicializa as views
        this.adicionarScreen = new AdicionarScreen_1.default(controller);
        this.listarScreen = new ListarScreen_1.default(controller);
    }
    // Exibir o menu de opções
    exibirMenu() {
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
exports.default = EstoqueScreen;
