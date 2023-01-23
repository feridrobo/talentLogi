document.getElementById("formRaiz").addEventListener("submit", function(e){
    e.preventDefault();
    agregarValores();
});


function agregarValores() {
    let numero = document.getElementById("numero").value;
    raiz(numero);
}


function raiz(numero) {
    let resultado = Math.sqrt(numero);
    if(Number.isNaN(resultado)){
        document.getElementById('resultado').innerHTML = 'tiene raíz imaginaria';
    }else{
    document.getElementById('resultado').innerHTML = resultado;
}
    }

 