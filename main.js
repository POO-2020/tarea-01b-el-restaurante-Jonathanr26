import Restaurante from "./restaurante.js"
import Pedido from "./pedido.js"
import ElementosPedidos from "./elementosPedidos.js"
import Producto from "./producto.js"
import Cliente from "./cliente.js"
import Direccion from "./direccion.js"
import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Precio from "./precio.js"

class Main {
    constructor() {
      this.pedido = new Pedido(
        new Fecha(26, 2, 2020),
        new Tiempo(5, 50, 'PM'),
        new Cliente('Jonathan',
          new Direccion('Av. Universidad', 301, "SN", 'Lomas Verdes', 28001, 'Colima', 'Colima'),
          3121135597));
  
      this.restaurant = new Restaurante('Karmalan', '911', 'Marte, luna sur');
    }
  
  
    pruebaElementoPedido() {
      let x = new ElementosPedidos(3, new Producto("Pizza", new Precio(65.5)));
      console.log(x.getDescripcion2());
    }
  
    pruebaPedido() {
      console.log(this.pedido.getNumeroElementos());
      console.log(this.pedido.getCostoTotal());
      console.log(this.pedido.getProductos());
      console.log(this.pedido.getResumen());
    }
  
    agregarElemento() {
      let elemento1 = new ElementosPedidos(new Producto('Pizza de  ppchampi', new Precio(65.5)), 3);
      let elemento2 = new ElementosPedidos(new Producto('Crepa', new Precio(45.5)), 4);
      this.pedido.agregarElemento(elemento1);
      this.pedido.agregarElemento(elemento2);
      this.pedido.listarElementos();
    }
  
    pruebaRestaurante() {
      this.restaurant.registrarProductos(new Producto('Flan', new Precio(25.500)));
      this.restaurant.registrarProductos(new Producto('Chocoflan', new Precio(35.500)));
      this.restaurant.listarProductos();
  
  
      let pedido1 = new Pedido(
        new Fecha(25, 2, 202),
        new Tiempo(10, 30, 'PM'),
        new Cliente('Kenia', new Direccion('Su casita', 211, "SN", 'Colinia', 28999, 'Colima', 'Muy lejos'), 3141618781));
  
      let elemento1 = new ElementosPedidos(new Producto('Pizza de ppchampi', new Precio(65.5)), 3);
      let elemento2 = new ElementosPedidos(new Producto('Crepa', new Precio(45.5)), 4);
      pedido1.agregarElemento(elemento1);
      pedido1.agregarElemento(elemento2);
  
      let pedido2 = new Pedido(
        new Fecha(14, 2, 2020),
        new Tiempo(10, 15, 'AM'),
        new Cliente('Samuel', new Direccion('Manuel Altamirano', 752, "SN", 'Lomas de Circunvalacion', 28010, 'Colima', 'Colima'), 3121111111));
  
      let elemento4 = new ElementosPedidos(new Producto('Flan', new Precio(25.500)), 5);
      let elemento3 = new ElementosPedidos(new Producto('Chocofaln', new Precio(35.500)), 10);
      pedido2.agregarElemento(elemento3);
      pedido2.agregarElemento(elemento4);
  
      this.restaurant.registrarPedido(pedido1);
      this.restaurant.registrarPedido(pedido2);
  
      this.restaurant.listarPedidos();
  
    }
  }
  
  let app = new Main();
  
  app.pruebaRestaurante();