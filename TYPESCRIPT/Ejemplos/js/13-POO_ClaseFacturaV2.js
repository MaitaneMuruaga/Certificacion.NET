"use strict";
class ClaseSencillaV2 {
    constructor(a, b) {
        this.a = a;
        this.b = b;
        if (a < 0 || b < 0) {
            throw new Error('Número(s) negativos');
        }
    }
    get getA() {
        return this.a;
    }
    set setA(a) {
        if (a < 0) {
            throw new Error('Número negativo');
        }
        else {
            this.a = a;
        }
    }
    get getB() {
        return this.b;
    }
    set setB(b) {
        if (b < 0) {
            throw new Error('Número negativo');
        }
        else {
            this.b = b;
        }
    }
    get sumaAyB2() {
        return this.a + this.b;
    }
}
let pruebaClase = new ClaseSencillaV2(5, 3);
pruebaClase.setA = 8;
console.log(pruebaClase.getA);
console.log(pruebaClase.sumaAyB2);
let sumaAyB2 = pruebaClase.sumaAyB2;
console.log(sumaAyB);
//# sourceMappingURL=13-POO_ClaseFacturaV2.js.map