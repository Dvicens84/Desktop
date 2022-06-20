class producto  {
    constructor(nombre, precio) {
        this.nombre = nombre
        this.precio = precio
        
    }
    mostrarProducto () {}
}
const producto1 = new producto('Pizza Muzarella',1020);
const producto2 = new producto('Sandwich de bondiola', 900);
const producto3 = new producto('Papas Chedar', 700);

class detallePedido {
    constructor(producto, cantidad) {
        this.producto = producto
        this.cantidad = cantidad
    }
    calcularSubtotal(){
        let subtotal = this.producto.precio * this.cantidad
        return subtotal;
    }
    mostrarDetalle(){}
}


const detallePedido1 = new detallePedido(producto1, 2)
const detallePedido2 = new detallePedido(producto2, 3)
const detallePedido3 = new detallePedido(producto3, 1)

/* console.log(detallePedido1);
console.log(detallePedido2);
console.log(detallePedido3);


console.log(detallePedido1.calcularSubtotal())
console.log(detallePedido2.calcularSubtotal())
console.log(detallePedido3.calcularSubtotal()) */

class pedido {
    constructor(fecha, detalles) {
        this.fecha = fecha;
        this.detalles = detalles;
    }
    calcularTotal(){
        let total = 0;
        for(const dp of this.detalles){
            total = total + dp.calcularSubtotal();
        }
        return total;
    }
    mostrarPedido (){}
}

const array = [];
array.push(detallePedido1);
array.push(detallePedido2);
array.push(detallePedido3);

//console.log(array)

const pedido1 = new pedido(new Date(),array);

//console.log(pedido1);

console.log(pedido1.calcularTotal())