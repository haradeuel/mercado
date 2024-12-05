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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDatabaseRepository = void 0;
const repository_1 = require("./repository");
class ProductDatabaseRepository extends repository_1.Repository {
    insertProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const pool = yield this.getConexao();
            try {
                const query = `
        INSERT INTO produtos (nome, preco, quantidade,categoria)
        VALUES ($1, $2, $3,$4)
        RETURNING id
      `;
                const valores = [product.nome, product.preco, product.quantidade, product.categoria];
                const resultado = yield pool.query(query, valores);
                const idGerado = resultado.rows[0].id;
                product.id = idGerado;
            }
            catch (err) {
                console.error("Erro ao adicionar produto:", err);
            }
        });
    }
}
exports.ProductDatabaseRepository = ProductDatabaseRepository;
