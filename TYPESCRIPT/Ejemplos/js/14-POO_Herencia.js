"use strict";
class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = '';
        this.apellido = '';
        this.edad = 0;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setApellido(apellido) {
        this.apellido = apellido;
    }
    setEdad(edad) {
        this.edad = edad;
    }
    getNombre() {
        return this.nombre;
    }
    getApellido() {
        return this.apellido;
    }
    getEdad() {
        return this.edad;
    }
    esMayorDeEdad() {
        return this.edad >= 18;
    }
    esMayorDeUnaEdad(edadMinima) {
        return this.edad > edadMinima;
    }
}
class Empleado extends Persona {
    constructor(nombre, apellido, edad, empresa, sueldo) {
        super(nombre, apellido, edad);
        this.empresa = '';
        this.sueldo = 0;
        this.empresa = empresa;
        this.sueldo = sueldo;
    }
    setEmpresa(empresa) {
        this.empresa = empresa;
    }
    setSueldo(sueldo) {
        this.sueldo = sueldo;
    }
    getEmpresa() {
        return this.empresa;
    }
    getSueldo() {
        return this.sueldo;
    }
    getSueldoNeto(porcentajeRetencion = 15) {
        let retencion = (this.sueldo * porcentajeRetencion) / 100;
        return this.sueldo - retencion;
    }
}
let operario = new Empleado('Ana', 'Martín', 25, 'ONCE', 1500);
console.log(operario.esMayorDeEdad());
console.log(operario.getSueldoNeto(10));
console.log(operario.getSueldoNeto());
//# sourceMappingURL=14-POO_Herencia.js.map