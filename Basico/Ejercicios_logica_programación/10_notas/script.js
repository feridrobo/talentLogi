document.getElementById("formSalario").addEventListener("submit", function(e){
    e.preventDefault();
    agregarValores();
});

function agregarValores() {
    let nota = parseFloat(document.getElementById("nota").value);
    calcularMediaAritmetica(nota);
}



function calcularMediaAritmetica(nota){
    let  estado = 'REPROBADO'
    if(nota > 10.5){
    estado = 'APROBADO';}
 
    document.getElementById("estado").innerHTML = estado;

}