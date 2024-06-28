class Persona {
    private nombre: string = '';
    private apellido: string = '';
    private edad: number = 0;
  
    constructor(nombre: string, apellido: string, edad: number) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
    }
  
    // Métodos
    public setNombre(nombre: string) {
      this.nombre = nombre;
    }
  
    public setApellido(apellido: string) {
      this.apellido = apellido;
    }
  
    public setEdad(edad: number) {
      this.edad = edad;
    }
  
    public getNombre(): string {
      return this.nombre;
    }
  
    public getApellido(): string {
      return this.apellido;
    }
  
    public getEdad(): number {
      return this.edad;
    }
  
    public esMayorDeEdad(): boolean {
      return this.edad >= 18;
    }
  
    public esMayorDeUnaEdad(edadMinima: number): boolean {
      return this.edad > edadMinima;
    }
  }
  
  // extends permite heredar funcionalidades de otra clase
  // ClaseEmpleado será ClasePersona pero con sus propias características
  class Empleado extends Persona {
    private empresa: string = '';
    private sueldo: number = 0;
  
    // Constructor
    constructor(nombre: string, apellido: string, edad: number, empresa: string, sueldo: number) {
      // super llama al constructor de la clase superior. ClasePersona requería el nombre, el apellido y la edad
      super(nombre, apellido, edad);
      this.empresa = empresa;
      this.sueldo = sueldo;
    }
  
    // Métodos de la propia clase
    public setEmpresa(empresa: string): void {
      this.empresa = empresa;
    }
  
    public setSueldo(sueldo: number): void {
      this.sueldo = sueldo;
    }
  
    public getEmpresa(): string {
      return this.empresa;
    }
  
    public getSueldo(): number {
      return this.sueldo;
    }
  
    public getSueldoNeto(porcentajeRetencion: number = 15) {
      let retencion = (this.sueldo * porcentajeRetencion) / 100;
      return this.sueldo - retencion;
    }
  }
  
  let operario: Empleado = new Empleado('Ana', 'Martín', 25, 'ONCE', 1500);
  
  console.log(operario.esMayorDeEdad());
  console.log(operario.getSueldoNeto(10));
  console.log(operario.getSueldoNeto());
  
  