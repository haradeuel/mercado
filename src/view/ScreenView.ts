import PromptSync from "prompt-sync";


export default class ScreenView{
    protected promptSync = PromptSync();
    
    prompt(message: string){
        return this.promptSync(message);
    }

    log(message: string){
        console.log(message);
    }    
}