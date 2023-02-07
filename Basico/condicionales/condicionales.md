# Guía condicionales

Los condicionales en JavaScript son sentencias que permiten tomar decisiones en el código según el resultado de una evaluación lógica. Los tres tipos principales de condicionales en JavaScript son "if", "if-else" y "switch".

El condicional "if" se utiliza para ejecutar un bloque de código solo si una determinada condición es verdadera.

### Ejemplo:

```
 if (x > 0) {
  console.log("x es mayor que 0");
} 
```

El condicional "if-else" se utiliza para ejecutar un bloque de código si una determinada condición es verdadera, y otro bloque de código si la condición es falsa.

### Ejemplo:

```
if (x > 0) {
  console.log("x es mayor que 0");
} else {
  console.log("x no es mayor que 0");
}
```

El condicional "switch" se utiliza para seleccionar uno de varios bloques de código para ejecutar, según el valor de una variable.

### Ejemplo:

```
switch (x) {
  case 1:
    console.log("x es 1");
    break;
  case 2:
    console.log("x es 2");
    break;
  default:
    console.log("x es otro valor");
}
```

En resumen, los condicionales son una herramienta esencial en cualquier lenguaje de programación para tomar decisiones y controlar el flujo de ejecución del código.
