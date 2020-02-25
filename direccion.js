export default class Direccion{
    /**
     * 
     * @param {string} calle 
     * @param {number} numeroExterior 
     * @param {number} numeroInterio 
     * @param {string} colonia 
     * @param {number} codigoPostal 
     * @param {string} ciudad 
     * @param {string} municipio 
     */
    constructor(calle, numeroExterior, numeroInterio, colonia, codigoPostal, ciudad, municipio){
        this.calle =  calle;
        this.numeroExterior = numeroExterior;
        this.numeroInterio = numeroInterio;
        this.colonia = colonia;
        this.codigoPostal = codigoPostal;
        this.ciudad = ciudad;
        this.municipio = municipio;
    }
    getFormatoCorto(){
        return `Calle:${this.calle} Numero:${this.numeroExterior}`
    }
    getFormatoExtendido(){
        if(this.numeroInterio == "SN"){
            return `Calle:${this.calle} Numero Exterior:${this.numeroExterior} Numero Interior:${this.numeroInterio} 
Colonia:${this.colonia} CP:${this.codigoPostal} Ciudad:${this.ciudad} Municipio:${this.municipio}`
        }
        else{
            return `Calle:${this.calle} Numero Exterior:${this.numeroExterior} Numero Interir:${this.numeroInterio} 
Colonia:${this.colonia} CP:${this.codigoPostal} Ciudad:${this.ciudad} Municipio:${this.municipio}`            
        }
    }
}
/*
let direccion1 = new Direccion("Manuel Altamirano", 752, "SN", "Lomas de Circunvalacion", 28010, "Colima", "Colima");
console.log(direccion1.getFormatoCorto());
console.log(direccion1.getFormatoExtendido());
*/