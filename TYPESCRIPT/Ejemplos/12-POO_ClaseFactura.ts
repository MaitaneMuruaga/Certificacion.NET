class Factura {
  // Propiedades
  private iva = 0.21; // Esta propiedad no la pondremos en el constructor. Al estar operativa solo en la propia clase y no exponerla al objeto, la protegemos
  private numero: string;
  private cliente: string;
  private importe: number;
  private descuento: number;
  private pagada: boolean;
  private fecha: Date;

  // Constructor
  constructor(numero: string, cliente: string, importe: number, descuento: number, pagada: boolean, fecha: Date) {
    this.numero = numero;
    this.cliente = cliente;
    this.importe = importe;
    this.descuento = descuento;
    this.pagada = pagada;
    this.fecha = fecha;
  }

  // Métodos
  public setNumero(numero: string): void {
    this.numero = numero;
  }

  public setCliente(cliente: string): void {
    this.cliente = cliente;
  }

  public setImporte(importe: number): void {
    this.importe = importe;
  }

  public setDescuento(descuento: number): void {
    this.descuento = descuento;
  }

  public setPagada(pagada: boolean): void {
    this.pagada = pagada;
  }

  public setFecha(fecha: Date): void {
    this.fecha = fecha;
  }

  public getNumero(): string {
    return this.numero;
  }

  public getCliente(): string {
    return this.cliente;
  }

  public getImporte(): number {
    return this.importe;
  }

  public getDescuento(): number {
    return this.descuento;
  }

  public getPagada(): boolean {
    return this.pagada;
  }

  public getFecha(): Date {
    return this.fecha;
  }

  public getIva(): number {
    return this.iva;
  }

  public getImporteBruto(): number {
    return this.importe - (this.importe * this.descuento) / 100;
  }

  public getImporteIva(): number {
    return this.iva * this.getImporteBruto();
  }

  public getImporteNeto(): number {
    return this.getImporteBruto() + this.getImporteIva();
  }

  public getVencimientoADias(dias: number): Date {
    let fecha = this.getFecha();
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
  }
}

let factura = new Factura('1/2022', 'Juan Luis', 1000, 10, true, new Date());
factura.setNumero('2/2022');
factura.getIva();
console.log('Bruto', factura.getImporteBruto());
console.log('IVA', factura.getImporteIva());
console.log('Neto', factura.getImporteNeto());
console.log('Vencimiento a 30 días', factura.getVencimientoADias(30));
console.log('Vencimiento a 60 días', factura.getVencimientoADias(60));



  