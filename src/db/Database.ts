import { Pool } from "pg";

const pool = new Pool({
    user: "postgres", // Nome de usuário no PostgreSQL
    host: "localhost", // Host do banco
    database: "mercado", // Nome do banco de dados
    password: "hdjk", // Senha do usuário
    port: 5432, // Porta padrão do PostgreSQL
});

export default pool;
