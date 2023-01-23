document.getElementById("formAreaTrapecio").addEventListener("submit", function(e){
    e.preventDefault();
    agregarValores();
});

function agregarValores() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);
    calcularMediaAritmetica(num1,num2,num3);
}



function calcularMediaAritmetica(num1, num2, num3){
    let media = (num1 + num2 + num3) / 3;
    document.getElementById("media").innerHTML = media;
}