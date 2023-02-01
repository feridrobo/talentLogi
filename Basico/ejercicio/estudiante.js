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

    mediaArray() {
        const valor = this.calificaciones.reduce(
            (accumulator, item) =>  accumulator + item
        );
        let media = valor / this.calificaciones.length;
        return media;
    }
        // Método
    aprobo() {
        if(this.media > 70){ return true;
        } else {
            return false;
        }
    }
}



const  estudiante1 = new Estudiante("juan", 20, [100.0,90.0, 80.0]);
const  estudiante2 = new Estudiante("pedro", 18, [2.5,2.8, 4.5]);
const  estudiante3 = new Estudiante("camilo", 25, [2.0,4.3, 4.3]);
const  estudiante4 = new Estudiante("sandra", 33, [2.0,1.0, 4.2]);

let estudiantes = new Array(estudiante1,estudiante2,estudiante3,estudiante4);

estudiantes.forEach(estudiante => {
    let resultado = estudiante.aprobo();
    
      console.log(resultado);

      if(resultado){
        console.log("Felicitaciones")
      }else{console.log("Sigue intentando")}
});


