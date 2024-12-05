"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const BaseProduct_1 = __importDefault(require("./BaseProduct"));
class Product extends BaseProduct_1.default {
    constructor(nome, preco, quantidade, categoria) {
        super(nome, preco, quantidade, categoria); // Chama o construtor da classe pai (Produto)
    }
    descricao() {
        return `O produto ${this.nome} custa ${this.preco} e há ${this.quantidade} unidades disponiveis`;
    }
}
exports.Product = Product;
