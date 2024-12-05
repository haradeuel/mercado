"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseProduct {
    constructor(nome, preco, quantidade, categoria) {
        this._nome = nome;
        this._preco = preco;
        this._quantidade = quantidade;
        this._id = 0; // Inicializa com 0 e será atribuído posteriormente
        this._categoria = categoria;
    }
    // Getter para o id
    get id() {
        return this._id;
    }
    // Setter para o id, permitindo atribuição após a criação
    set id(id) {
        this._id = id;
    }
    // Getters para os outros atributos
    get nome() {
        return this._nome;
    }
    get preco() {
        return this._preco;
    }
    get quantidade() {
        return this._quantidade;
    }
    get categoria() {
        return this._categoria;
    }
}
exports.default = BaseProduct;
