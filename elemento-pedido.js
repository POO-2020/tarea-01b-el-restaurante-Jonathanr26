import Producto from "./producto.js";
import Precio from "./precio.js"

class ElementoPedido{
    /**
     * 
     * @param {Producto} producto 
     * @param {cantidad} cantidad 
     */
    constructor(producto, cantidad){
        this.producto = producto;
        this.cantidad = cantidad;
    }
    getDescripcion(){
    return `${this.cantidad} x  ${this.producto.nombre}, ${"$" + new Intl.NumberFormat('en-US').format(this.cantidad * this.producto.precio.valor)}`;
    }
}

let elementoPedido1 = new ElementoPedido(2, new Producto ("Pizza Mexicana grande"), new Precio (200));
console.log(elementoPedido1.getDescripcion());