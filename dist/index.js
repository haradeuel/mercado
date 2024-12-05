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
const EstoqueController_1 = require("./control/EstoqueController");
const product_database_repository_1 = require("./db/product-database-repository");
// Função principal para rodar o sistema
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const productRepository = new product_database_repository_1.ProductDatabaseRepository();
        const estoqueController = new EstoqueController_1.EstoqueController(productRepository); // Instancia o controlador
        // Exibe o menu e aguarda a interação
        yield estoqueController.exibirMenu(); // O controlador cuida de tudo
    });
}
// Executa a função principal
main();
