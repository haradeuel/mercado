"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Database {
    constructor() {
        //Array armazena os produtos em memória, dentro dessa classe Database,ele simula o banco de 
        //dados onde cada índice do array vai guardar um produto  com os seus dados.
        //Exemplo: produtos[0] retorna { id: 1, nome: 'Arroz', preco: 10.50, quantidade: 100, categoria: 'Alimento' }
        this.produtos = [];
    }
    //Métodos
    //adiciona produtos no banco(vetor)
    adicionarProduto(produto) {
        this.produtos.push(produto);
    }
    //Obtém os produtos do banco(vetor)
    getProdutos() {
        return this.produtos;
    }
    atualizarQuantidade(id, quantidade) {
        for (let i = 0; i < this.produtos.length; i++) {
            /*this.produtos[i].id estou acessando a posição do vetor e naquela
            /posição pegando o valor da propriedade id do objeto armazenado.
              this.produtos = [
                                { id: 1, nome: 'Arroz', preco: 10.50, quantidade: 100 },
                                { id: 2, nome: 'Sabonete', preco: 2.00, quantidade: 50 },
                                { id: 3, nome: 'Detergente', preco: 3.50, quantidade: 30 }
                            ];
            */
            if (this.produtos[i].id === id) {
                this.produtos[i].quantidade += quantidade;
                return;
            }
        }
        throw new Error("Produto não encontrado");
    }
    removerProduto(id) {
        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].id === id) {
                this.produtos.splice(i, 1); // Remove o produto no índice `i`
                return; // Sai da função após remover
            }
        }
        // Se o produto não for encontrado
        throw new Error('Produto não encontrado.');
    }
}
exports.default = Database;
