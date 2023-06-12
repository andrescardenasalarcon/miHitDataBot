"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SubPlanModels_1 = __importDefault(require("../shared/SubPlanModels"));
const WhatsappModels_1 = __importDefault(require("../shared/WhatsappModels"));
class Servicio {
    Servicios(word) {
        const dictionary = ['servicios', 'si',];
        const containsMatch = dictionary.some((dict) => word.includes(dict));
        return containsMatch;
    }
    ;
    Planes(word) {
        const dictionary = [
            "plan 1", "plan 2", "plan 3", "plan 4", "plan 5", "plan 6",
        ];
        const containsMatch = dictionary.some((dict) => word.includes(dict));
        return containsMatch;
    }
    ListDePlanes(word, numPerson) {
        let model;
        const dictionary = [
            "plan 1", "plan 2", "plan 3", "plan 4", "plan 5", "plan 6",
        ];
        const plans = new Array();
        plans["plan 1"] = WhatsappModels_1.default.MessagePlan1(numPerson);
        plans["plan 2"] = WhatsappModels_1.default.MessagePlan2(numPerson);
        plans["plan 3"] = WhatsappModels_1.default.MessagePlan3(numPerson);
        plans["plan 4"] = WhatsappModels_1.default.MessagePlan4(numPerson);
        plans["plan 5"] = WhatsappModels_1.default.MessagePlan5(numPerson);
        plans["plan 6"] = WhatsappModels_1.default.MessagePlan6(numPerson);
        const found = dictionary.find((dict) => word.includes(dict));
        const foundInString = String(found);
        for (const plan in plans) {
            if (plan.includes(foundInString)) {
                model = plans[plan];
                break;
            }
        }
        return model;
    }
    ;
    //SubPlan para los palnes del plan 1
    SubPlanes(word) {
        const dictionary = [
            "plan hit data", "plan hit data2"
        ];
        const containsMatch = dictionary.some((dict) => word.includes(dict));
        return containsMatch;
    }
    SubPlan(word, numPerson) {
        let model;
        const dictionary = [
            "plan hit data", "plan hit data2"
        ];
        console.log(word);
        const plans = new Array();
        plans["plan hit data"] = SubPlanModels_1.default.MessageSubPlan(numPerson);
        plans["plan hit data2"] = SubPlanModels_1.default.MessageSubPlan(numPerson);
        //...
        const found = dictionary.find((dict) => word.includes(dict));
        const foundInString = String(found);
        for (const plan in plans) {
            if (plan.includes(foundInString)) {
                model = plans[plan];
                break;
            }
        }
        return model;
    }
}
const servicio = new Servicio();
exports.default = servicio;
