export default class Precio {
    /**
     *
     * @param {number} valor | Valor del artículo
     */
    constructor(valor) {
      this.valor = parseFloat(valor).toFixed(2);
    }
  
    getPrecio() {
      return `$${this.valor}`;
    }
  }
/*
let precio1 = new Precio(1279);
console.log(precio1.getPrecio());
*/