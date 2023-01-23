document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();
    agregarValores();
});

//eventos
document.getElementById("genero").addEventListener('change', agregarValores);

function agregarValores() {
    let genero = document.getElementById("genero").value;
    let nombre =document.getElementById("nombre").value;
    let edad = parseFloat(document.getElementById("edad").value);
    mostrar(nombre,edad,genero);
}


function mostrar(nombre,edad,genero) {

        if (genero === "masculino" && edad >= 18) {
          document.getElementById('respuesta').innerHTML = nombre;
        } else {
            document.getElementById('respuesta').innerHTML ="La persona no cumple con los requisitos";
        }
      
}
