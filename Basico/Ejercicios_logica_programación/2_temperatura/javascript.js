
//eventos
document.getElementById("valor").addEventListener('keyup', convertir);
document.getElementById("unidad1").addEventListener('change', convertir);
document.getElementById("unidad2").addEventListener('change', convertir);


function convertir() {
//variables
let unidad1 = document.getElementById("unidad1").value;
let unidad2 = document.getElementById("unidad2").value;
let valor = document.getElementById("valor").value;
let txtResultado = document.getElementById("resultado");

  if (valor== '') {
    return;
  }

let resultado = 0.0;

  valor = parseFloat(valor);

  switch (true) {
  
    case (unidad1 == '°C' && unidad2 == '°C')|| (unidad2 == 'C' && unidad1 == 'C'):
      //logica para convertir de °C a °C
      resultado = valor;
      break;
    case (unidad1 == '°C' && unidad2 == '°F'):
      //logica para convertir de °C a °F o viceversa   	
      resultado = (valor * 9 / 5) + 32;
      break;
    case (unidad1 == '°F' && unidad2 == '°C'):
      //logica para convertir de °F a °F
      resultado = (valor - 32) * 5 / 9;
      break;
    case (unidad1 == '°F' && unidad2 == '°F')|| (unidad2 == 'F' && unidad1 == 'F'):
      //logica para convertir de °F a °F
      resultado = valor;
      break;
    case (unidad1 == '°C' && unidad2 === 'K'):
      //logica para convertir de °C a K o viceversa
      resultado = valor + 273.15
      break;
    case (unidad1 == 'K' && unidad2 == '°C'):
      //logica para convertir de °F a °F
      resultado = valor - 273.15
      break;
    case (unidad1 == '°F' && unidad2 == 'K'):
      //logica para convertir de °F a K o viceversa
      resultado = (valor - 32) * 5 / 9 + 273.15
      break;
    case (unidad1 == 'K' && unidad2 == '°F'):
      //logica para convertir de K a K
      resultado = (valor - 273.15) * 9 / 5 + 32
      break;
    case (unidad1 == 'K' && unidad2 == 'K') || (unidad2 == 'K' && unidad1 == 'K'):
      //logica para convertir de K a K
      resultado = valor;
      break;
    default:
      //logica para manejar unidades no soportadas
      resultado = 0;
  }
  txtResultado.innerHTML = valor + ' de ' + unidad1 + ' a ' + unidad2+ ' es ' + resultado;
}
