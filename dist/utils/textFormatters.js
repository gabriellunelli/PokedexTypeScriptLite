"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aviso = aviso;
exports.ok = ok;
exports.erro = erro;
exports.pokemonLog = pokemonLog;
exports.titulo = titulo;
exports.repetir = repetir;
function aviso(texto) {
    return `[ AVISO ] ${texto}`;
}
function ok(texto) {
    return `[ OK ] ${texto}`;
}
function erro(texto) {
    return `[ ERRO ] ${texto}`;
}
function pokemonLog(id, nome, tipos, altura, peso) {
    return `#${id} - ${nome} | Tipos: ${tipos} | Altura: ${altura} | Peso: ${peso}`;
}
function titulo(titulo) {
    console.log(titulo.toUpperCase());
}
function repetir(texto) {
    for (let i = 0; i < 5; i++) {
        texto += texto;
    }
    console.log(texto);
}
//# sourceMappingURL=textFormatters.js.map