import {Repository} from "./Respository";
import BaseProduto from "../model/BaseProduto";
import {ProductRepository} from "./ProductRepository";

export class ProductDatabaseRepository extends Repository implements ProductRepository {
  async insertProduct(product: BaseProduto) {
    const pool = await this.getConexao();

    try {
      const query = `
        INSERT INTO produtos (nome, preco, quantidade,categoria)
        VALUES ($1, $2, $3,$4)
        RETURNING id
      `;

      const valores = [product.nome, product.preco, product.quantidade,product.categoria];

      const resultado = await pool.query(query, valores);
      const idGerado = resultado.rows[0].id;

      product.id = idGerado;

    } catch (err) {
      console.error("Erro ao adicionar produto:", err);
    }
  }
}