"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstoqueController = void 0;
const Database_1 = require("../db/Database");
const Product_1 = require("../model/Product");
const AdicionarScreen_1 = __importDefault(require("../view/AdicionarScreen"));
const EstoqueScreen_1 = require("../view/EstoqueScreen");
const ListarScreen_1 = __importDefault(require("../view/ListarScreen"));
const EditarScreen_1 = __importDefault(require("../view/EditarScreen"));
const RemoverScreen_1 = __importDefault(require("../view/RemoverScreen"));
class EstoqueController {
    constructor(productRepository) {
        this.estoqueScreen = new EstoqueScreen_1.EstoqueScreen(this);
        this.screens = new Map();
        this.initializeScreens();
        this.repository = productRepository;
    }
    initializeScreens() {
        this.screens.set('adicionar', new AdicionarScreen_1.default(this));
        this.screens.set('listarProdutos', new ListarScreen_1.default(this));
        this.screens.set('editarProduto', new EditarScreen_1.default(this));
        this.screens.set('removerProduto', new RemoverScreen_1.default(this));
    }
    getScreen(screenName) {
        console.log(`Tentando recuperar a tela: ${screenName}`);
        const screen = this.screens.get(screenName);
        if (!screen) {
            console.error(`Tela '${screenName}' não encontrada.`);
            return undefined;
        }
        console.log(`Tela '${screenName}' recuperada com sucesso.`);
        return screen;
    }
    getNewProduto(nome, preco, quantidade, categoriaString) {
        return new Product_1.Product(nome, preco, quantidade, categoriaString);
    }
    // Função para exibir o menu e processar a escolha do usuário
    exibirMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.estoqueScreen.exibirMenu(); // Chama o método de exibição do menu na EstoqueScreen
        });
    }
    // Método para adicionar um novo produto
    adicionarProduto(produto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repository.insertProduct(produto);
        });
    }
    static removerProduto(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const pool = yield Database_1.Database.getConexao();
            try {
                // Query para remover o produto da tabela 'produtos'
                const query = `DELETE FROM produtos WHERE id = $1 RETURNING *`;
                const resultado = yield pool.query(query, [id]);
                // Se nenhum produto foi removido, retorna uma mensagem
                if (resultado.rowCount === 0) {
                    console.log("Produto não encontrado.");
                }
                else {
                    console.log(`Produto com ID ${id} removido com sucesso!`);
                }
            }
            catch (err) {
                console.error("Erro ao remover produto:", err);
            }
        });
    }
    static listarProdutos() {
        return __awaiter(this, void 0, void 0, function* () {
            const pool = yield Database_1.Database.getConexao();
            try {
                // Consulta todos os produtos no banco de dados, incluindo o ID
                const resultado = yield pool.query('SELECT * FROM produtos');
                // Mapeia os resultados para uma lista de objetos ProdutoConcreto
                return resultado.rows.map(row => {
                    // Aqui, criamos um novo produto com base nos dados do banco, incluindo o ID
                    const produto = new Product_1.Product(row.nome, row.preco, row.quantidade, row.categoria);
                    produto.id = row.id; // Atribui o ID do banco de dados ao produto
                    return produto;
                });
            }
            catch (err) {
                console.error("Erro ao listar produtos:", err);
                return [];
            }
        });
    }
    static editarProduto(id, preco, quantidade) {
        return __awaiter(this, void 0, void 0, function* () {
            const pool = yield Database_1.Database.getConexao();
            try {
                // Query para atualizar o preço e a quantidade do produto
                const query = `
        UPDATE produtos
        SET preco = $1, quantidade = $2
        WHERE id = $3
      `;
                // Valores a serem atualizados
                const valores = [preco, quantidade, id];
                // Executa a query para atualizar o produto
                const resultado = yield pool.query(query, valores);
                if (resultado && resultado.rowCount && resultado.rowCount > 0) {
                    console.log(`Produto com ID ${id} atualizado com sucesso!`);
                }
                else {
                    console.log("Produto não encontrado.");
                }
            }
            catch (err) {
                console.error("Erro ao editar produto:", err);
            }
        });
    }
}
exports.EstoqueController = EstoqueController;
