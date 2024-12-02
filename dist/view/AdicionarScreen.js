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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync")); // Importa o prompt-sync
const EstoqueController_1 = require("../control/EstoqueController"); // Importa o controlador
const ProdutoConcreto_1 = require("../model/ProdutoConcreto"); // Importa o produto concreto
class AdicionarScreen {
    constructor() {
        this.prompt = (0, prompt_sync_1.default)();
    }
    adicionarProduto() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Você escolheu adicionar um produto.");
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
            const novoProduto = new ProdutoConcreto_1.ProdutoConcreto(nome, preco, quantidade, categoriaString);
            yield EstoqueController_1.EstoqueController.adicionarProduto(novoProduto);
        });
    }
}
exports.default = AdicionarScreen;
