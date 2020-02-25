import Producto from "./producto.js";
import Precio from "./precio.js";

export default class ElementosPedidos {
    /**
     *
     * @param {Producto} producto 
     * @param {number} cantidad 
     */
    constructor(producto, cantidad) {
      this.producto = producto;
      this.cantidad = cantidad;
    }
  
    getDescripcion() {
      let x = this.cantidad * this.producto.precio.valor;
      return `${this.cantidad} X  ${this.producto.nombre}, ${"$" +
        new Intl.NumberFormat("en-US").format(x)}`;
    }
  }
/*
let elementosPedidos1 = new ElementosPedidos(2, new Producto ("Pizza Mexicana grande", new Precio (2000)));
console.log(elementosPedidos1.getDescripcion());
*/