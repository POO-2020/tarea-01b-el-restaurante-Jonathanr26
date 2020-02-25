import Precio from "./precio.js";

export default class Producto {
  /**
   *
   * @param {string} nombre 
   * @param {Precio} precio 
   */
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  getDescripcion() {
    return `${this.nombre}, ${this.precio.getPrecio()}`;
  }
}
/*
let producto1 = new Producto("Pizza Mexicana grande", new Precio (1999));
console.log(producto1.getDescripcion());
*/