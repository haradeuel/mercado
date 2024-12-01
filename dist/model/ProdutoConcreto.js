"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Produto_1 = __importDefault(require("./Produto"));
class ProdutoConcreto extends Produto_1.default {
    constructor(id, nome, preco, quantidade, categoria) {
        // Define a categoria como "1" para Higiene
        super(id, nome, preco, quantidade, 1);
    }
}
exports.default = ProdutoConcreto;
