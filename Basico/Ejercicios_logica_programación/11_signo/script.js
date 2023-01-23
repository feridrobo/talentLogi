document.getElementById("formSalario").addEventListener("submit", function(e){
    e.preventDefault();
    agregarValores();
});

function agregarValores() {
    let numero = parseFloat(document.getElementById("numero").value);
    calcularSigno(numero);
}



function calcularSigno(numero){
    let  signo = 'NEGATIVO'
    if(numero >= 0){
        signo = 'POSITIVO';}
 
    document.getElementById("signo").innerHTML = signo;

}