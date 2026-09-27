import { buscarPokemon } from "./services/PokeApiService"
import { CatalogoPokemon } from "./services/BoxService";

async function main() {
    // Buscando Pokémon pelo nome
    const charmander = await buscarPokemon('charmander')
    // Buscando pelo id
    const pikachu = await buscarPokemon(25)

    // Criando o catálogo a partir da classe
    const catalogo = new CatalogoPokemon()

    // Listando o catálogo (mostrando vazio)
    catalogo.listarCatalogo()

    if (charmander !== null) {
        catalogo.adicionarAoCatalogo(charmander)
    }

    if (pikachu !== null) {
        catalogo.adicionarAoCatalogo(pikachu)
    }

    const pikachuDuplicado = await buscarPokemon(25)

    // Testando adicionar um Pokémon já existente no catálogo
    if (pikachuDuplicado !== null) {
        catalogo.adicionarAoCatalogo(pikachuDuplicado)
    }

    // Testando buscar um Pokémon que não existe
    await buscarPokemon('pokemon-inexistente')

    catalogo.listarCatalogo()
    catalogo.removerDoCatalogo(15) //Testando remover um Pokémon que não há no catálogo
    catalogo.listarCatalogo()
    catalogo.removerDoCatalogo(25)
    catalogo.listarCatalogo()
}

main()
