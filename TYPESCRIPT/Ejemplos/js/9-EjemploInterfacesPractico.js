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
Object.defineProperty(exports, "__esModule", { value: true });
const obtenerDatosAPI = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const respuesta = yield fetch('https://api.chucknorris.io/jokes/random?category=animal');
        const resultado = yield respuesta.json();
        console.log(resultado);
        console.log(resultado.value);
    }
    catch (error) {
        console.log(error);
    }
});
obtenerDatosAPI();
//# sourceMappingURL=9-EjemploInterfacesPractico.js.map