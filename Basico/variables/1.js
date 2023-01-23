// Escribe un programa que pida un número entero, y conteste al usuario: “Has introducido el número (x), gracias”.
let num = prompt("Introduce un número entero:");
if(!isNaN(num) && Number.isInteger(parseInt(num))){
    alert("Has introducido el número " + num + ", gracias.");
}else{
    alert("El valor introducido es incorrecto");
}