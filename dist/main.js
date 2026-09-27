"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PokeApiService_1 = require("./services/PokeApiService");
const BoxService_1 = require("./services/BoxService");
async function main() {
    // Buscando Pokémon pelo nome
    const charmander = await (0, PokeApiService_1.buscarPokemon)('charmander');
    // Buscando pelo id
    const pikachu = await (0, PokeApiService_1.buscarPokemon)(25);
    // Criando o catálogo a partir da classe
    const catalogo = new BoxService_1.CatalogoPokemon();
    // Listando o catálogo (mostrando vazio)
    catalogo.listarCatalogo();
    if (charmander !== null) {
        catalogo.adicionarAoCatalogo(charmander);
    }
    if (pikachu !== null) {
        catalogo.adicionarAoCatalogo(pikachu);
    }
    const pikachuDuplicado = await (0, PokeApiService_1.buscarPokemon)(25);
    // Testando adicionar um Pokémon já existente no catálogo
    if (pikachuDuplicado !== null) {
        catalogo.adicionarAoCatalogo(pikachuDuplicado);
    }
    // Testando buscar um Pokémon que não existe
    await (0, PokeApiService_1.buscarPokemon)('pokemon-inexistente');
    catalogo.listarCatalogo();
    catalogo.removerDoCatalogo(15); //Testando remover um Pokémon que não há no catálogo
    catalogo.listarCatalogo();
    catalogo.removerDoCatalogo(25);
    catalogo.listarCatalogo();
}
main();
//# sourceMappingURL=main.js.map