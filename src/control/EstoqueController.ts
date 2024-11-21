import Database from "../db/Database"
import Produto from "../model/Produto";
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
        console.log(produto);
        this.database.adicionarProduto(produto);
        const produtos = this.database.getProdutos();
        console.log("Produto adicionado com sucesso!",produtos);
    }

   

    

   

    
}