"use strict";
const producto = ["ordenador", 500, false];
console.log(producto);
var iva;
(function (iva) {
    iva[iva["superreducido"] = 0.04] = "superreducido";
    iva[iva["reducido"] = 0.1] = "reducido";
    iva[iva["general"] = 0.21] = "general";
})(iva || (iva = {}));
const importe = 1000;
let importeTotal;
importeTotal = (importe * iva.general) + importe;
console.log(importeTotal);
let importe2 = 1500;
function ivaGeneral(importe2) {
    return iva.general * importe2;
}
let importe3 = 2000;
function ivaGeneral2(importe3) {
    return iva.general * importe3;
}
;
console.log(ivaGeneral2);
let importe4 = 2500;
void {
    console, : .log(importe4 * iva.general)
};
//# sourceMappingURL=Actividad2.js.map