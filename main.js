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
      new Fecha(25, 2, 2020),
      new Tiempo(4, 35, 'PM'),
      new Cliente('Jonathan',
        new Direccion('Manuel Altamirano', 752, "SN", 'Lomas de circunvalacion', 28010, 'Colima', 'Colima'),
        3121691160));

    this.restau = new Restaurante('Karmaland', 'Temporada 4');
  }


  testElementoPedido() {
    let x = new ElementosPedidos(new Producto("Pizza", new Precio(65.5)), 2);
    console.log(x.getDescripcion());
  }

  testPedido() {
    console.log(this.pedido.getNumeroElementos());
    console.log(this.pedido.getCostoTotal());
    console.log(this.pedido.getProductos());
    console.log(this.pedido.getResumen());
  }

  agregarElemento() {
    let elem1 = new ElementosPedidos(new Producto('Pizza ppchampi', new Precio(65.5)), 3);
    let elem2 = new ElementosPedidos(new Producto('Crepa de nutella', new Precio(45.5)), 6);
    this.pedido.agregarElemento(elem1);
    this.pedido.agregarElemento(elem2);
    this.pedido.listarElementos();
  }

  testRestaurante() {
    this.restau.registrarProductos(new Producto('Ensalada', new Precio(55.500)));
    this.restau.registrarProductos(new Producto('Clericot', new Precio(35.500)));
    this.restau.listarProductos();


    let pedido1 = new Pedido(
      new Fecha(25, 2, 2020),
      new Tiempo(8, 15, 'PM'),
      new Cliente('Jonathan',
      new Direccion('Manuel Altamirano', 752, "SN", 'Lomas de circunvalacion', 28010, 'Colima', 'Colima'),
      3121691160));

    let elem1 = new ElementosPedidos(new Producto('Pizza ppchampi', new Precio(65.5)), 3);
    let elem2 = new ElementosPedidos(new Producto('Crepa', new Precio(45.5)), 6);
    pedido1.agregarElemento(elem1);
    pedido1.agregarElemento(elem2);

    let pedido2 = new Pedido(
      new Fecha(26, 2, 2020),
      new Tiempo(8, 35, 'PM'),
      new Cliente('Kenia', new Direccion('Su callecita', 50, 'Colonia', 28000, 'Colima', 'Colima'), 3121618781));

    let elem4 = new ElementosPedidos(new Producto('Ensalada', new Precio(55.500)), 4);
    let elem3 = new ElementosPedidos(new Producto('Clericot', new Precio(35.500)), 11);
    pedido2.agregarElemento(elem3);
    pedido2.agregarElemento(elem4);

    this.restau.registrarPedido(pedido1);
    this.restau.registrarPedido(pedido2);

    this.restau.listarPedidos();

  }
}

let app = new Main();

app.testRestaurante();