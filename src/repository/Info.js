"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Info {
    Contacto(word) {
        let bienvenida;
        bienvenida = ['contacto', 'información', 'comunicarme', 'comunicarce', 'hablar', 'contactanos',];
        if (bienvenida.includes(word)) {
            return true;
        }
        return false;
    }
    ;
    Ubicacion(word) {
        let ubicacion;
        ubicacion = ['conócenos', 'ubicados', 'ubicado', 'situados', 'local', 'boulevard', 'hitdata',];
        if (ubicacion.includes(word)) {
            return true;
        }
        return false;
    }
    ;
}
const info = new Info();
exports.default = info;
