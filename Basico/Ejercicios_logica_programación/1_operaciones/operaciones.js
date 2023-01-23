let num1 = 0, num2 = 0;
document.getElementById("formCalc").addEventListener("submit", function(e){
    e.preventDefault();
    agregarValores();
});

function agregarValores() {
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    calc();
}

function calc(){
    document.getElementById("suma").innerHTML = "Suma: " + suma(num1, num2);
    document.getElementById("resta").innerHTML = "Resta: " + resta(num1, num2);
    document.getElementById("mult").innerHTML = "Multiplicación: " + multiplicacion(num1, num2);
    document.getElementById("division").innerHTML = "División: " + division(num1, num2);
}

function suma(num1, num2) {
    return num1 + num2;
}

function resta(num1, num2) {
    return num1 - num2;
}

function multiplicacion(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    if (num2 === 0) {
        return "No se puede dividir por 0";
    }
    return num1 / num2;
}
