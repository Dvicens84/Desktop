//Objeto de tipo de Articulos
class articulo 
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
const art1 = new articulo ("extra_liviano", "SAW 05-30", 500);
const art2 = new articulo ("liviano", "SAW 10-40", 450);
const art3 = new articulo ("Mediano", "SAW 15-40", 400);
const art4 = new articulo ("pesado", "SAW 25-50", 350);

// Objetos detalle de pedido
class detallePedido
{
    constructor (articulo, cantidad )
    {
        this.articulo = articulo
        this.cantidad = cantidad
    }
    calcularSubtotal(){
        let subtotal = this.articulo.preArt * this.cantidad 
        return subtotal       
    }
    mostrarDetalle(){}
}

//precarga de Detalle pedido
const pedido1 = new detallePedido (art1, 10);
const pedido2 = new detallePedido (art2, 15);
const pedido3 = new detallePedido (art3, 20);
const pedido4 = new detallePedido (art4, 25);

// declaracion Pedido Final

class pedidoFinal {
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

// Carga de Array toal de pedidos 
const totalPedidos = [];
totalPedidos.push(pedido1);
totalPedidos.push(pedido2);
totalPedidos.push(pedido3);
totalPedidos.push(pedido4);

const costoFinal = new pedidoFinal(new Date(), totalPedidos);

const artListados =  [art4,art2,art3,art1]



 console .log ("--lista de articulos desordenada--")
console.log (artListados)


// ordenamiento de articulos 
artListados.sort ((a,b) => {
    
    if (a.preArt > b.preArt)
    { return 1 }
    if (a.preArt < b.preArt)
    {return -1}
    return 0;   })

console.log ("--Articulos Ordenados por precio-")
console.log (artListados) 