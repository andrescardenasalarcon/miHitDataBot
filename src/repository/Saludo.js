"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Saludo {
    Bienvenida(word) {
        let bienvenida = ['hola', 'buenos', 'dias', 'preguntar'];
        word = word.toLowerCase();
        console.log(word);
        if (bienvenida.includes(word)) {
            console.log("ENTRE");
            return true;
        }
        console.log("Me sali");
        return false;
    }
    ;
    Despedida(word) {
        let bienvenida;
        bienvenida = ['adios', 'adiós', 'bye', 'me voy',];
        if (bienvenida.includes(word)) {
            return true;
        }
        return false;
    }
    Gracias(word) {
        let bienvenida;
        bienvenida = ['gracias', 'thanks',];
        if (bienvenida.includes(word)) {
            return true;
        }
        return false;
    }
}
const saludo = new Saludo();
exports.default = saludo;
