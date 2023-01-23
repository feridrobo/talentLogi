document.getElementById("formHipo").addEventListener("submit", function(e){
    e.preventDefault();
    agregarValores();
});

function agregarValores() {
    cateto1 = parseFloat(document.getElementById("num1").value);
    cateto2 = parseFloat(document.getElementById("num2").value);
    calcularHipotenusa(cateto1,cateto2);
}



function calcularHipotenusa(cateto1, cateto2) {
    let hipotenusa = Math.pow(cateto1, 2) + Math.pow(cateto2, 2);
    document.getElementById("hipotenusa").innerHTML = hipotenusa;
}