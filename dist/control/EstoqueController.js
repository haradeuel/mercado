"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProdutoConcreto_1 = __importDefault(require("../model/ProdutoConcreto"));
const EstoqueScreen_1 = __importDefault(require("../view/EstoqueScreen"));
class EstoqueController {
    constructor(database) {
        this.screen = new EstoqueScreen_1.default(this);
        this.produtos = [];
        this.database = database;
    }
    // Adiciona um produto ao estoque
    adicionarProduto(produto) {
        this.database.adicionarProduto(produto);
        //Teste
        const produtos = this.database.getProdutos();
        console.log(produtos);
    }
    getProdutos() {
        return this.database.getProdutos().map(produto => new ProdutoConcreto_1.default(produto.id, produto.nome, produto.preco, produto.quantidade, produto.categoria));
    }
    getScreen() {
        return this.screen;
    }
}
exports.default = EstoqueController;
