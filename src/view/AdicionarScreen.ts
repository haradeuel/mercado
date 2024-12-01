import EstoqueController from "../control/EstoqueController";
import promptSync from "prompt-sync";

export default class AdicionarScreen {
  private prompt = promptSync();
  private estoqueController: EstoqueController;

  // Injeção de Dependência
  constructor(controller: EstoqueController) {
    this.estoqueController = controller;
  }

  // Método principal para capturar e adicionar o produto ao controlador
  public adicionarProduto(): void {
    const categoria = this.promptCategoria();
    const nome = this.promptNome();
    const preco = this.promptPreco();
    const quantidade = this.promptQuantidade();

    const produto = { categoria, nome, preco, quantidade };

    // Enviar o produto para o controlador
    this.estoqueController.adicionarProduto(produto);

    console.log("Produto adicionado com sucesso!");
  }

  // Métodos auxiliares para capturar cada dado
  private promptCategoria(): string {
    return this.validarNaoNumerico("Digite a categoria do produto:");
  }

  private promptNome(): string {
    return this.validarNaoNumerico("Digite o nome do produto:");
  }

  private promptPreco(): number {
    return this.validarNumeroPositivo("Digite o preço do produto:");
  }

  private promptQuantidade(): number {
    return this.validarInteiroPositivo("Digite a quantidade do produto:");
  }

  // Validação para nome e categoria (não podem ser números)
  private validarNaoNumerico(mensagem: string): string {
    const valor = this.prompt(mensagem);
  
    // Tenta converter o valor para número e verifica se é válido
    // Number(valor): Converte a string em número
    // isNaN(Number(valor)): Retorna true se não for possível converter para número (NaN)
    // !isNaN(...) verifica se a conversão foi bem-sucedida (ou seja, o valor é um número)
    if (!isNaN(Number(valor))) {
      console.log("Entrada inválida. O valor não pode ser numérico.");
      return this.validarNaoNumerico(mensagem); // Chama novamente em caso de erro
    }
  
    return valor;
  }
  
  // Validação para preço (deve ser um número maior que zero)
  private validarNumeroPositivo(mensagem: string): number {
    const valor = Number(this.prompt(mensagem));
    if (isNaN(valor) || valor <= 0) {
      console.log("Entrada inválida. O preço deve ser um número válido maior que 0.");
      return this.validarNumeroPositivo(mensagem); // Chama novamente em caso de erro
    }
    return valor;
  }

  // Validação para quantidade (deve ser um número inteiro positivo)
  private validarInteiroPositivo(mensagem: string): number {
    const valor = Number(this.prompt(mensagem));
    if (isNaN(valor) || !Number.isInteger(valor) || valor <= 0) {
      console.log("Entrada inválida. A quantidade deve ser um número inteiro positivo.");
      return this.validarInteiroPositivo(mensagem); // Chama novamente em caso de erro
    }
    return valor;
  }
}
