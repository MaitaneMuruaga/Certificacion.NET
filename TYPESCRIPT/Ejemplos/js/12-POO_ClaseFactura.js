"use strict";
class Factura {
    constructor(numero, cliente, importe, descuento, pagada, fecha) {
        this.iva = 0.21;
        this.numero = numero;
        this.cliente = cliente;
        this.importe = importe;
        this.descuento = descuento;
        this.pagada = pagada;
        this.fecha = fecha;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    setCliente(cliente) {
        this.cliente = cliente;
    }
    setImporte(importe) {
        this.importe = importe;
    }
    setDescuento(descuento) {
        this.descuento = descuento;
    }
    setPagada(pagada) {
        this.pagada = pagada;
    }
    setFecha(fecha) {
        this.fecha = fecha;
    }
    getNumero() {
        return this.numero;
    }
    getCliente() {
        return this.cliente;
    }
    getImporte() {
        return this.importe;
    }
    getDescuento() {
        return this.descuento;
    }
    getPagada() {
        return this.pagada;
    }
    getFecha() {
        return this.fecha;
    }
    getIva() {
        return this.iva;
    }
    getImporteBruto() {
        return this.importe - (this.importe * this.descuento) / 100;
    }
    getImporteIva() {
        return this.iva * this.getImporteBruto();
    }
    getImporteNeto() {
        return this.getImporteBruto() + this.getImporteIva();
    }
    getVencimientoADias(dias) {
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
//# sourceMappingURL=12-POO_ClaseFactura.js.map