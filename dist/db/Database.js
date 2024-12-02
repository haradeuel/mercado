"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: "postgres", // Nome de usuário no PostgreSQL
    host: "localhost", // Host do banco
    database: "mercado", // Nome do banco de dados
    password: "hdjk", // Senha do usuário
    port: 5432, // Porta padrão do PostgreSQL
});
exports.default = pool;
