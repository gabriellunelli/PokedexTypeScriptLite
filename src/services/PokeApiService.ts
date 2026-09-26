import { NomeOuId, PokemonApiResponse, PokemonResumo } from "../models/Pokemon";
import { erro } from "../utils/textFormatters";

export async function buscarPokemon(nomeOuId:NomeOuId):Promise<PokemonResumo | null> {
    try {
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomeOuId}`)

        if (resposta.ok) {
            const dados:PokemonApiResponse = await resposta.json()

            const tipos = dados.types.map((item):string => {return item.type.name})

            const dadoFinal:PokemonResumo = {
                id:dados.id,
                nome:dados.name,
                tipos:tipos,
                altura:dados.height,
                peso:dados.weight
            }
            
            return dadoFinal
        } else {
            console.log(erro(`Pokémon não encontrado: ${nomeOuId}`))
            return null
        }
    } catch (error) {
        console.log(erro('Não foi possível buscar o Pokémon.'))
        return null
    }

    
}
