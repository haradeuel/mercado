"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class ScreenView {
    constructor() {
        this.promptSync = (0, prompt_sync_1.default)();
    }
    prompt(message) {
        return this.promptSync(message);
    }
    log(message) {
        console.log(message);
    }
}
exports.default = ScreenView;
