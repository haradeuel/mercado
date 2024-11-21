import Database from "./db/Database";
import EstoqueController from "./control/EstoqueController";

// Inicialize o banco de dados
const database = new Database(); // Certifique-se de que a classe Database está implementada corretamente

// Inicialize o controlador do estoque
const estoqueController = new EstoqueController(database);

// Inicialize a interface do estoque (EstoqueScreen)
estoqueController.screen.exibirMenu();
