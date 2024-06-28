"use strict";
let numero = 20;
let potencia = 3;
function numeroPotencia(numero, potencia) {
    return (numero ** potencia);
}
console.log(numeroPotencia);
function numeroPotencia2(numero, potencia) {
    return (numero ** potencia || 2);
}
let numero2 = numeroPotencia2(20);
console.log(numeroPotencia2);
//# sourceMappingURL=Actividad3.js.map