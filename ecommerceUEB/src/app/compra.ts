import { Producto } from "../app/producto";

export class Compra {
    productos: Array<Producto> = new Array<Producto>();
    cantidadTotal: number;


    agregarProducto(nuevoProducto: Producto): void{
        this.cantidadTotal = 0;
        nuevoProducto.cantidadComprado = 1;
        this.productos[this.productos.length] = nuevoProducto;
        this.productos.forEach((product) =>  this.cantidadTotal += product.cantidadComprado);
    }
}
