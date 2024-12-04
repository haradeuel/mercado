import { Database } from "../db/Database";
import Produto from "../model/Produto";
import { ProdutoConcreto } from "../model/ProdutoConcreto";
import AdicionarScreen from "../view/AdicionarScreen";
import { EstoqueScreen } from "../view/EstoqueScreen";
import ListarScreen from "../view/ListarScreen";
import EditarScreen from "../view/EditarScreen";
import RemoverScreen from "../view/RemoverScreen";
type Screens = AdicionarScreen | ListarScreen | EditarScreen | RemoverScreen;

export class EstoqueController {
  private estoqueScreen: EstoqueScreen = new EstoqueScreen(this);
  private screens: Map<string, Screens> = new Map();

  constructor(){
    this.initializeScreens();
  }
  
  private initializeScreens(): void {
    this.screens.set('adicionar', new AdicionarScreen(this));
    this.screens.set('listar', new ListarScreen(this));
    this.screens.set('editar', new EditarScreen(this));
    this.screens.set('remover', new RemoverScreen(this));
  }

  public getScreen(screenName: string): any {
    console.log(`Tentando recuperar a tela: ${screenName}`);
    const screen = this.screens.get(screenName);
    if (!screen) {
        console.error(`Tela '${screenName}' não encontrada.`);
        return undefined;
    }
    console.log(`Tela '${screenName}' recuperada com sucesso.`);
    return screen;
  }
  

  public getNewProduto(nome:string, preco:number,quantidade: number,categoriaString: string):ProdutoConcreto{
      return new ProdutoConcreto(nome,preco,quantidade,categoriaString);
  }
   
  // Função para exibir o menu e processar a escolha do usuário
  public async exibirMenu(): Promise<void> {
    await this.estoqueScreen.exibirMenu(); // Chama o método de exibição do menu na EstoqueScreen
  }
  
  // Método para adicionar um novo produto
  public static async adicionarProduto(produto: Produto): Promise<void> {
    const pool = await Database.getConexao();

    try {
      // Query para inserir o produto na tabela 'produtos'
      const query = `
        INSERT INTO produtos (nome, preco, quantidade,categoria)
        VALUES ($1, $2, $3,$4)
        RETURNING id
      `;

      // Valores a serem inseridos
      const valores = [produto.nome, produto.preco, produto.quantidade,produto.categoria];

      // Executa a query para inserir e obter o ID gerado
      const resultado = await pool.query(query, valores);
      const idGerado = resultado.rows[0].id;

      // Atribui o ID gerado pelo banco ao produto usando o setter
      produto.id = idGerado; // Usando o setter para atribuir o id

    } catch (err) {
      console.error("Erro ao adicionar produto:", err);
    }
  }
  
  public static async removerProduto(id: number): Promise<void> {
    const pool = await Database.getConexao();

    try {
      // Query para remover o produto da tabela 'produtos'
      const query = `DELETE FROM produtos WHERE id = $1 RETURNING *`;
      const resultado = await pool.query(query, [id]);

      // Se nenhum produto foi removido, retorna uma mensagem
      if (resultado.rowCount === 0) {
        console.log("Produto não encontrado.");
      } else {
        console.log(`Produto com ID ${id} removido com sucesso!`);
      }
    } catch (err) {
      console.error("Erro ao remover produto:", err);
    }
  }

  public static async listarProdutos(): Promise<Produto[]> {
    const pool = await Database.getConexao();
    try {
      // Consulta todos os produtos no banco de dados, incluindo o ID
      const resultado = await pool.query('SELECT * FROM produtos');
  
      // Mapeia os resultados para uma lista de objetos ProdutoConcreto
      return resultado.rows.map(row => {
        // Aqui, criamos um novo produto com base nos dados do banco, incluindo o ID
        const produto = new ProdutoConcreto(row.nome, row.preco, row.quantidade, row.categoria);
        produto.id = row.id; // Atribui o ID do banco de dados ao produto
        return produto;
      });
    } catch (err) {
      console.error("Erro ao listar produtos:", err);
      return [];
    }
  }
  

  public static async editarProduto(id: number, preco: number, quantidade: number): Promise<void> {
    const pool = await Database.getConexao();

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
      const resultado = await pool.query(query, valores);

      if (resultado && resultado.rowCount && resultado.rowCount > 0) {
        console.log(`Produto com ID ${id} atualizado com sucesso!`);
      } else {
        console.log("Produto não encontrado.");
      }
    } catch (err) {
      console.error("Erro ao editar produto:", err);
    }
  }

  
}






  





