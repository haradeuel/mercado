    import Database from "../db/Database"
    import Produto from "../model/Produto";
import ProdutoConcreto from "../model/ProdutoConcreto";
    import EstoqueScreen from "../view/EstoqueScreen";

    export default class EstoqueController{
        private database:Database;
        private screen: EstoqueScreen = new EstoqueScreen(this);
        private produtos: { categoria: string; nome: string; preco: number; quantidade: number }[] = [];

        public constructor(database: Database){
            this.database = database;
        }


    // Adiciona um produto ao estoque
        public adicionarProduto(produto: { categoria: string; nome: string; preco: number; quantidade: number }) {
            this.database.adicionarProduto(produto);
           //Teste
            const produtos = this.database.getProdutos();
            console.log(produtos);
        }
        
        public getProdutos(): Produto[] {
            return this.database.getProdutos().map(produto => new ProdutoConcreto(
                produto.id,
                produto.nome,
                produto.preco,
                produto.quantidade,
                produto.categoria
            ));
        }

        public getScreen(): EstoqueScreen{
                return this.screen;
        }

        

    

        
    }