document.getElementById("formSalario").addEventListener("submit", function(e){
    e.preventDefault();
    agregarValores();
});

function agregarValores() {
    let salarioAnterior = parseFloat(document.getElementById("salarioAnterior").value);
    calcularNuevoSalario(salarioAnterior);
}



function calcularNuevoSalario(salarioAnterior){
    let salarioNuevo =  salarioAnterior + (salarioAnterior * 0.25)
    document.getElementById("salarioNuevo").innerHTML = '$ ' +  salarioNuevo;
}