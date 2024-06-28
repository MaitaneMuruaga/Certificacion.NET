"use strict";
class ClaseSencilla {
    constructor(valorA, valorB) {
        this.a = valorA;
        this.b = valorB;
    }
    setA(valorA) {
        this.a = valorA;
    }
    setB(valorB) {
        this.b = valorB;
    }
    getA() {
        return this.a;
    }
    getB() {
        return this.b;
    }
    sumaAyB() {
        return this.a + this.b;
    }
}
let pruebaClaseSencilla = new ClaseSencilla(5, 3);
pruebaClaseSencilla.setA(8);
console.log(pruebaClaseSencilla.getA());
let sumaAyB = pruebaClaseSencilla.sumaAyB();
console.log(sumaAyB);
//# sourceMappingURL=11-POO_ClaseBasica.js.map