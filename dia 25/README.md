## Scope (alcance) de variables

En JS las variables tienen 3 diferentes alcances. 

## Global

Son accesibles desde cualquier parte del código.

```js
let nombre= "juan";

function saludar (){
    console.log("Hola"+ nombre);

}
console.log(nombre); // juan
saludar(); // hola Juan
```


## Local

Son variables definidas dentro de funciones. 

```js
function saludar (){
    let nombre="juan";//variable local
    console.log("Hola"+nombre); //ok
}
console.log(nombre); // ERROR: "nombre" no esta definida 

saludar(); // imprime: "hola  juan"
```


## Bloque
Las Variables con `let`o `const`dentro de un bloque(`{}`) solo son accesible dentro de eso bloque. Algunos ejemplos de bloque son `ìf` o `for`.

```js
if (true) {
    let nombre="Juan";
    console.log("Hola "+nombre);
    
}

console.log("Hola "+nombre); // Error :"nombre" is not defined

```

## Hoisting

En js cuando definimos una variable con `var` estas se mueven al inicio del script. 

Al usar `let`o `const` estas variables no se elevaran al inicio del cript (para evitar errores). 


## Operadores de comparación

Se utilizan para comparar 2 valores. 

```js
let numero=11;
let esPar = (numero%2 == 0 ); // false
let esPar = (numero%2 == 1 ); // true
```

- Igual(==): Compara a ver si 2 valores son iguales
- Estrictamente igual(===): Si los 2 valores son iguales y del mismo tipo.
- Distinto(!=): Compara si 2 valores son distintos. 
- Mayor que (>): Compara si un valor es mayor que otro. 
- Menor que(<): Compara si un valor es menor que otro. 
- Mayor o igual que (>=): ver si un valor es mayor o igual que otro. 
- Menor o igual que (<=): Ver si un valor es menor o igual que otro.


```js
let num1="5";
let num2=5;

const sonIguales = (num1 == num2); // true 
const sonIguales = (num1 == num2); // false

```

## Truthy/ falsy

las variavles en JS pueden tener un valor de "truthy" o "falsy"-
un valor "truthy" es aquel que se evalua como verdadero en un contexto booleano, mientras que el "falsy" se evalua como falso.

Poemos usar esta propiedad para l a toma de decisiones en nuestro código.

```js
if(valor){
    // se ejecuta si el valor es truthly

} else{
    // se ejecuta si el valor es falsy

}