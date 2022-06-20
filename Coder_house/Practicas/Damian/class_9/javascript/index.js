

// const buttonAddEvent = (ID) => {
//     let button = document.getElementById(ID);
//     button.addEventListener('click', () => {
//         console.log('buttonAddEvent')
//     })
// }
// const buttonOnClick = (ID) => {
//     let button = document.getElementById(ID);
//     button.onclick = () => { console.log('buttonOnClick') }
// }
// const buttonInlineEvent = () => {
//     console.log('buttonInlineEvent')
// }

// // buttonAddEvent('botonA')
// // buttonOnClick('botonB')



// const onMouseMove = (ID) => {
//     let button = document.getElementById(ID);
//     button.onmousemove = () => { console.log('onMouseMove') }
// }
// const onMouseEnter = (ID) => {
//     let button = document.getElementById(ID);
//     button.onmouseenter = () => { console.log('onMouseEnter') }
// }
// const onMouseLeave = (ID) => {
//     let button = document.getElementById(ID);
//     button.onmouseleave = () => { console.log('onMouseLeave') }
// }



// // onMouseMove('botonD')
// // onMouseEnter('botonE')
// // onMouseLeave('botonF')



// const inputKeyDown = (ID) => {
//     let input = document.getElementById(ID);
//     input.onkeydown = (event) => { console.log(event.target.value + '  inputKeyDown') }
// }


// const inputKeyUp = (ID) => {
//     let input = document.getElementById(ID);
//     input.onkeyup = (e) => { console.log(e.target.value + '  inputKeyUp') }
// }


// const inputOnChange = (ID) => {
//     let input = document.getElementById(ID);
//     input.onchange = (e) => { console.log(e.target.value + '  inputOnChange') }
// }


// const submitForm = (ID) => {
//     let form = document.getElementById(ID);
//     form.addEventListener('submit', (e) => {
//         e.preventDefault();
//         for (const input of form.children) {
//             console.log(input.value)
//         }
//     })
// }
// submitForm('formulario');


// inputKeyDown('inputA')
// inputKeyUp('inputB')
// inputOnChange('inputC')




class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre
        this.precio = precio
    }
}
class Productos {
    constructor() {
        this.lista = []
    }
    agregarProducto(producto) {
        this.lista.push(producto)
    }
    removerProducto(producto) {
        this.lista = this.lista.filter((value) => {
            return value.nombre !== producto.nombre
        })
    }
    removerProductoHtml(producto) {
        let elemento = document.getElementById(producto.nombre)
        elemento.remove()
    }
    calculateTotalPrice() {
        let total = 0;
        this.lista.map((value) => {
            total = total + parseInt(value.precio)
        })
        return total;
    }
    showPrecioHtml() {
        let total = document.getElementById('total');
        if (total) {
            total.remove();
        }
        let elemento = document.createElement('h1')
        elemento.style.color='#fff';
        elemento.id = 'total';
        elemento.textContent = `Total: ${this.calculateTotalPrice()}`
        document.body.append(elemento)
    }
    logLista() {
        console.log(this.lista);
    }
    renderHtml() {
        let contenedor = document.getElementById('contenedor')
        for (let index = 0; index < this.lista.length; index++) {
            const producto = this.lista[index];
            const elemento = document.createElement('div')
            elemento.id = producto.nombre;
            elemento.className = "producto";
            elemento.innerHTML = `
                <div class="nombre">${producto.nombre}</div>
                <div class="precio">${producto.precio}</div>
            `
            const button = document.createElement('button')
            button.textContent = "Eliminar"
            button.onclick = () => {
                this.removerProducto(producto)
                this.removerProductoHtml(producto)
                this.logLista();
            }
            elemento.append(button)
            contenedor.append(elemento)
        }
        this.showPrecioHtml();
    }
    agregarProductoHtml(producto) {
        let contenedor = document.getElementById('contenedor')
        const elemento = document.createElement('div')
        elemento.className = "producto"
        elemento.id = producto.nombre
        elemento.innerHTML = `
            <div class="nombre">${producto.nombre}</div>
            <div class="precio">${producto.precio}</div>
        `
        const button = document.createElement('button')
        button.textContent = "Eliminar"
        button.onclick = () => {
            this.removerProducto(producto)
            this.removerProductoHtml(producto)
            this.logLista();
        }
        elemento.append(button)
        contenedor.append(elemento)
        this.showPrecioHtml();
    }
}
const PRODUCTOS = new Productos()

const p1 = new Producto('Arroz', 30)
const p2 = new Producto('Azucar', 40)
const p3 = new Producto('Aceite', 50)
const p4 = new Producto('Soda', 100)

PRODUCTOS.agregarProducto(p1)
PRODUCTOS.agregarProducto(p2)
PRODUCTOS.agregarProducto(p3)
PRODUCTOS.agregarProducto(p4)

PRODUCTOS.renderHtml()
PRODUCTOS.logLista()



const submitForm = (id) => {
    let form = document.getElementById(id);
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let nombre = form.children[0].value
        let precio = form.children[1].value
        let product = new Producto(nombre, parseInt(precio))
        PRODUCTOS.agregarProducto(product)
        PRODUCTOS.agregarProductoHtml(product)
        PRODUCTOS.logLista()
    })
}
submitForm('formulario')




























// class Productos {
//     constructor() {
//         this.lista = []
//     }
//     agregarProducto(producto) {
//         this.producto = this.lista.push(producto)
//     }
//     renderProductos(ID) {
//         for (let index = 0; index < this.lista.length; index++) {
//             this.crearHtmlProducto(ID, this.lista[index])

//         }
//     }
//     crearHtmlProducto(ID, producto) {
//         let container = document.getElementById(ID);
//         let item = document.createElement('div');
//         item.innerHTML = `
//         <div class="nombre">${producto.nombre}</div>
//         <div class="precio">${producto.precio}</div>
//         `
//         let button = document.createElement('button');
//         button.textContent = "Agregar "
//         container.append(item)
//     }
// }
// class Producto {
//     constructor(nombre, precio) {
//         this.nombre = nombre;
//         this.precio = precio;
//     }
// }

// class CarritoDeCompras {
//     constructor() {
//         this.lista = []
//     }
//     agregarProducto(producto) {
//         this.producto = this.lista.push(producto)
//     }
//     removerProductoByName(producto) {
//         this.lista = this.lista.filter((v) => { return v.nombre != producto.nombre })
//     }
//     renderLista() {

//     }
// }


// const p1 = new Producto('Arroz',25)
// const p2 = new Producto('Azucar',35)
// const p3 = new Producto('Aceite',45)

// const productos = new Productos();
// productos.agregarProducto(p1)
// productos.agregarProducto(p2)
// productos.agregarProducto(p3)
// productos.renderProductos('contenedor')