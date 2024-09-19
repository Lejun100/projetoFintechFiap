# PADRÃO DE PROJETOS - ORIGIN

## OBJETIVOS

Este documento tem como objetivo instruir os desenvolvedores na criação de suas features.

A partir de agora, utilizaremos o seguinte padrão para nomear arquivos, classes e IDs no HTML.

---

## CLASSES

As classes seguirão o padrão: `.section-elemento-informacaoDoElemento`

**Exemplo**: Para a section "Produtos", a sua div de conteúdo ficará: `.section-produtos-content`.

---

## IDs

Lembre-se que o ID é único, ou seja, somente 1 por sessão.

Utilizar o mesmo padrão das classes: `#section-elemento-informacaoDoElemento`.

---

## PÁGINAS

As páginas seguirão o seguinte padrão de nomenclatura:

- Tela de login: `index.html`
- Demais telas: `nomeDaTela.html`

---

## FOLHAS DE ESTILO

Estilizar a página com base no **SCSS**, respeitando a responsabilidade de cada estilo. Evitar a adição de novos arquivos CSS para otimizar o carregamento da página.

Utilizar o encadeamento de classes para manter a hierarquia de estilo.

Para compilar o SCSS, baixe a extensão **Live Sass Compiler** (versão 6.1.2) no VSCode e ative o **Watch Sass** na barra de status.

Caso utilize outras IDEs, use o seguinte comando no terminal dentro da pasta do projeto:


```sass --watch assets/scss:assets/css``` 

---
## INSTALACÃO NODE

Baixar e instalar o Node na versão mais recente  LTS com a instalação padrão sendo next next finish até o final.

https://nodejs.org/pt/download/prebuilt-installer

---

## INSTALAÇÃO SASS

Após instalação do Node basra executar o comando abaixo para instalaçao do SSASS

Windows
```npm install -g sass```


### Referência 

https://sass-lang.com/install/

---

## JAVASCRIPT
Variáveis e funções sempre em camelCase

Utilizar o padrão de projeto é garantir a usabilidade do codigo por outros desenvolvedores.

---

### Arquitetura do projeto

Time B
├── front
│   ├── assets
│   │   ├── css
│   │   ├── js
│   │   └── scss
│   │       ├── backoffice
│   │       │   ├── cadastro.scss
│   │       │   ├── entregas.scss
│   │       │   ├── faturados.scss
│   │       │   ├── login.scss
│   │       │   ├── produtos.scss
│   │       │   ├── resumo.scss
│   │       │   ├── tickets.scss
│   │       │   └── reset.scss
│   │       └── style.scss
│   ├── index.html (login)
│   ├── cadastro.html
│   └── backoffice.html
└── README.md (Arquivo de informações do projeto)

---

Duvidas e sugestãos - Fale como moderador
(11)9.4565-1565
misaelmarcelino - Github  
misael.marcelino - Discord

