"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(require("./db/Database"));
const EstoqueController_1 = __importDefault(require("./control/EstoqueController"));
// Inicialize o banco de dados
const database = new Database_1.default(); // Certifique-se de que a classe Database está implementada corretamente
// Inicialize o controlador do estoque
const estoqueController = new EstoqueController_1.default(database);
// Inicialize a interface do estoque (EstoqueScreen)
estoqueController.getScreen().exibirMenu();
