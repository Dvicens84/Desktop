
// DOM
let nombre = prompt("Por Favor Ingrese sus Datos")

const bienvenida = document.getElementById("saludo")
const saludo = document.createElement('h1')
saludo.textContent = "Hola " + nombre 
bienvenida.append(saludo)

const contenedor = document.getElementById("contenedor")
const titulo = document.createElement('h1')
titulo.textContent = "Bienvenido a Cascos Van Damme" 
contenedor.append(titulo)

let listadoDeProductos = document.getElementById("listadoDeProductos")

let cart = []
let totales = []

function mostrarProductos() {
    products.forEach((product) => {
        let card = document.createElement("div")
        listadoDeProductos.append(card)
        let img = document.createElement("img")
        img.setAttribute("src", product.img)
        img.setAttribute("class", "cascos")
        let name = document.createElement("h3")
        name.innerText = (product.name)
        let price = document.createElement("p")
        price.innerText = (product.price)
        let buyButton = document.createElement("button")
        buyButton.innerText = ("Agregar al carrito")
        card.append(img, name, price, buyButton)

        buyButton.addEventListener("click", function () {
            cart.push(product)
            alert("Agregaste " + product.name + " al carrito")
            let cantidad = prompt("ingrese Cantidad")
            detalleDeCompra.innerHTML =  product.name + " " + "$" + product.price * cantidad
            total = product.price * cantidad
            total.push(totales)
        }) 
    }) 
} 

mostrarProductos()
iniciar()


function iniciar(){
    let btnCalcular = document.getElementById("btnCalcular");
    btnCalcular.addEventListener("click", clickBtnCalcular);    

    let btnBorrar = document.getElementById("btnBorrar");
    btnBorrar.addEventListener("click", clickBtnBorrar);

}   

function clickBtnCalcular() {
        /* let detalleDeCompra  = document.getElementById("detalleDeCompra")
        detalleDeCompra.innerHTML = detalleDeCompra.value  */
        alert("el total es $" + total)
    }   

    function clickBtnBorrar() {
        let detalleDeCompra = document.getElementById("detalleDeCompra")
        detalleDeCompra.innerHTML = "";
        }









