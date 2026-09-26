import { NomeOuId, PokemonResumo } from "../models/Pokemon";
import { aviso, erro, ok, pokemonLog, repetir, titulo } from "../utils/textFormatters";
import { buscarPokemon } from "./PokeApiService";

class CatalogoPokemon {
    private catalogo:PokemonResumo[] = []

    adicionarAoCatalogo( pokemon:PokemonResumo):void {
        const existe = this.catalogo.some((item) => item.id === pokemon.id)

        if (existe) {
            console.log(aviso(`${pokemon.nome} já está no catálogo.`))
        } else {
            this.catalogo.push(pokemon)
            console.log(ok(`${pokemon.nome} adicionado ao catálogo.`))
        }
    }

    listarCatalogo():void {
        if (this.catalogo.length > 0) {
            repetir('=')
            titulo('Catálogo atual')
            repetir('=')

            this.catalogo.forEach((pokemon) => {
            console.log(pokemonLog(pokemon.id, pokemon.nome, pokemon.tipos, pokemon.altura, pokemon.peso))  
            })
            
            repetir('=')
            
        } else {
            console.log(aviso('Catálogo vazio.'))
        }
    }

    removerDoCatalogo(pokemonId:number):void {
        const existe = this.catalogo.some((item) => item.id === pokemonId)

        if (existe) {
            this.catalogo = this.catalogo.filter((pokemon) => pokemon.id !== pokemonId)
            console.log(ok('Pokémon removido do catálogo.'))
            
        } else {
            console.log(erro('Nenhum Pokémon encontrado com esse ID.'))
        }
    }
    
}

