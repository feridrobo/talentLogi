document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    agregarValores();
});

//eventos
let honda = document.getElementById("honda");
let yamaha = document.getElementById("yamaha");
let suzuki = document.getElementById("suzuki");
let otra = document.getElementById("otra");


function agregarValores() {
    let marca;
    if (document.getElementById("honda").checked) {
        marca = "honda";
    } else if (document.getElementById("yamaha").checked) {
        marca = "yamaha";
    } else if (document.getElementById("suzuki").checked) {
        marca = "suzuki";
    } else if (document.getElementById("otra").checked) {
        marca = "otra";
    }

    let valor = parseFloat(document.getElementById("costo").value);
    promociones(marca, valor);
}




function promociones(marca, valor) {
    let valorFinal;
    switch (marca) {
        case "honda":
            valorFinal = valor - (valor*0.05);
            break;
        case "yamaha":
            valorFinal = valor - (valor*0.08);
            break;
        case "suzuki":
            valorFinal = valor - (valor*0.1);
            break;
        case "otra":
            valorFinal = valor - (valor*0.02);
            break;
        default:
            document.getElementById("respuesta").innerHTML = "Los datos ingresados son erroneos";
            return;
    }

    document.getElementById("respuesta").innerHTML = "El valor final de la motocicleta es: $ "+valorFinal;
}