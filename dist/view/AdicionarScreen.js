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
const ScreenView_1 = require("./ScreenView");
class AdicionarScreen extends ScreenView_1.ScreenView {
    constructor(controlador) {
        super();
        this.controlador = controlador;
    }
    prompt(message) {
        return this.promptSync(`[ ${message}]`);
    }
    adicionarProduto() {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log("Você escolheu adicionar um produto.");
            const nome = this.prompt("Digite o nome do produto: ");
            const preco = parseFloat(this.prompt("Digite o preço do produto: "));
            const quantidade = parseInt(this.prompt("Digite a quantidade do produto: "), 10);
            console.log(`
      Escolha a categoria do produto:
      1 - Limpeza
      2 - Higiene
      3 - Alimento
    `);
            const categoria = parseInt(this.prompt("Digite o número da categoria: "));
            const categoriaMap = {
                1: "Limpeza",
                2: "Higiene",
                3: "Alimento",
            };
            const categoriaString = categoriaMap[categoria];
            if (!categoriaString) {
                console.log("Categoria inválida. Produto não adicionado.");
                return;
            }
            //PEdir pro controle me dar um produto, não posso instanciar um 
            let novoProduto = this.controlador.getNewProduto(nome, preco, quantidade, categoriaString);
            yield this.controlador.adicionarProduto(novoProduto);
        });
    }
}
exports.default = AdicionarScreen;
