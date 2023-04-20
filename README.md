# PicpayChallenge

## Framework e Tecnologias Utilizadas

### Principais Tecnologias

Neste Projeto foi utilizado o **Angular v15**, junto com o **Angular Material v15**.

### Outras Tecnologias

Além disso foi utilizado o **date-fns v2** para formatação e validação de datas e o angular **imask v6** para máscaras no input.

O Gerenciador de pacotes utilizado foi o **pnpm v8.2.0**

Para uma padronização de mensagens de commit foi utilizado o **husky v8** e o **commitlint v17**

Para formatação/estilização do código foi utilizado o **eslint v8** e o **prettier v2**

## Instalando as dependências

Antes de rodar o projeto instale as dependências com `pnpm i` (recomendado) ou `npm i`, `yarn` ou o gerenciador de pacotes de sua preferência.

## Rodando o projeto

Execute ng serve para iniciar um servidor de desenvolvimento e depois navegue para http://localhost:4200/.

## Build

Execute `ng build` para gerar a build do projeto. Os artefatos de construção serão armazenados no diretório `dist/`.

## Rodando testes unitários

Execute ng test para executar os testes unitários através do [Karma](https://karma-runner.github.io).

## Estrutura do projeto

### Core Module
O CoreModule desempenha a função de módulo principal do aplicativo, embora não seja o módulo que é inicializado pelo Angular em tempo de execução.

Aqui estão os arquivos que são executados uma vez e em tempo de execução, ou seja aqui estão services, componentes que são executas uma vez no início do projeto, interceptors, guards, constants, enums, utils, e models compartilhados pelo feature module.

### Shared Module
Aqui estão e são exportados os componentes, directives e pipes que são compartilhados pelos feature modules  

### Feature Modules (auth, main)
São os módulos com cada feature da aplicação no caso desta aplicação: AuthModule e MainModule


## Formatação dos commits
Os commits devem ser feitos no seguinte formato: `<type>(<scope>): <subject>` onde `<scope>` é opcional

`feat`: (nova funcionalidade para o usuário, não uma nova funcionalidade para o script de build)
`fix`: (correção de bug para o usuário, não uma correção para o script de build)
`docs`: (alterações na documentação)
`style`: (formatação, ponto e vírgula faltando, etc; sem alteração de código de produção)
`refactor`: (refatoração de código de produção, por exemplo, renomeando uma variável)
`test`: (adição de testes faltantes, refatoração de testes; sem alteração de código de produção)
`chore`: (Atualização de tarefas que não ocasionam alteração no código de produção, mas mudanças de ferramentas, mudanças de configuração e bibliotecas.)
