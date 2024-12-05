import BaseProduct from "../model/BaseProduct";

export interface ProductRepository{
    insertProduct(product: BaseProduct): Promise<void>
}