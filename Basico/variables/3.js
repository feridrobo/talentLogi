//Suponiendo que 1 euro = 1.33250 dólares. Escribe un programa que 
//pida al usuario un número de dólares y calcule el cambio en euros.

let dolar = 1.33250

const readline = require('readline').createInterface({input: process.stdin, output: process.stdout});

readline.question("Digite el valro que desea convertir:", monto => {
    let euro = monto * dolar;
    !isNaN(monto) ? console.log(` ${monto} euros a dolar es ${euro}`): console.log("el valor es incorrecto");
    readline.close();
});