"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListarScreen {
    constructor(controller) {
        this.estoqueController = controller;
    }
    listarProdutos() {
        const produtos = this.estoqueController.getProdutos();
        if (produtos.length === 0) {
            console.log("Não há produtos no estoque.");
        }
        else {
            console.log("Produtos no estoque:");
            for (let i = 0; i < produtos.length; i++) {
                const produto = produtos[i];
                console.log(`${i + 1}. Nome: ${produto.getNome()}, Categoria: ${produto.getCategoria()}, Preço: R$${produto.getPreco()}, Quantidade: ${produto.getQuantidade()}`);
            }
        }
    }
}
exports.default = ListarScreen;
