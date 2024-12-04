import promptSync from 'prompt-sync'; // Importa o prompt-sync
import { EstoqueController } from "../control/EstoqueController"; // Importa o controlador
import { Product } from "../model/Product"; // Importa o produto concreto
import BaseProduto from '../model/BaseProduto';
import { ScreenView } from "./screen";


export default class AdicionarScreen extends ScreenView {
  private controlador: EstoqueController;

  constructor(controlador: EstoqueController){
    super()
    this.controlador = controlador;
  }

  prompt(message: string) {
    return this.promptSync(`[Adicionar] ${message}]`);
  }

  public async adicionarProduto(): Promise<void> {
    //console.log("Você escolheu adicionar um produto.");
  
    const nome = this.prompt("Digite o nome do produto: ");
    const preco = parseFloat(this.prompt("Digite o preço do produto: "));
    const quantidade = parseInt(this.prompt("Digite a quantidade do produto: "), 10);
  
    console.log(`
      Escolha a categoria do produto:
      1 - Limpeza
      2 - Higiene
      3 - Alimento
    `);
    const categoria = parseInt(this.prompt("Digite o número da categoria: "));
  
    const categoriaMap: Record<number, string> = {
      1: "Limpeza",
      2: "Higiene",
      3: "Alimento",
    };
  
    const categoriaString = categoriaMap[categoria];
    if (!categoriaString) {
      console.log("Categoria inválida. Produto não adicionado.");
      return;
    }
    //PEdir pro controle me dar um produto, não posso instanciar um 
    let novoProduto :BaseProduto = this.controlador.getNewProduto(nome, preco, quantidade, categoriaString);

    await this.controlador.adicionarProduto(novoProduto);
  }
}
