# Guía ciclos

Los ciclos en JavaScript son estructuras de control de flujo que permiten ejecutar un bloque de código varias veces. Hay tres tipos principales de ciclos en JavaScript: for, while y do-while.

**for:** Este tipo de ciclo se utiliza para iterar un número específico de veces. Tiene tres partes: una declaración de inicialización, una expresión de condición y una expresión de actualización. 

Ejemplo:
```
for (var i = 0; i < 10; i++) {
  console.log(i);
}
```

**while:** Este ciclo se utiliza para ejecutar un bloque de código mientras se cumpla una determinada condición. 

Ejemplo:
```
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
```

**do-while:** Este ciclo es similar al while, pero se asegura de que el bloque de código se ejecute al menos una vez, independientemente de si se cumple la condición. 

Ejemplo:
```
var i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);
```

Cada uno de estos ciclos tiene sus propias utilidades y se utilizan en diferentes situaciones dependiendo de las necesidades del programa.
