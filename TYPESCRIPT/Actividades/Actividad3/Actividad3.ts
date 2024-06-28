//PARTE 1
//1.-Crear una función que calcule un número elevado a una potencia.
//2.-Probar la función y comprobar el resultado en la consola.
function calcularPotencias (num1: number, num2: number): string {
    return (`${num1} elevado a ${num2} es ` + num1**num2)
}

console.log(calcularPotencias(2,2));


//PARTE 2
//1.-Crear una función igual a la anterior, pero con el parámetro del exponente opcional. Si no se introduce al llamar a la función, la base será elevada al cuadrado.
//2.-Probar la función y comprobar el resultado en la consola.
function calcularPotenciasOpcional (num1: number, num2?: number): string {
    return (`${num1} elevado a ${num2} es ` + num1**(num2 || 2))
}

console.log(calcularPotenciasOpcional(3));


//PARTE 3
//1.-Crear una función igual a la anterior, pero con el parámetro del exponente con valor por defecto 3. Con esto conseguiremos que, Si no se introduce al llamar a la función, la base será elevada al cubo.
//2.-Probar la función y comprobar el resultado en la consola.
function calcularPotenciasPorDefecto (num1: number, num2: number = 3): string {
    return (`${num1} elevado a ${num2} es ` + num1**num2)
}

console.log(calcularPotenciasPorDefecto(2));
