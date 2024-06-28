"use strict";
class CuentaCorriente {
    constructor(titular, saldo, interes) {
        this.titular = '';
        this.saldo = 0;
        this.interes = 0;
        this.titular = titular;
        this.saldo = saldo;
        this.interes = interes;
    }
    setTitular(titular) {
        this.titular = titular;
    }
    setSaldo(saldo) {
        this.saldo = saldo;
    }
    setInteres(interes) {
        this.interes = interes;
    }
    getTitular() {
        return this.titular;
    }
    getSaldo() {
        return this.saldo;
    }
    getInteres() {
        return this.interes;
    }
    getInteresMensual() {
        return this.interes + (this.saldo * this.interes) / 100 / 12;
    }
    getInteresAnual() {
        return this.interes + (this.saldo * this.interes) / 100;
    }
}
let PruebaCuentaCorriente = new CuentaCorriente("Princesa Consuela", 1200, 4);
PruebaCuentaCorriente.setInteres(3);
console.log(PruebaCuentaCorriente.getInteres());
console.log(PruebaCuentaCorriente.getSaldo());
console.log(PruebaCuentaCorriente.getTitular());
class CuentaNomina extends CuentaCorriente {
    constructor(titular, saldo, interes, interesAdicional, iban, banco, pais) {
        super(titular, saldo, interes);
        this.interesAdicional = 0;
        this.iban = 0;
        this.banco = '';
        this.pais = '';
        this.iban = iban;
        this.banco = banco;
        this.pais = pais;
    }
    setInteresAdicional(interesAdicional) {
        this.interesAdicional = interesAdicional;
    }
    getInteresAdicional() {
        return this.interesAdicional;
    }
    getInteresMensualNomina() {
        return this.getSaldo() * (this.interesAdicional + this.getInteres()) / 100 / 12;
    }
}
//# sourceMappingURL=Actividad5.js.map