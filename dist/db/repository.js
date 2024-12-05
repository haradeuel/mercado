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
exports.Repository = void 0;
const pg_1 = require("pg");
class Repository {
    // Função para criar a conexão com o banco
    criarConexao() {
        return __awaiter(this, void 0, void 0, function* () {
            this.pool = new pg_1.Pool({
                user: 'postgres', // Nome do usuário do PostgreSQL
                host: 'localhost', // Host do banco de dados
                database: 'mercado', // Nome do banco
                password: 'hdjk', // Senha do banco de dados
                port: 5432, // Porta padrão do PostgreSQL
            });
            try {
                // Tenta conectar ao banco de dados
                yield this.pool.connect();
                console.log('Banco de dados conectado com sucesso!');
            }
            catch (err) {
                // Caso ocorra um erro, exibe a mensagem de erro e finaliza o processo
                console.error('Erro ao conectar no banco de dados:', err);
                process.exit(1); // Sai do processo se não conseguir conectar
            }
        });
    }
    // Função para obter a conexão
    getConexao() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.pool) {
                yield this.criarConexao();
                // Cria a conexão se não houver uma ativa
            }
            return this.pool; // Retorna a conexão ativa
        });
    }
}
exports.Repository = Repository;
