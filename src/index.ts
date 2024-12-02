import { EstoqueController } from "./control/EstoqueController";
// Função principal para rodar o sistema

async function main() {
  const estoqueController = new EstoqueController(); // Instancia o controlador

  // Exibe o menu e aguarda a interação
  await estoqueController.exibirMenu(); // O controlador cuida de tudo
}

// Executa a função principal
main();
