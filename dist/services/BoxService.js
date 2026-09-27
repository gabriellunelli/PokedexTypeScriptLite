"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogoPokemon = void 0;
const textFormatters_1 = require("../utils/textFormatters");
class CatalogoPokemon {
    catalogo = [];
    adicionarAoCatalogo(pokemon) {
        const existe = this.catalogo.some((item) => item.id === pokemon.id);
        if (existe) {
            console.log((0, textFormatters_1.aviso)(`${pokemon.nome} já está no catálogo.`));
        }
        else {
            this.catalogo.push(pokemon);
            console.log((0, textFormatters_1.ok)(`${pokemon.nome} adicionado ao catálogo.`));
        }
    }
    listarCatalogo() {
        if (this.catalogo.length > 0) {
            console.log('\n');
            (0, textFormatters_1.repetir)('=');
            (0, textFormatters_1.titulo)('Catálogo atual');
            (0, textFormatters_1.repetir)('=');
            this.catalogo.forEach((pokemon) => {
                console.log((0, textFormatters_1.pokemonLog)(pokemon.id, pokemon.nome, pokemon.tipos, pokemon.altura, pokemon.peso));
            });
            (0, textFormatters_1.repetir)('=');
            console.log('\n');
        }
        else {
            console.log((0, textFormatters_1.aviso)('Catálogo vazio.'));
        }
    }
    removerDoCatalogo(pokemonId) {
        const existe = this.catalogo.some((item) => item.id === pokemonId);
        if (existe) {
            this.catalogo = this.catalogo.filter((pokemon) => pokemon.id !== pokemonId);
            console.log((0, textFormatters_1.ok)('Pokémon removido do catálogo.'));
        }
        else {
            console.log((0, textFormatters_1.erro)('Nenhum Pokémon encontrado com esse ID.'));
        }
    }
}
exports.CatalogoPokemon = CatalogoPokemon;
//# sourceMappingURL=BoxService.js.map