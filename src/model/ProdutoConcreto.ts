import Produto from "./Produto";

export default class ProdutoConcreto extends Produto{
    constructor(id: number, nome: string, preco: number, quantidade: number, categoria:number) {
        // Define a categoria como "1" para Higiene
        super(id, nome, preco, quantidade, 1);
    }

}