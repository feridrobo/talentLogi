document.getElementById("formDescuento").addEventListener("submit", function(e){
    e.preventDefault();
    agregarValores();
});

function agregarValores() {
    let producto = parseFloat(document.getElementById("producto").value);
    calcularValor(producto);
}



function calcularValor(producto){
    let valor = producto - (producto * 0.15)
    document.getElementById("valor").innerHTML = valor;
}