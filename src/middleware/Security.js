"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Security {
    verificarToken(req, res, next) {
        var _a;
        if (!req.headers.authorization) {
            res.status(401).json({
                respuesta: "Petición negada por el sistema de seguridad",
            });
        }
        else {
            try {
                const llavePrivada = String(process.env.PASS_SECRET);
                const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
                const datos = jsonwebtoken_1.default.verify(token, llavePrivada);
                req.body.datosUsuario = datos;
                next();
            }
            catch (error) {
                res.status(401).json({ respuesta: "Intento de fraude" });
            }
        }
    }
}
const security = new Security();
exports.default = Security;
