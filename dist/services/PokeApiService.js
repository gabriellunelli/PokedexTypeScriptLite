"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarPokemon = buscarPokemon;
const textFormatters_1 = require("../utils/textFormatters");
async function buscarPokemon(nomeOuId) {
    try {
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomeOuId}`);
        if (resposta.ok) {
            const dados = await resposta.json();
            const tipos = dados.types.map((item) => { return item.type.name; });
            const dadoFinal = {
                id: dados.id,
                nome: dados.name,
                tipos: tipos,
                altura: dados.height,
                peso: dados.weight
            };
            return dadoFinal;
        }
        else {
            console.log((0, textFormatters_1.erro)(`Pokémon não encontrado: ${nomeOuId}`));
            return null;
        }
    }
    catch (error) {
        console.log((0, textFormatters_1.erro)('Não foi possível buscar o Pokémon.'));
        return null;
    }
}
//# sourceMappingURL=PokeApiService.js.map