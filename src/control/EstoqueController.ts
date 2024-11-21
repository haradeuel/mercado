import Database from "../db/Database"
import Produto from "../model/Produto";
import EstoqueScreen from "../view/EstoqueScreen";

export default class EstoqueController{
    private database:Database;
    private screen: EstoqueScreen = new EstoqueScreen(this);
    
    public constructor(database: Database){
        this.database = database;
    }

    public listarProdutos(): Produto[]{
        return this.database.getProdutos();
    }
    public adicionarProdutos(categoria: string, nome: string, preco: number, quantidade: number ): void{
        this.database.adicionarProduto(categoria,nome, preco, quantidade);
    }
    public atualizarQuantidade(id: number, quantidade: number):void{
        this.database.atualizarQuantidade(id,quantidade);
    }
    public removerProduto(id: number):void{
        this.database.removerProduto(id);
    }
}