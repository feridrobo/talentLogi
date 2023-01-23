document.getElementById("formSalario").addEventListener("submit", function(e){
    e.preventDefault();
    agregarValores();
});

function agregarValores() {
    let costo = parseFloat(document.getElementById("costo").value);
    let horas = parseFloat(document.getElementById("horas").value);
    calcularSalario(costo,horas);
}



function calcularSalario(costo,horas){
    let salario = costo*horas
    document.getElementById("salario").innerHTML = '$ ' +  salario;
}