class Estudiante {
    constructor(nombre, edad, calificaciones) {
        this.nombre = nombre;
        this.edad = edad;
        this.calificaciones = calificaciones;
    }

  
    // Getter
    get media() {
        return this.mediaArray(this.calificaciones);
    }
    // Método
    mediaArray(calificaciones) {
        let valor = 0;
        calificaciones.forEach(element => {
             valor = valor + element;
        });
        valor = valor / calificaciones.length();
        return valor;
    }
        // Método
    aprobo(nota) {
        if(nota > 70){
            return "el estudiante "+nombre+" aprobo"
        }
    }
}



const  estudiante1 = new Estudiante("juan", 20, [2.0,3.3, 5.0]);
const  estudiante2 = new Estudiante("pedro", 18, [2.5,2.8, 4.5]);
const  estudiante3 = new Estudiante("camilo", 25, [2.0,4.3, 4.3]);
const  estudiante4 = new Estudiante("sandra", 33, [2.0,1.0, 4.2]);

let estudiantes = new Array(estudiante1,estudiante2,estudiante3,estudiante4);

for (let i = 0; i < estudiantes.length; i++) {
    let estudiante = estudiantes[i];
    let nota = estudiante.mediaArray(estudiante.calificaciones);
    let resultado = estudiante.aprobo(nota);
    if (resultado) {
      console.log(resultado);
    }
  }
