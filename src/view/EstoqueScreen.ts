import EstoqueController from "../control/EstoqueController";
import promptSync from "prompt-sync";

export default class EstoqueScreen {

  private prompt = promptSync();
  private estoque: EstoqueController;
  private produtos: { categoria: string; nome: string; preco: number; quantidade: number }[] = [];

  // Injeção de Dependência
  public constructor(controller: EstoqueController) {
    this.estoque = controller;
  }

  // Método principal para iniciar o processo
  public adicionarProdutosView() {
    const categoria = this.promptCategoria();
    const nome = this.promptNome();
    const preco = this.promptPreco();
    const quantidade = this.promptQuantidade();

    // Objeto do produto
    const produto = { categoria, nome, preco, quantidade };
    // console.log(produto);
    // Enviar para o controlador
    this.estoque.adicionarProduto(produto);
  }

  // Métodos auxiliares para entrada de dados
  private promptCategoria(): string {
    console.log("Digite a categoria do produto:");
    return this.prompt();
  }

  private promptNome(): string {
    console.log("Digite o nome do produto:");
    return this.prompt();
  }

  private promptPreco(): number {
    console.log("Digite o preço do produto:");
    const preco = Number(this.prompt());
    if (isNaN(preco)) {
      console.log("Preço inválido, por favor insira um número válido.");
      return this.promptPreco();
    }
    return preco;
  }

  private promptQuantidade(): number {
    console.log("Digite a quantidade do produto:");
    const quantidade = Number(this.prompt());
    if (isNaN(quantidade)) {
      console.log("Quantidade inválida, por favor insira um número válido.");
      return this.promptQuantidade();
    }
    return quantidade;
  }

  // Métodos para operações de estoque
  private listarProdutos() {
    console.log("Entrou no listar Produtos");
    // Adicionar lógica de listagem aqui
  }

  private atualizarQuantidade() {
    console.log("Entrou no atualizar quantidade");
    // Adicionar lógica de atualização de quantidade aqui
  }

  private removerProduto() {
    console.log("Entrou no remover Produto");
    // Adicionar lógica de remoção aqui
  }

  // Exibir o menu e interagir com o usuário
  public exibirMenu(): void {
    while (true) {
      console.log(`
                ======== Estoque Supermercado ========
                1. Listar produtos
                2. Adicionar produto
                3. Atualizar quantidade
                4. Remover produto
                5. Sair
            `);

      const opcao = this.prompt("Escolha uma opção:");

      switch (opcao) {
        case "1":
          this.listarProdutos();
          break;
        case "2":
          this.adicionarProdutosView();
          break;
        case "3":
          this.atualizarQuantidade();
          break;
        case "4":
          this.removerProduto();
          break;
        case "5":
          console.log("Saindo ...");
          return;
        default:
          console.log("Opção Inválida");
      }
    }
  }
}
