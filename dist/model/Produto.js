"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    constructor(id, nome, preco, quantidade) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    getId() {
        return this.id;
    }
    getNome() {
        return this.nome;
    }
    getPreco() {
        return this.preco;
    }
    getQuantidade() {
        return this.quantidade;
    }
    setQuantidade(quantidade) {
        this.quantidade = quantidade;
    }
}
exports.default = Produto;
