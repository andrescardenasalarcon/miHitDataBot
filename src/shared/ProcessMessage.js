"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WhatsappModels_1 = __importDefault(require("./WhatsappModels"));
const WhatsappService_1 = __importDefault(require("../services/WhatsappService"));
const Servicio_1 = __importDefault(require("../repository/Servicio"));
class ProcessMessage {
    Process(textUser, number) {
        return __awaiter(this, void 0, void 0, function* () {
            textUser = textUser.toLowerCase();
            var models = [];
            //#region sin chat gpt
            if (textUser.includes("hola") || textUser.includes("buenos") || textUser.includes("buenas")) {
                var model = WhatsappModels_1.default.MessageImageHola(number);
                models.push(model);
            }
            else if (textUser.includes("adios") || textUser.includes("adiós")) {
                var model = WhatsappModels_1.default.MessageImageDespedida(number);
                models.push(model);
            }
            else if (textUser.includes("gracias")) {
                var model = WhatsappModels_1.default.MessageText("Con Gusto desde HitData ✌️", number);
                var model2 = WhatsappModels_1.default.MessageText("No olvides visita nuestra página 💻: https://www.hitdatasoluciones.com", number);
                models.push(model);
                models.push(model2);
            }
            else if (textUser.includes("conócenos") || textUser.includes("conocenos") || textUser.includes("ubicados")) {
                var model = WhatsappModels_1.default.MessageLocation(number);
                models.push(model);
            }
            else if (textUser.includes("contacto") || textUser.includes("información") || textUser.includes("comunicarme") || textUser.includes("comunicarce") || textUser.includes("contáctenos")) {
                var model = WhatsappModels_1.default.MessageContactoText(number);
                models.push(model);
            }
            else if (textUser.includes("servicios") || textUser.includes("si")) {
                var model2 = WhatsappModels_1.default.MessageList(number);
                models.push(model2);
            }
            else if (textUser.includes("plan 1") || textUser.includes("plan 2") || textUser.includes("plan 3") || textUser.includes("plan 4") || textUser.includes("plan 5") || textUser.includes("plan 6")) {
                const plan = Servicio_1.default.ListDePlanes(textUser, number);
                models.push(plan);
            }
            else {
                var model = WhatsappModels_1.default.MessageText("Perdona no te entiendemos", number);
                models.push(model);
            }
            //#endregion
            //#region con chat gpt
            // const resultChatGPT = await chatgptService.GetMessagesChatGPT(textUser);
            // if (resultChatGPT != null) {
            //     var model = whatsappModels.MessageText(resultChatGPT, number);
            //     models.push(model);
            // }else{
            //     var model = whatsappModels.MessageText("Los siento algo salió mal 🫣",number);
            //     models.push(model);
            // }
            //#endregion
            models.forEach((model) => {
                WhatsappService_1.default.SendMessageWhatsApp(model);
            });
            // whatsappService.MarkAsReadMessageWhatsApp(id);
        });
    }
}
const processMessage = new ProcessMessage();
exports.default = processMessage;
