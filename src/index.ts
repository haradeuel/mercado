import { EstoqueController } from "./control/EstoqueController";
import {ProductDatabaseRepository} from "./db/product-database-repository";
// Função principal para rodar o sistema

async function main() {
  const productRepository = new ProductDatabaseRepository();
  const estoqueController = new EstoqueController(productRepository); // Instancia o controlador

  // Exibe o menu e aguarda a interação
  await estoqueController.exibirMenu(); // O controlador cuida de tudo
}

// Executa a função principal
main();
