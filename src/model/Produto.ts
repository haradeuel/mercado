export default abstract class Produto {
    private id: number;
    private nome: string;
    private preco: number;
    private quantidade: number;
    private categoria: number;

    constructor(id: number, nome: string, preco: number, quantidade: number, categoria: number) {
        this.id = id;   
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
        this.categoria = categoria;
    }

    public getId(): number {
        return this.id;
    }

    public getNome(): string {
        return this.nome;
    }

    public getPreco(): number {
        return this.preco;
    }

    public getQuantidade(): number {
        return this.quantidade;
    }

    public getCategoria(): number {
        return this.categoria;
    }

    setQuantidade(quantidade: number): void {
        this.quantidade = quantidade;
    }
}
