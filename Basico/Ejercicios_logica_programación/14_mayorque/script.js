document.getElementById("formMayorQue").addEventListener("submit", function(e){
    e.preventDefault();
    agregarValores();
});

function agregarValores() {
    let num1 = document.getElementById("numero1").value;
    let num2 = parseFloat(document.getElementById("numero2").value);
    mayorQue(num1,num2);
}


function mayorQue(num1,num2) {
    if(num1 > num2){
        document.getElementById("respuesta").innerHTML =
         `El numero ${num1} es mayor que  el numero ${num2}`;
    }else if(num1 < num2){
        document.getElementById("respuesta").innerHTML =
         `El numero ${num2} es mayor que el numero ${num1}`;
    }else if(num1 == num2){
        document.getElementById("respuesta").innerHTML =
        `El numero ${num1} es es igual que el numero ${num2}`;
    }else{
        document.getElementById("respuesta").innerHTML =
        `Digite numeros validos`;
    }
  
}
