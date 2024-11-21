"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EstoqueScreen_1 = __importDefault(require("../view/EstoqueScreen"));
class EstoqueController {
    constructor(database) {
        this.screen = new EstoqueScreen_1.default(this);
        this.produtos = [];
        this.database = database;
    }
    // Adiciona um produto ao estoque
    adicionarProduto(produto) {
        console.log(produto);
        this.database.adicionarProduto(produto);
        const produtos = this.database.getProdutos();
        console.log("Produto adicionado com sucesso!", produtos);
    }
}
exports.default = EstoqueController;
