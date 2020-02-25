import Pedido from "./pedido.js"
import ElementosPedidos from "./elementosPedidos.js"
import Producto from "./producto.js"
import Cliente from "./cliente.js"
import Direccion from "./direccion.js"
import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Precio from "./precio.js"

export default class Restaurante {
    /**
     * 
     * @param {string} nombre 
     * @param {string} telefono 
     * @param {Direccion} direccion 
     * @param {Pedido} pedidos
     * @param {Producto} productos
     */
    constructor(nombre, telefono, direccion) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.direccion = direccion;
        this.productos = [];
        this.pedidos = [];
    }

    registrarProductos(producto) {
        this.productos.push(producto.getDescripcion());
    }

    listarProductos() {
        this.productos.forEach((producto, i) => {
            console.log(`${i} - ${producto}`)
        });
    }

    registrarPedido(pedido) {
        this.pedidos.push(pedido);
    }

    listarPedidos() {
        this.pedidos.forEach((pedido, i) => {
            console.log(`${i} - ${pedido.getResumen()}`)
        })
    }
}