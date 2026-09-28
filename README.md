# Pokédex TypeScript Lite

## Sobre o projeto

O Pokédex TypeScript Lite é uma aplicação simples em Node.js com TypeScript que consulta dados de Pokémon na PokeAPI e organiza alguns resultados em um catálogo local durante a execução do programa.

## Objetivo

Praticar os principais conceitos do Módulo 01:

- Node.js;
- JavaScript no back-end;
- TypeScript;
- interfaces;
- funções tipadas;
- arrays;
- objetos;
- JSON;
- métodos de array;
- classes;
- async/await;
- fetch;
- tratamento de erros;
- GitHub;
- GitFlow;
- Kanban.

## Tecnologias utilizadas

- Node.js
- TypeScript
- PokeAPI
- Git
- GitHub

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:
- Node.js
- npm
- Git

## Como instalar

Clone o repositório:

```bash
git clone https://github.com/gabriellunelli/PokedexTypeScriptLite
```
Acesse a pasta do projeto:
```bash
cd PokedexTypeScriptLite
```
Instale as dependências:
```bash
npm install
```
Como executar
```bash
npm start
```
## Estrutura do projeto

PokedexTypeScriptLite/
│
├── src/
│   ├── main.ts
│   ├── models/
│   │   └── Pokemon.ts
│   ├── services/
│   │   ├── BoxService.ts
│   │   └── PokeApiService.ts
│   └── utils/
│       └── textFormatters.ts
│
├── package-lock.json
├── package.json
├── tsconfig.json
└── README.md

Funcionalidades

- Buscar Pokémon por nome ou ID
- Tratar erro de Pokémon inexistente
- Transformar resposta da API em objeto simplificado
- Adicionar Pokémon ao catálogo local
- Impedir Pokémon duplicado
- Listar catálogo
- Remover Pokémon por ID
- Exibir mensagens no terminal
- Exemplos de execução
- Busca válida

Entrada testada:

adicionarAoCatalogo(pikachu)

Saída obtida:

[ OK ] pikachu adicionado ao catálogo.

Listagem do catálogo
Entrada testada:

listarCatalogo()

Saída:

================================
CATÁLOGO ATUAL
================================
#4 - charmander | Tipos: fire | Altura: 6 | Peso: 85
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60
================================

Busca inválida
Entrada testada:

pokemon-inexistente

Saída obtida:

[ ERRO ] Pokémon não encontrado: pokemon-inexistente

Duplicidade

Entrada testada:

adicionarAoCatalogo(pikachu) duas vezes

Saída obtida:

[ AVISO ] pikachu já está no catálogo.

Remoção

Entrada testada:

removerDoCatalogo(25)

Saída obtida:
[ OK ] Pokémon removido do catálogo.

Organização do Kanban

Link do Kanban:

https://app.notion.com/p/kanban-3e50cbab2668804f8868f84620e8e9ec?source=copy_link

Branches utilizadas

- main
- develop
- feat/pokedex
- docs/readme

Melhorias futuras

- Criar menu interativo no terminal
- Salvar catálogo em arquivo JSON
- Exibir HP, ataque e defesa
- Criar filtros por tipo de Pokémon
