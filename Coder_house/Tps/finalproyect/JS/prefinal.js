/* //Declaracion de Arrays a utilizar
const detCompra = []; 
const detallePedido = [];
     
     
     
 // solicitar  datos 
 let nombre = prompt ("Ingrese su Nombre")
  
  
//Objeto  Articulo
class articulo 
{
    constructor (codArt,nomArt,preArt)
    {
    this.codArt = codArt ;
    this.nomArt = nomArt ;
    this.preArt = preArt ;
    }
    mostrarArticulo (){};      
}
//precarga de articulos
const art1 = new articulo ("extra liviano", "SAW 05-30", 500)
const art2 = new articulo ("liviano", "SAW 10-40", 450)
const art3 = new articulo ("Mediano", "SAW 15-40", 400)
const art4 = new articulo ("pesado", "SAW 25-50", 350) 
        

// funcion solitar articulo 

          function solArticulo (){
          {
           artSol = prompt ( nombre +"  "+ "Elija su tipo de aceite"+"\n"+ "1 = extra liviano"+"\n"+ "2 = liviano" +"\n" + "3 = mediano"+ "\n" + "4 =pesado ")
              switch  (artSol)
              {
               case "1":
                artSol = art1.preArt
                alert ("el valor del SAW  5-30 es:" + artSol);                
               break;
               case "2": 
                articulo = 450
                alert ("el valor del SAW  10-40 es:" + articulo)   
               break;
               case "3":
                articulo  = 400
                alert ("el valor del SAW  15-40 es:" + articulo)      
               break;
               case  "4":
                 articulo = 350
                 alert ("el valor del SAW  25-50 es:" + articulo)         
              break;
              default :
              alert ( "Dato no valido") 
              solArticulo ()
              }
            }
        }     
     
      solArticulo ();
      
      let litro = prompt ("Ingrese la cantidad de litros que desea")
      alert ("Estimado" + nombre + "Su total a pagar es:  " + (Artsol.this.preArt * litro))
      alert ("Muchas Gracias por su compra")
      close ( )
 */

      // DOM
let nombre = prompt("Por Favor Ingrese sus Datos")

const bienvenida = document.getElementById("saludo")
const saludo = document.createElement('h1')
saludo.textContent = "Bienvenido " + nombre 
bienvenida.append(saludo)

const contenedor = document.getElementById("contenedor")
const titulo = document.createElement('h1')
titulo.textContent = "Distribuidora D & M" 
contenedor.append(titulo)

let ListaArticulos= document.getElementById("listaArticulos")

let cart = []
let totales = []

function mostrarProductos() {
    articulos.forEach((articulo) => {
        let card = document.createElement("div")
        listaArticulos.append(card)
        let img = document.createElement("img")
        img.setAttribute("src", articulo.img)
        img.setAttribute("class", "aceites")
        let nomArt = document.createElement("h3")
        nomArt.innerText = (articulo.nomArt)
        let precio = document.createElement("p")
        precio.innerText = (articulo.preArt)
        let buyButton = document.createElement("button")
        buyButton.innerText = ("Agregar al carrito")
        card.append(img, nomArt, preArt, buyButton)

        buyButton.addEventListener("click", function () {
            cart.push(articulo)
            alert("Agregaste " + articulo.nomArt + " al carrito")
            let cantidad = prompt("ingrese Cantidad")
            detalleDeCompra.innerHTML = articulo.nomArt  + " " + "$" + articulo.preArt * cantidad
            total = articulo.preArt * cantidad
            total.push(totales)
        }) 
    }) 
} 

mostrarProductos()
iniciar()