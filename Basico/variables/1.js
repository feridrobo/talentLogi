//Escribe un programa que pida un número entero, y conteste al usuario: “Has introducido el número (x), gracias”.
const readline = require('readline').createInterface({input: process.stdin, output: process.stdout});

readline.question("Digite un número entero:", num => {
       num = parseFloat(num);
       !isNaN(num) ? console.log(`Has introducido el número ${num}, gracias`): console.log("Valor incorrecto");
        readline.close();
});