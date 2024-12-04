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



