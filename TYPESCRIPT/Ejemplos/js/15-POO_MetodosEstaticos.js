"use strict";
class EstaticaFunciones {
    static get factorConversion() {
        return 166.386;
    }
    static letraDNI(dni) {
        let resto = dni % 23;
        let letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
        let letra = letras.charAt(resto);
        return letra;
    }
    letraDNI2(dni) {
        let resto = dni % 23;
        let letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
        let letra = letras.charAt(resto);
        return letra;
    }
    static eurosAPesetas(euros) {
        return euros * this.factorConversion;
    }
    static pesetasAEuros(pesetas) {
        return pesetas / this.factorConversion;
    }
}
let dni = new EstaticaFunciones();
console.log(EstaticaFunciones.letraDNI(33459874));
console.log(EstaticaFunciones.factorConversion);
console.log(EstaticaFunciones.eurosAPesetas(6));
console.log(EstaticaFunciones.pesetasAEuros(1000));
//# sourceMappingURL=15-POO_MetodosEstaticos.js.map