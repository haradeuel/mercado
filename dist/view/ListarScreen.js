"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const EstoqueController_1 = require("../control/EstoqueController");
const ScreenView_1 = require("./ScreenView");
class ListarScreen extends ScreenView_1.ScreenView {
    constructor(controlador) {
        super();
        this.controlador = controlador;
    }
    listarProdutos() {
        return __awaiter(this, void 0, void 0, function* () {
            this.log("Você escolheu listar os produtos.");
            // Chama o controlador para obter os produtos
            const produtos = yield EstoqueController_1.EstoqueController.listarProdutos();
            if (produtos.length === 0) {
                console.log("Não há produtos cadastrados.");
            }
            else {
                console.log("Produtos cadastrados:");
                // Verifique a lista de produtos antes de exibi-los
                //console.log(produtos);
                // Exibe os produtos
                produtos.forEach((produto, index) => {
                    console.log(`${index + 1} - ID: ${produto.id}, Nome: ${produto.nome}, Preço: ${produto.preco}, Quantidade: ${produto.quantidade}, Categoria: ${produto.categoria}`);
                });
            }
        });
    }
}
exports.default = ListarScreen;
