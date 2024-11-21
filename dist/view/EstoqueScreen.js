"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class EstoqueScreen {
    constructor(controller) {
        this.prompt = (0, prompt_sync_1.default)();
        this.controller = controller;
    }
    adicionarProdutos() {
        let nome;
        let quantidade;
        let preco;
        let categoria;
        console.log("Digite Categoria:");
        categoria = this.prompt();
        console.log("\n" + categoria);
        console.log("Digite Nome :");
        nome = this.prompt();
        console.log("\n" + nome);
        console.log("Digite Quantidade:");
        quantidade = this.prompt();
        console.log("\n" + quantidade);
        console.log("Digite Preço:");
        preco = this.prompt();
        this.controller.adicionarProdutos(categoria, nome, preco, quantidade);
    }
    listarProdutos() {
        console.log("Entrou no lista Produtos");
    }
    atualizarQuantidade() {
        console.log("Entro no atualiza quantidade");
    }
    removerProduto() {
        console.log("Entrou no remover Produto");
    }
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
                    this.listarProdutos();
                    break;
                case "2":
                    this.adicionarProdutos();
                    break;
                case "3":
                    this.atualizarQuantidade();
                    break;
                case "4":
                    this.removerProduto();
                    break;
                case "5":
                    console.log("Saindo ...");
                    return;
                default:
                    console.log("Opção Iválida");
            }
        }
    }
}
exports.default = EstoqueScreen;
