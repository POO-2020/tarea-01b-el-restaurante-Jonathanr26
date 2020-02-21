export default class Precio {
    /**
     *
     * @param {number} valor | Valor del artículo
     */
    constructor(valor) {
      this.valor = valor;
    }
  
    getPrecio() {
      return '$' + new Intl.NumberFormat("en-US").format(this.valor);
    }
  }
/*
let precio1 = new Precio(1279);
console.log(precio1.getPrecio());
*/