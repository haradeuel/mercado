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
class RemoverScreen {
    constructor(controlador) {
        this.prompt = (0, prompt_sync_1.default)();
        this.controlador = controlador;
    }
    // Método para remover o produto
    removerProduto() {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log("Você escolheu remover um produto.");
            // Solicita ao usuário o ID do produto a ser removido
            const id = parseInt(this.prompt("Digite o ID do produto a ser removido: "));
            if (isNaN(id)) {
                console.log("ID inválido. Produto não removido.");
                return;
            }
            // Chama o controlador para remover o produto
            yield EstoqueController_1.EstoqueController.removerProduto(id);
        });
    }
}
exports.default = RemoverScreen;
