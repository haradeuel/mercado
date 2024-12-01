"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class AdicionarScreen {
    // Injeção de Dependência
    constructor(controller) {
        this.prompt = (0, prompt_sync_1.default)();
        this.estoqueController = controller;
    }
    // Método principal para capturar e adicionar o produto ao controlador
    adicionarProduto() {
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
    promptCategoria() {
        return this.validarNaoNumerico("Digite a categoria do produto:");
    }
    promptNome() {
        return this.validarNaoNumerico("Digite o nome do produto:");
    }
    promptPreco() {
        return this.validarNumeroPositivo("Digite o preço do produto:");
    }
    promptQuantidade() {
        return this.validarInteiroPositivo("Digite a quantidade do produto:");
    }
    // Validação para nome e categoria (não podem ser números)
    validarNaoNumerico(mensagem) {
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
    validarNumeroPositivo(mensagem) {
        const valor = Number(this.prompt(mensagem));
        if (isNaN(valor) || valor <= 0) {
            console.log("Entrada inválida. O preço deve ser um número válido maior que 0.");
            return this.validarNumeroPositivo(mensagem); // Chama novamente em caso de erro
        }
        return valor;
    }
    // Validação para quantidade (deve ser um número inteiro positivo)
    validarInteiroPositivo(mensagem) {
        const valor = Number(this.prompt(mensagem));
        if (isNaN(valor) || !Number.isInteger(valor) || valor <= 0) {
            console.log("Entrada inválida. A quantidade deve ser um número inteiro positivo.");
            return this.validarInteiroPositivo(mensagem); // Chama novamente em caso de erro
        }
        return valor;
    }
}
exports.default = AdicionarScreen;
