//Escribir un programa que pida por teclado cuatro números y calcule y presente la media de los cuatro.

const readline = require('readline').createInterface({input: process.stdin, output: process.stdout});

readline.question("Digite el numero 1:", num1 => {
    let uno = parseFloat(num1)
    readline.question("Digite el numero 2:", num2 => {
        let dos = parseFloat(num2)
        readline.question("Digite el numero 3:", num3 => {
            let tres = parseFloat(num3)
            readline.question("Digite el numero 4:", num4 => {
                let cuatro = parseFloat(num4)
             let media = (uno + dos + tres + cuatro)/4;
             valid = !isNaN(uno) && !isNaN(dos) && !isNaN(tres) && !isNaN(cuatro);
             valid ? console.log(`La media es ${media}`) : console.log(`El valor es incorrecto`);
             readline.close();
            });
        });
    });
});