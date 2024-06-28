//PARTE 1
//1.-Crear una clase con el nombre CuentaCorriente. Tendrá las propiedades: titular, saldo e interés.
class CuentaCorriente {
    private titular: string = '';
    private saldo: number = 0; 
    private interes: number = 0; 

//2.-Crear un constructor que reciba los valores de las tres propiedades.
    constructor (titular: string, saldo: number, interes: number) {
    this.titular = titular; 
    this.saldo = saldo; 
    this.interes = interes; 
    }

//3.-Crear métodos get y set para las tres propiedades.
    public setTitular(titular: string) : void{
        this.titular = titular;
    }

    public setSaldo(saldo: number) : void{
        this.saldo = saldo;
    }

    public setInteres(interes: number) :void{
        this.interes = interes;
    }

    public getTitular(): string{
        return this.titular;
    }

    public getSaldo(): number {
        return this.saldo;
    }

    public getInteres(): number{
        return this.interes;
    }

//4.-Crear un método getInteresMensual que devuelva el resultado de la fórmula: saldo*interés/100/12

    public getInteresMensual(): number {
        return this.interes + (this.saldo * this.interes)/100/12;
    }

//5.-Crear un método getInteresAnual que devuelva el resultado de la fórmula: saldo*interés/100

    public getInteresAnual(): number{
        return this.interes + (this.saldo * this.interes)/100;
    }
}
//6.-Crear un objeto de la clase y probar algunos de sus métodos.

    let PruebaCuentaCorriente : CuentaCorriente = new CuentaCorriente("Princesa Consuela",1200,4);
    PruebaCuentaCorriente.setInteres(3);

    console.log(PruebaCuentaCorriente.getInteres());
    console.log(PruebaCuentaCorriente.getSaldo());
    console.log(PruebaCuentaCorriente.getTitular());


//PARTE 2
//1.-Crear una clase CuentaNomina que extienda o herede de CuentaCorriente.
//2.-Tendrá como propiedad adicional interesAdicional
//3.-Crear un constructor de la clase.    
    class CuentaNomina extends CuentaCorriente{
        private interesAdicional: number = 0;
        private iban: number = 0; 
        private banco: string = '';
        private pais: string = '';
    
        constructor (titular: string, saldo: number, interes: number, interesAdicional: number, iban: number, banco: string, pais: string) {
            super(titular, saldo, interes);
            this.iban = iban;
            this.banco = banco;
            this.pais = pais;
        }
    

//4.-Crear métodos set y get para la propiedad interesAdicional.
        public setInteresAdicional(interesAdicional: number): void {
            this.interesAdicional = interesAdicional;
        }

        public getInteresAdicional(): number {
            return this.interesAdicional;
        }

//5.-Crear un método getInteresMensualNomina con la fórmula: saldo *(interesAdicional+ interés) / 100/12
        public getInteresMensualNomina(): number {
            return this.getSaldo() * (this.interesAdicional + this.getInteres())/100/12;
        }

//6.-Crear un método getInteresAnualNomina con la fórmula: saldo *(interesAdicional+ interés) / 100/    
        public getInteresAnualNomina(): number {
            return this.getSaldo() * (this.interesAdicional + this.getInteres());
        }

//7.-Crear un objeto de la clase y probar algunos de sus métodos.
        


    
    }





