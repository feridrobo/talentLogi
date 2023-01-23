document.getElementById("formLongCirc").addEventListener("submit", function(e){
    e.preventDefault();
    agregarValores();
});

function agregarValores() {
    let radio = parseFloat(document.getElementById("radio").value);
    calcularLongitud(radio);
}


function calcularLongitud(radio) {
    const pi = Math.PI;
    let longitud = 2 * pi * radio;
    document.getElementById("longitud").innerHTML = 'La longitud de la circunferencia es: ' + longitud.toFixed(3);
}
