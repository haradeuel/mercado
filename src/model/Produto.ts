export default abstract class Produto {
    private _id: number;
    private _nome: string;
    private _preco: number;
    private _quantidade: number;
  
    constructor(id: number, nome: string, preco: number, quantidade: number) {
      this._id = id;
      this._nome = nome;
      this._preco = preco;
      this._quantidade = quantidade;
    }
  
    // Getters públicos para os atributos
    public get id(): number {
      return this._id;
    }
  
    public get nome(): string {
      return this._nome;
    }
  
    public get preco(): number {
      return this._preco;
    }
  
    public get quantidade(): number {
      return this._quantidade;
    }
  
    
  }
  