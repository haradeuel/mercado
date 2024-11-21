"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EstoqueController {
    constructor(database) {
        this.database = database;
    }
    listarProdutos() {
        return this.database.getProdutos();
    }
    adicionarProdutos(categoria, nome, preco, quantidade) {
        this.database.adicionarProduto(categoria, nome, preco, quantidade);
    }
    atualizarQuantidade(id, quantidade) {
        this.database.atualizarQuantidade(id, quantidade);
    }
    removerProduto(id) {
        this.database.removerProduto(id);
    }
}
exports.default = EstoqueController;
