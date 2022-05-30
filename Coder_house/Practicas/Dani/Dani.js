/* function calularImc (peso , altura) {
    let imc = peso / (altura * altura);
    return resultado;
}

function pedirDatos () {
    let altura = prompt("Ingrese su altura");
    let peso = prompt("Ingrese su peso");
    let imc = peso / (altura * altura);
    alert ("Hola, si IMC es " + Math.round(imc));
}

if (imc<=18) {
    alert ("te encuentras por debajo del peso recomendado");
} else if (imc >= 18 && imc <=25) {
    alert ( "te encuentras en el peso recomendado");
} else if ( imc >= 25 && imc <= 30) {
    alert ("te encuentras por encima del peso recomendado");
} else if (imc >= 30) {
    alert("te encuentras muy por encima del peso recomendado");
} else if (isNaN (imc)){
    alert ("Por favor completa todos los campos de forma correcta");
    
} */


//let masa = prompt ("Averiguemos la masa muscular s o n")
let masa = "s"

while (masa == "s")
{
if (masa == "s"){
function calularImc (peso , altura) {
    let imc = peso / (altura * altura);
    return resultado;
}

    let altura = prompt("Ingrese su altura");
    let peso = prompt("Ingrese su peso");
    let imc = peso / (altura * altura);
    alert("Hola, si IMC es " + Math.round(imc));

    
if (imc<=18) {
    alert ("te encuentras por debajo del peso recomendado");
} else if (imc >= 18 && imc <=25) {
    alert ( "te encuentras en el peso recomendado");
} else if ( imc >= 25 && imc <= 30) {
    alert ("te encuentras por encima del peso recomendado");
} else if (imc >= 30) {
    alert("te encuentras muy por encima del peso recomendado");
} else if (isNaN (imc)){
    alert ("Por favor completa todos los campos de forma correcta");
    
} 
 masa = prompt (" Averiguar otra masa muscular s o n")
}

}
alert ("se cerrara la pagina")

close ()