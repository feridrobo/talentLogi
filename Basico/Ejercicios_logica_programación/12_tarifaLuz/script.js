document.getElementById("formTarifa").addEventListener("submit", function(e){
    e.preventDefault();
    agregarValores();
});

//eventos
document.getElementById("gasto").addEventListener('keyup', agregarValores);
document.getElementById("uso").addEventListener('change', agregarValores);

function agregarValores() {
    let uso = document.getElementById("uso").value;
    let gasto = parseFloat(document.getElementById("gasto").value);
    calcularTarifa(uso,gasto);
}


function calcularTarifa(uso, gasto) {
    if(!gasto) return;
    let precioKwh = 0;
    if (uso == 'casa') {
        precioKwh = 655.870;
    } else if (uso == 'negocio') {
        precioKwh = 640.670;
    }
    let totalPesos = gasto * precioKwh;
    let totalDolares = totalPesos / 4648.58;
    document.getElementById("tarifa").innerHTML = `El valor en pesos colombianos es de ${totalPesos.toFixed(2)} y en dolares es de ${totalDolares.toFixed(2)}`;
}
