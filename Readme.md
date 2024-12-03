# Road Map

1. Criar projeto

2.  Criar o arquivo de configuração “package.json”, onde são descritos
os pacotes e dependências necessários para o projeto, e suas versões.

Iniciando o projeto  como o node, npm é gerenciador de pacotes do node.

```bash
npm init --yes
```
3.  Criar o arquivo de configuração do typescript “tsconfig.json”:

```bash
tsc -init
```

4. Editar o arquivo tsconfig.json:(descomenetar linhas)

"outDir": "./dist",
"rootDir": "./src",

5. Criar uma pasta /src e o arquivo index.ts dentro desta pasta:

6. Compilar projeto :

```bash
tsc
```
7. Rodar projeto 

```bash
node dist/index.js
```



Duas validações na uma na  view e outra  no controller 


Entrega 26/11/2024

Sobre-escrita de métodos
    Quando a superclasse tem um método e é sobrescrito(personalizado) na classe filha.

Sobrecarga de método

constructor(nome: string, age?:number){

}

instanciei o objeto
let objeto: Objeto = new Objeto("Harã");

Somente o nome é obrigatório, o age é opcional