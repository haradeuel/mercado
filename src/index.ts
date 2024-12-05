import { EstoqueController } from "./control/EstoqueController";
import ProductDatabaseRepository from "./db/ProductDatabaseRepository";
// Função principal para rodar o sistema

async function main() {
  const productRepository = new ProductDatabaseRepository();
  const estoqueController = new EstoqueController(productRepository); 
  await estoqueController.exibirMenu(); 
}

main();
