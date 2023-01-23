//  Escribe un programa que pregunte el precio, el tanto por ciento de descuento,
// y te diga el precio con descuento. Por ejemplo, si el precio que introduce 
// el usuario es 300 y el descuento 20, el programa dirá que el precio final con descuento es de 240. 

let precio = parseFloat(prompt("Digite el precio del producto:"));
let descuento = parseFloat(prompt("Digite el % del descuento:")) / 100;

function calcularDescuento(precio,descuento){
    let precioFinal = precio - (precio * descuento )
    return precioFinal;
}

alert("El precio final es: " + calcularDescuento(precio,descuento));