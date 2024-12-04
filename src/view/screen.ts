import promptSync from "prompt-sync";

export class ScreenView {
  protected promptSync = promptSync();

  prompt(message: string) {
    return this.promptSync(message);
  }

  log(message: string) {
    console.log(message);
  }
}