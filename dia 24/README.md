# JavaScrip 2 (contiuacioón)


## Más tipos de datos
- undefined: valor que se asinga una variable, ero que no tiene valor. 
- Null: es una valor que se asigna a una variable que no tiene valor.
- NaN: (Not a Number): valor que se asigna cuando se esperaba un número, pero no se recibió un número. 
`let edad = Number ("hola como andan?"); // NaN`
- Empty: String tiene un valor de '' o ""
- Función
- Fecha 

```js
let noDedinido = undefined;
let nulo=null;
let noEsUnNumero=NaN;
let vacio= "";
const moverLaCola = function () {}
const hoy= new Date();
```


Para ver que tipo de dato es una variable podemos usar el operador `tipeof`:

```js
console.log(typeof noDefinido): // undefinded
console.log(typeof vacio): // String
console.log(typeof hoy): // objeto
console.log(typeof moverLaCola): // function
```



## Consola

```js
// Mensaje informativo 
console.log("Este es un mensaje informativo");
// Mensaje de error 
console.error("Este es un mensaje de error");
// Mensaje de información 
console.warn("Este es un mensaje de advertencia");
// Mensaje de depuración 
console.debug("Este es un mensaje de depuración");
// Mensaje de datos 
console.table(["Manzana, Bananna, Cereza"]);
```


# Operadores aritméticos

Se utiliza para operaciones matemáticas en JS. 

- Suma (+): suma 2 valoes. 
- Restar(-): resta 2 valores
- Multiplicación(*): multiplica 2 valores
- División (/): Divide 2 valores. 
- Módulo  (%): Devuelve el resto de la división de enteros de 2 valores. 
- Incremento (++): Aumentar en uno el valor de la variable. 
- Decremento (--): Decremento en uno el valor de la variable. 

```js
let a= 10;
let b= 5;


let suma = a+b; //15
let resta= a-b; // 5 
let division= a/b; //2
let modulo = a%b; //0
let incremento = a++b; //11
let decremento = a--b; //4

let resultado = a+miSuma: // 26 (porque use a++ arriba)
b++; //4+1
b++; // 5+1
b++; //6+1

console.log(b); // 7



```