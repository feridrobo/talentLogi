# Guía funciones

En JavaScript, una función es un bloque de código reutilizable que realiza una tarea específica. Las funciones se utilizan para agrupar código que se ejecutará varias veces, lo que facilita la lectura y el mantenimiento del código. También se utilizan para dividir un programa en partes lógicas y organizadas.

La sintaxis básica de una función en JavaScript es:
```
function nombreDeLaFuncion(parametros) {
    // código a ejecutar
}
```
Donde "nombreDeLaFuncion" es el nombre de la función y "parametros" son los argumentos o valores que se pasan a la función. Los parámetros son opcionales y pueden no ser necesarios en algunas funciones.

Para llamar a una función, se utiliza su nombre seguido de paréntesis:

```
nombreDeLaFuncion();
```
Una función puede devolver un valor utilizando la palabra clave "return".
```
function sumar(a, b) {
    return a + b;
}
```
En este ejemplo, la función "sumar" toma dos argumentos (a y b) y devuelve la suma de estos dos valores.

##  Las partes de una función en JavaScript son:

- La palabra clave "function": indica que se está definiendo una función.

- El nombre de la función: es el identificador que se utiliza para llamar a la función.

- Los parámetros: son los argumentos que se pasan a la función. Los parámetros son opcionales y pueden no ser necesarios en algunas funciones.

- Los corchetes de apertura y cierre: indican el comienzo y el fin del cuerpo de la función.

- El cuerpo de la función: es el código que se ejecutará cuando se llame a la función.

- La palabra clave "return": es opcional, pero se utiliza para devolver un valor cuando se finaliza la ejecución de la función.

```
function nombreDeLaFuncion(parametros) {
    // código a ejecutar
    return valor;
}
```
En este ejemplo, "nombreDeLaFuncion" es el nombre de la función, "parametros" son los argumentos o valores que se pasan a la función, los corchetes indican el comienzo y el fin del cuerpo de la función, y "return valor" es el valor que se devuelve al finalizar la ejecución de la función.

## Funciones de flecha

Las funciones de flecha (también conocidas como "arrow functions") son una forma abreviada de escribir funciones en JavaScript. El sintaxis de las funciones de flecha es más concisa y fácil de leer que la sintaxis tradicional de las funciones.

La sintaxis básica de una función de flecha es:
```
const nombreDeLaFuncion = (parametros) => {
    // código a ejecutar
}
```
Donde "nombreDeLaFuncion" es el nombre de la función y "parametros" son los argumentos o valores que se pasan a la función. Los parámetros son opcionales y pueden no ser necesarios en algunas funciones. La flecha "=>" separa los parametros de la funcion de la logica que se va a ejecutar.
Si la función solo tiene una línea de código, se puede omitir la palabra clave "return" y los corchetes:
const nombreDeLaFuncion = (parametros) => valor;
En este ejemplo, la función "nombreDeLaFuncion" toma los parametros y devuelve el valor.
Otra ventaja de las funciones de flecha es que mantienen el contexto del this de su entorno, mientras que las funciones tradicionales cambian el contexto de this en diferentes circunstancias.
