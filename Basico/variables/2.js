//  Escribe un programa que pregunte el precio, el tanto por ciento de descuento,
// y te diga el precio con descuento. Por ejemplo, si el precio que introduce 
// el usuario es 300 y el descuento 20, el programa dirá que el precio final con descuento es de 240. 

const readline = require('readline').createInterface({input: process.stdin, output: process.stdout});

readline.question("Digite el precio del producto:", precio => {
    readline.question("Digite el % del descuento:", descuento => {
        const calcularDescuento = (precio, descuento) => precio - (precio * (descuento / 100));
        console.log("El precio final es: " + calcularDescuento(parseFloat(precio),parseFloat(descuento)));
        readline.close();
    });
});