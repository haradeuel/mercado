"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoConcreto = void 0;
const BaseProduct_1 = __importDefault(require("./BaseProduct")); // Importando a classe Produto
class ProdutoConcreto extends BaseProduct_1.default {
    // O construtor da subclasse chama o construtor da classe abstrata
    constructor(nome, preco, quantidade, categoria) {
        super(nome, preco, quantidade, categoria); // Chama o construtor da classe pai (Produto)
    }
    // Método específico da classe ProdutoConcreto (se necessário)
    detalhesProduto() {
        return `Produto: ${this.nome}, Preço: R$${this.preco}, Quantidade: ${this.quantidade}`;
    }
    descricao() {
        throw new Error("Method not implemented.");
    }
}
exports.ProdutoConcreto = ProdutoConcreto;
