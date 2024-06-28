class ClaseSencilla {
    // Propiedades. En una clase, las propiedades suelen ser privadas. El modificador de acceso private hace de una propiedad algo privado 
    // que no se verá en el objeto cuando se instancie.
    // Por defecto, las propiedades y métodos en TypeScript son todos públicos
    private a: number;
    private b: number;
  
    // Constructor. Pasamos los valores a las propiedades. El constructor es el método que permite a la clase crear objetos
    constructor(valorA: number, valorB: number) {
      this.a = valorA;
      this.b = valorB;
    }
  
    // En TypeScript, también se pueden crear propiedades en el propio constructor. Este constructor crearía dos propiedades en el objeto: 
    // a y b, ambas numéricas
    // constructor(private a: number, private b: number) {}
  
    // Métodos. El modificador de acceso public hace que los métodos sean accesibles desde el objeto. No hace falta ponerlo 
    // porque por defecto las propiedades y métodos son públicos
    // Si uno de estos métodos es private, no se vería en el objeto
    // this hace referencia al objeto. this.a hace referencia a la propiedad a del objeto
    public setA(valorA: number): void {
      this.a = valorA;
    }
  
    public setB(valorB: number): void {
      this.b = valorB;
    }
  
    public getA(): number {
      return this.a;
    }
  
    public getB(): number {
      return this.b;
    }
  
    public sumaAyB(): number {
      return this.a + this.b;
    }
  }
  
  // Creamos un objeto de la clase. El constructor es llamado por la palabra reservada new. Le pasamos los valores 5 y 3 
  // que son los argumentos que necesita el constructor. Serán los valores que tomen las propiedades a y b respectivamente
  let pruebaClaseSencilla: ClaseSencilla = new ClaseSencilla(5, 3);
  // Cambiamos el valor de a
  pruebaClaseSencilla.setA(8);
  // Sacamos por consola el valor de a
  console.log(pruebaClaseSencilla.getA());
  
  // El método sumaAyB suma a y b (8+3) y devuelve (return el resultado)
  let sumaAyB: number = pruebaClaseSencilla.sumaAyB();
  console.log(sumaAyB);
  