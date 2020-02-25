import Direccion from "./direccion.js"
export default class Cliente{
    /**
     * 
     * @param {sting} nombre 
     * @param {Direccion} direccion 
     * @param {number} telefono 
     */
    constructor(nombre, direccion, telefono){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }
    getPerfil(){
        return `Nombre: ${this.nombre}, 
Direccion: ${this.direccion.getFormatoExtendido()}, 
Telefono: ${this.telefono}`
    }
}
/*
let cliente1 = new Cliente ("Ruben Doblas Gundersen", new Direccion("Manuel Altamirano", 752, "SN", "Lomas de Circunvalacion", 28010, "Colima", "Colima"), 3121555555);
console.log(cliente1.getPerfil());
*/