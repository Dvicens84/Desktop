
        // solicitar  datos 
 let nombre = prompt ("Ingrese su Nombre")
    
 
 // funcion solitar articulo 
    function solArticulo ()
    {
     articulo = prompt ( nombre +  " Elija su tipo de aceite  1 = extra liviano,  2 = liviano 3 = mediano 4 =pesado ")
        switch  (articulo)
        {
         case "1": 
          articulo = 500
          alert ("el valor del SAW  5-30 es:" + articulo)                            
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


solArticulo ();

let litro = prompt ("Ingrese la cantidad de litros que desea")
alert ("Estimado" + nombre + "Su total a pagar es:  " + (articulo * litro))
alert ("Muchas Gracias por su compra")
close ( )

  

