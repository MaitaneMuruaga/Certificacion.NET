export interface ICliente{
    reset: any;
    nombre: string;
    categoria: string;
    email: string;
    facturacionAnual: number;
    localidad: string;
    moroso?: boolean
}