import Fecha from "./fecha.js";
import Tiempo from "./tiempo.js";
import ElementosPedidos from "./elementosPedidos.js";
import Cliente from "./cliente.js";
import Precio from "./precio.js";
import Producto from "./producto.js";

export default class Pedido {
    /**
     * 
     * @param {Fecha} fecha 
     * @param {Tiempo} hora 
     * @param {Cliente} cliente 
     * @param {ElementosPedidos} elementosPedidos 
     */
    constructor(fecha, hora, cliente){
        this.fecha = fecha;
        this.hora = hora;
        this.cliente = cliente;
        this.elementosPedidos =  [];
    }
    getNumeroElementos(){
        return `${this.elementosPedidos.length}`;
    }
    getNumeroProductos(){
        let p = 0;
        this.elementosPedidos.forEach(elemento => { 
            p += elemento.cantidad});
        return p;
    }
    getCostoTotal(){
        let c = 0;
        this.elementosPedidos.forEach(elemento2 => { 
            c += (elemento2.cantidad * elemento2.producto.precio.valor)});
        return `${new Precio(c).getPrecio()}`;
    }
    agregarElemento(elemento2){
        return `${this.elementosPedidos.push(elemento2)}`;
    }
    listarElementos(){
        this.elementosPedidos.forEach((elemento, i) => {
            console.log(`${i} - ${elemento.getDescripcion2()}`)});
    }
    getResumen(){
        return `${this.fecha.getFecha()} ${this.hora.getFormato12()} 
        - ${this.getNumeroElementos()} elemenetos con ${this.getNumeroProductos()} productos 
        - total ${this.getCostoTotal()}`;
    }
}
