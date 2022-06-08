//Objeto de tipo de Articulos
class tipo_Articulo 
{
    constructor (codArt,nomArt,preArt)
    {
    this.codArt = codArt ;
    this.nomArt = nomArt ;
    this.preArt = preArt ;
    }
}
// precarga de articulos

const Art1 = new tipo_Articulo ( "extra liviano", "SAW 5-30", 500)
const Art2 = new tipo_Articulo ( "liviano", "SAW 10-40", 450)
const Art3 = new tipo_Articulo ("Mediano", "SAW 15-40", 400)
const Art4 = new tipo_Articulo ("pesado", "SAW 25-50", 350)

// Objeto Cliente   
class Datos_clientes 
{
    constructor (nombre, apellido,)
    {
    this.nombre = nombre;
    this.apellido = apellido;
    }
}

// lista de Articulos 
const Lista_Articulos [{tipo_Articulo}]
