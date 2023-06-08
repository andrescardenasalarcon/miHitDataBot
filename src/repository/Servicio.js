"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WhatsappModels_1 = __importDefault(require("../shared/WhatsappModels"));
class Servicio {
    Servcicios(word) {
        let bienvenida;
        bienvenida = ['servicios', 'si', 'plan'];
        if (bienvenida.includes(word)) {
            return true;
        }
        return false;
    }
    ;
    Planes(word) {
        let bienvenida;
        bienvenida = [
            "plan 1", "plan 2", "plan 3", "plan 4", "plan 5", "plan 6",
        ];
        if (bienvenida.includes(word)) {
            return true;
        }
        return false;
    }
    ListDePlanes(word, numPerson) {
        const plans = new Array();
        plans["plan 1"] = WhatsappModels_1.default.MessagePlan1(numPerson);
        plans["plan 2"] = WhatsappModels_1.default.MessagePlan2(numPerson);
        plans["plan 3"] = WhatsappModels_1.default.MessagePlan3(numPerson);
        plans["plan 4"] = WhatsappModels_1.default.MessagePlan4(numPerson);
        plans["plan 5"] = WhatsappModels_1.default.MessagePlan5(numPerson);
        plans["plan 6"] = WhatsappModels_1.default.MessagePlan6(numPerson);
        let model;
        for (const plan in plans) {
            if (word.includes(plan)) {
                model = plans[plan];
                break;
            }
        }
        return model;
    }
    ;
}
const servicio = new Servicio();
exports.default = servicio;
