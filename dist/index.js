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
// index.ts
const Database_1 = require("./db/Database");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const db = new Database_1.Database();
        try {
            yield db.connect();
            // Exemplo de query
            const result = yield db.query('SELECT NOW() AS current_time');
            console.log('Atual:', result[0].current_time);
            // Fechar a conexão quando terminarmos
            db.close();
        }
        catch (error) {
            console.error('Erro geral:', error);
        }
    });
}
main().catch(console.error);
