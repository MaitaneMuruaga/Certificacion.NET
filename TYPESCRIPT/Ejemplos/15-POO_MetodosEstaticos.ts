class EstaticaFunciones {
    // Los métodos y propiedades estáticos son accesibles desde la clase, pero no desde el objeto que se crea
    // Son accesibles escribiendo el nombre de la clase y el .
  
    // Cuando queremos que una propiedad sea visible pero no cambie, debemos convertirla en una propiedad "get"
    // Una propiedad get en realidad se parece más a un método.
    // Ponemos static get, luego el nombre de la propiedad con los paréntesis, :, el tipo de la propiedad y entre llaves return "valor de la propiedad"
    static get factorConversion(): number {
      return 166.386;
    }
  
    static letraDNI(dni: number): string {
      let resto = dni % 23;
      let letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
      let letra = letras.charAt(resto);
      return letra;
    }
  
    public letraDNI2(dni: number): string {
      let resto = dni % 23;
      let letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
      let letra = letras.charAt(resto);
      return letra;
    }
  
    static eurosAPesetas(euros: number): number {
      return euros * this.factorConversion;
    }
  
    static pesetasAEuros(pesetas: number): number {
      return pesetas / this.factorConversion;
    }
  }
  
  let dni = new EstaticaFunciones();
  console.log(EstaticaFunciones.letraDNI(33459874));
  console.log(EstaticaFunciones.factorConversion);
  console.log(EstaticaFunciones.eurosAPesetas(6));
  console.log(EstaticaFunciones.pesetasAEuros(1000));
  