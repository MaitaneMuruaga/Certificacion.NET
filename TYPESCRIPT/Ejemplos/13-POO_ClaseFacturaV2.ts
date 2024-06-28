
class ClaseSencillaV2 {
    // En TypeScript, también se pueden crear propiedades en el propio constructor. Este constructor crearía dos propiedades en el objeto: a y b, ambas numéricas
    // constructor(private a: number, private b: number) {}

    constructor(private a: number, private b: number) {
      if (a < 0 || b < 0) {
        throw new Error('Número(s) negativos');
      }
    }

    // Un getter no permite aceptar parámetros
    get getA() {
      return this.a;
    }

    // Un setter obliga a aceptar un parámetro y solo uno
    set setA(a: number) {
      if (a < 0) {
        throw new Error('Número negativo');
      } else {
        this.a = a;
      }
    }

    get getB() {
      return this.b;
    }

    set setB(b: number) {
      if (b < 0) {
        throw new Error('Número negativo');
      } else {
        this.b = b;
      }
    }

    // Se pueden utilizar getters para implementar lógica, pero a diferencia de los métodos, los getters no admiten argumentos
    get sumaAyB2() {
      return this.a + this.b;
    }
  }

  let pruebaClase: ClaseSencillaV2 = new ClaseSencillaV2(5, 3);
  // let pruebaClase2: ClaseSencillaV2 = new ClaseSencillaV2(-5, 3);   error
  // Cambiamos el valor de a
  pruebaClase.setA = 8;
  // pruebaClase.nuevoValorB = -8;   error
  // Sacamos por consola el valor de a
  console.log(pruebaClase.getA);
  console.log(pruebaClase.sumaAyB2);

  // El método sumaAyB suma a y b (8+3) y devuelve (return el resultado)
  let sumaAyB2: number = pruebaClase.sumaAyB2;
  console.log(sumaAyB);

