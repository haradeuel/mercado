import { Pool } from 'pg';

export class Repository {
  private pool!: Pool;

  // Função para criar a conexão com o banco
  private async criarConexao(): Promise<void> {
    this.pool = new Pool({
      user: 'postgres', // Nome do usuário do PostgreSQL
      host: 'localhost', // Host do banco de dados
      database: 'mercado', // Nome do banco
      password: 'hdjk', // Senha do banco de dados
      port: 5432, // Porta padrão do PostgreSQL
    });

    try {
      // Tenta conectar ao banco de dados
      await this.pool.connect();
      console.log('Banco de dados conectado com sucesso!');
    } catch (err) {
      // Caso ocorra um erro, exibe a mensagem de erro e finaliza o processo
      console.error('Erro ao conectar no banco de dados:', err);
      process.exit(1); // Sai do processo se não conseguir conectar
    }
  }

  // Função para obter a conexão
  public async getConexao(): Promise<Pool> {
    if (!this.pool) {
      await this.criarConexao();
      // Cria a conexão se não houver uma ativa
    }
    return this.pool; // Retorna a conexão ativa
  }
}