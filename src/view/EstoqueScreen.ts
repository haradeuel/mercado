import EstoqueController from "../control/EstoqueController";
import promptSync from "prompt-sync";

export default class EstoqueScreen {
    
    private prompt = promptSync();
    private estoque: EstoqueController;
    
    //Injeção de Dependencia
    public constructor(controller:EstoqueController){
        this.estoque = controller;
        
    }

    
    private adicionarProdutos(){
      let nome: string;
      let quantidade: number;
      let preco: number;
      let categoria: string;

      console.log("Digite Categoria:"); 
      categoria = this.prompt();
      console.log("\n"+categoria);
      
      console.log("Digite Nome :");
      nome = this.prompt();
      console.log("\n"+nome);
      

      console.log("Digite Quantidade:");
      quantidade = this.prompt();
      console.log("\n"+quantidade);


      console.log("Digite Preço:");
      preco = this.prompt();

      this.controller.adicionarProdutos(categoria, nome, preco, quantidade);
      
    }
    private listarProdutos(){
      
      console.log("Entrou no lista Produtos");

    }
    private atualizarQuantidade(){
      console.log("Entro no atualiza quantidade");
    }
    private removerProduto(){
      console.log("Entrou no remover Produto");

    } 
 
 
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
          this.adicionarProdutos();
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
            console.log("Opção Iválida");          
      }
    }
  }
}
