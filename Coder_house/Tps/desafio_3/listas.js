//Objeto de tipo de Articulos
class Articulo 
{
    constructor (codArt,nomArt,preArt)
    {
    this.codArt = codArt ;
    this.nomArt = nomArt ;
    this.preArt = preArt ;
    }
    mostrarArticulo (){}
}
// precarga de articulos

const Art1 = new Articulo ("extra liviano", "SAW 05-30", 500)
const Art2 = new Articulo ("liviano", "SAW 10-40", 450)
const Art3 = new Articulo ("Mediano", "SAW 15-40", 400)
const Art4 = new Articulo ("pesado", "SAW 25-50", 350)


 
 
// Objetos detalle de pedido
class DetallePedido
{
    constructor (Articulo, cantidad )
    {
        this.Articulo = Articulo
        this.cantidad = cantidad
    }
    calcularSubtotal(){
        let Subtotal = this.Articulo.preArt * this.cantidad 
        return Subtotal       
    }
    mostrarDetalle(){}
}

//precarga de Detalle pedido
const pedido1 = new DetallePedido (Art1, 10);
const pedido2 = new DetallePedido (Art2, 15);
const pedido3 = new DetallePedido (Art3, 20);
const pedido4 = new DetallePedido (Art4, 25);

// declaracion Pedido Final

class PedidoFinal {
    constructor(fecha, detalles) {
        this.fecha = fecha;
        this.detalles = detalles;
    }
    calcularTotal()
    {
        let total = 0;
        for(const dp of this.detalles)
        {
            total = total + dp.calcularSubtotal();
        }
        return total;
    }
    mostrarPedido (){}
}

// Carga de Array 
const array = [];
array.push(pedido1);
array.push(pedido2);
array.push(pedido3);
array.push(pedido4);

const CostoFinal = new PedidoFinal(new Date(), array);


console.log ("--Nombre y Precio de Aceite-- ")
console.log (Art1.nomArt,"$", Art1.preArt)
console.log (Art2.nomArt,"$", Art2.preArt)
console.log (Art3.nomArt,"$", Art3.preArt)
console.log (Art4.nomArt,"$", Art4.preArt)

console.log("(------- Cantidad Solicitada por cada Articulo -------)")
console.log ("Articulo", Art1.nomArt,"$ unidad", Art1.preArt,"unidades pedidas", pedido1.cantidad )
console.log ("Articulo", Art2.nomArt,"$ unidad", Art2.preArt,"unidades pedidas", pedido2.cantidad )
console.log ("Articulo", Art3.nomArt,"$ unidad", Art3.preArt,"unidades pedidas", pedido3.cantidad )
console.log ("Articulo", Art4.nomArt,"$ unidad", Art4.preArt,"unidades pedidas", pedido4.cantidad )

/* 
los subtotales me salen undefined y no se por que???
console.log ("--Subtotales de cada  Articulo-- ")
console.log (pedido1.Subtotal)
console.log (pedido2.Subtotal)
console.log (pedido3.Subtotal)
console.log (pedido4.Subtotal)
*/

console.log ("--- Total a Pagar ---")
console.log(CostoFinal.calcularTotal())

