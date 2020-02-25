import Producto from "./producto.js";
import Precio from "./precio.js";

export default class ElementosPedidos{
    /**
     * 
     * @param {Producto} producto 
     * @param {cantidad} cantidad 
     */
    constructor(cantidad, producto){
        this.producto = producto;
        this.cantidad = cantidad;
    }
    getDescripcion2(){
        let preCan = this.cantidad * this.producto.precio.valor;
        
    return `${this.cantidad} x ${this.producto.nombre} ${'$' + new Intl.NumberFormat("en-US").format(preCan)}`;
    }
}
/*
let elementosPedidos1 = new ElementosPedidos(2, new Producto ("Pizza Mexicana grande", new Precio (2000)));
console.log(elementosPedidos1.getDescripcion());
*/