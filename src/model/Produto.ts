export default abstract class Produto {
    private _id: number;
    private _nome: string;
    private _preco: number;
    private _quantidade: number;
    private _categoria: string;
  
    constructor(nome: string, preco: number, quantidade: number, categoria: string) {
      this._nome = nome;
      this._preco = preco;
      this._quantidade = quantidade;
      this._id = 0; // Inicializa com 0 e será atribuído posteriormente
      this._categoria = categoria
    }
  
    // Getter para o id
    public get id(): number {
      return this._id;
    }
  
    // Setter para o id, permitindo atribuição após a criação
    public set id(id: number) {
      this._id = id;
    }
  
    // Getters para os outros atributos
    public get nome(): string {
      return this._nome;
    }
  
    public get preco(): number {
      return this._preco;
    }
  
    public get quantidade(): number {
      return this._quantidade;
    }

    public get categoria(): string {
      return this._categoria;
    }
  }
  