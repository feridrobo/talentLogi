//Escribir un programa que pida por teclado dos resistencias
// y calcule y presente la resistencia equivalente en paralelo (Req=(R1*R2)/(R1+R2)). 


const readline = require('readline').createInterface({input: process.stdin, output: process.stdout});

readline.question("Digite el valor de la resistencia R1: ", r1 => {
    r1 = parseFloat(r1)
    readline.question("Digite valor de la resistencia R2: ", r2   => {
        r2 = parseFloat(r2)
        let req = (r1 * r2) / (r1 + r2);
        console.log("La resistencia equivalente en paralelo es: " + req);
        readline.close();
    });
});