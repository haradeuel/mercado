import Produto from "./Produto";

export default class Alimento extends Produto {
    public sabor: string;

    public constructor(
        id: number,
        nome: string,
        preco: number,
        quantidade: number,
        categoria: string,
        sabor: string
    ) {
        super(id, nome, preco, quantidade, categoria); // Chama o construtor da classe pai
        this.sabor = sabor; // Define o atributo adicional
    }
}
