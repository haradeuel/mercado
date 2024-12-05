import BaseProduto from "../model/BaseProduto";

export interface ProductRepository {
  insertProduct(product: BaseProduto): Promise<void>;
}