document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();
    agregarValores();
});


function agregarValores() {
    let nombre = document.getElementById("nombre").value;
    let signo = document.getElementById("signo").value;
    funcion(nombre,signo);
}

function funcion(nombre, signo) {
    nombre = nombre.toLowerCase().replace(/[\s\.]/g, '');
    signo = signo.toLowerCase().replace(/[\s\.]/g, '');
    if (signo === "aries") {
      document.getElementById('respuesta').innerHTML = `${nombre} es Aries`;
    } else {
        document.getElementById('respuesta').innerHTML = `${nombre} no es signo Aries`;
    }}