"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    constructor(id, nome, preco, quantidade, categoria) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
        this.categoria = categoria;
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
    getCategoria() {
        return this.categoria;
    }
    setQuantidade(quantidade) {
        this.quantidade = quantidade;
    }
}
exports.default = Produto;
