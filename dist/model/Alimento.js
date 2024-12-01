"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Produto_1 = __importDefault(require("./Produto"));
class Alimento extends Produto_1.default {
    constructor(id, nome, preco, quantidade, categoria, sabor) {
        super(id, nome, preco, quantidade, categoria); // Chama o construtor da classe pai
        this.sabor = sabor; // Define o atributo adicional
    }
}
exports.default = Alimento;
