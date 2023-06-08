"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Saludo {
    Bienvenida(word) {
        let bienvenida;
        bienvenida = ['hola', 'buenos', 'dias', 'preguntar'];
        if (bienvenida.includes(word)) {
            return true;
        }
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
