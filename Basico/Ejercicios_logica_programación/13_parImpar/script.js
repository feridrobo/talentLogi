document.getElementById("formParImpar").addEventListener("submit", function(e){
    e.preventDefault();
    agregarValores();
});

function agregarValores() {
    let numero = document.getElementById("numero").value;
    parImpar(numero);
}


function parImpar(numero) {
 let estado = 'IMPAR'
 if(numero % 2 == 0){
    estado = 'PAR';
 }
 document.getElementById('estado').innerHTML = estado;
}
