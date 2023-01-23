document.getElementById("formAreaTrapecio").addEventListener("submit", function(e){
    e.preventDefault();
    agregarValores();
});

function agregarValores() {
    let baseMayor = parseFloat(document.getElementById("baseMayor").value);
    let baseMenor = parseFloat(document.getElementById("baseMenor").value);
    let altura = parseFloat(document.getElementById("altura").value);
    areaTrapecio(baseMayor, baseMenor, altura);

}



function  areaTrapecio(baseMayor, baseMenor, altura) {
        let area = (baseMayor + baseMenor) * altura / 2;
        document.getElementById("area").innerHTML = 'La area del trapecio es: ' + area;
      }
      
      
  