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
const EstoqueController_1 = require("../control/EstoqueController");
class EditarScreen {
    constructor() {
        this.prompt = (0, prompt_sync_1.default)();
    }
    editarProduto() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Você escolheu editar um produto.");
            // Pergunta o ID do produto a ser editado
            const id = parseInt(this.prompt("Digite o ID do produto que deseja editar: "), 10);
            // Pergunta o novo preço e quantidade
            const preco = parseFloat(this.prompt("Digite o novo preço do produto: "));
            const quantidade = parseInt(this.prompt("Digite a nova quantidade do produto: "), 10);
            // Chama o controlador para editar o produto
            yield EstoqueController_1.EstoqueController.editarProduto(id, preco, quantidade);
            console.log("Produto editado com sucesso!");
        });
    }
}
exports.default = EditarScreen;
