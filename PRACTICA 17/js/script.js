
// precio original

let precio = 45000;

//precio descuento
let descuento = 25;


//=== Cálculo descuento ===//

//Monto
let montoDescuento = precio * (descuento/100);

//PrecioFinal

let precioFinal = precio - montoDescuento;

//HTML 
document.getElementById("precioOriginal").textContent = "$" + precio;
document.getElementById("descuento").textContent = descuento + "%";
document.getElementById("precioFinal").textContent = "$" + precioFinal;
document.getElementById("montoAhorro").textContent = "$" + montoDescuento;

//Consola 

console.log ("Hot Sale");
console.log ("Precio sin DCTO es $" +precio);
console.log ("DCTO es " + descuento + "%");
console.log ("Precio con DCTO es $" + precioFinal);


