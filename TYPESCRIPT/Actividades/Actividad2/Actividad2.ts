//PARTE 1
// 1.-Crear una constante llamada producto que sea una tupla con la sintaxis adecuada para poner el nombre, el precio 
    //y si el producto está descatalogado o no. Iniciar la constante con unos valores cualesquiera. Mostrar el producto por consola.
const producto : [string, number, boolean] = ["ordenador", 500, false];
console.log(producto);

//PARTE 2
//1.-Crear una enumeración con diferentes tipos de IVA. Tendrá la siguiente información: superreducido: 0.04, reducido: 0,10 y general: 0.21.
enum iva{
    superreducido = 0.04,
    reducido = 0.10,
    general = 0.21,
}

//2.-Aplicar a una constante el IVA general sobre un importe de 1000 y mostrar la constante en consola.
const importe : number = 1000;
let importeTotal: number;

importeTotal = (importe * iva.general) + importe;
console.log(importeTotal);

//PARTE 3
//1.-Crear una función con el nombre calcularIvaGeneral que retorne el IVA general de un importe que se le pasará a la función por argumento.
//2.-Utilizaremos la enumeración de la parte 2 para hallar el IVA.
let importe2: number = 1500;
function ivaGeneral(importe2 : number) {
    return iva.general * importe2;
}

//3.-Utilizar la función para calcular el IVA de 2000 y mostrar en consola el resultado.
function calcularIvaGeneral(ImporteIVA: number): number {
    return iva.general * ImporteIVA;
}
const resultadoIVA = calcularIvaGeneral(2000);
console.log(`El IVA general es de ${resultadoIVA}`);

//4.-Crear una función con el nombre calcularIvaGeneralVoid que muestre por consola el IVA general de un importe que se le
    //pasará a la función por argumento. Utilizaremos la enumeración de la parte 2 para hallar el IVA.
    //Utilizar la función pasándole por argumento 3000.
function calcularIvaGeneralVoid(ImporteIVAVoid: number): void {
    console.log('El IVA general es de ' + iva.general * ImporteIVAVoid);
}
calcularIvaGeneralVoid(3000);

