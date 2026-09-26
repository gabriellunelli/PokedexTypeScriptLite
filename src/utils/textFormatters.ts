export function aviso(texto:string):string {
    return `[ AVISO ] ${texto}`
}

export function ok(texto:string):string {
    return `[ OK ] ${texto}`
}

export function erro(texto:string):string {
    return `[ ERRO ] ${texto}`
}

export function pokemonLog(id:number, nome:string, tipos:string[], altura:number, peso:number):string {
    return `#${id} - ${nome} | Tipos: ${tipos} | Altura: ${altura} | Peso: ${peso}`
}

export function titulo(titulo:string):void {
    console.log(titulo.toUpperCase()) 
}

export function repetir(texto:string, qntd:number = 17):void {
    for (let i = 0; i < qntd; i++) {
        texto += texto        
    }

    console.log(texto)
}
