# Javascript

Es un lenguaje de programacion de alto nivel, intrepretado y orientado a objetos. Se utiliza para crear contenido dinamico e interactivo en sitios web. 

Lenguaje de alto nivel:
- esta diseñado para ser facil de leer y escribir para humanos. 

Interprestado:

- Se ejecuta linea por linea y en tiempo real. No necesita ser compilado,


```js 
let numero= 1;
console.log("Mi número vale: " numero);
// imprime "Mi numero vale:1"

numero = numero + 2;
console.log("Mi número ahora vale:", numero)
//imprime "mi numero ahora vale:3";

```

Orientda a objetos:

JS utiliza un paradigma (OOP), llo que signifa que organiza el codigo en "obejetos". Un objeto es una coleccion de propiedades y metodos que se pueden leer y manipular. 

Perro

// Propiedades

- Color: blanco y negro
- nombre: Lassie
- size: grande
- cantidadDePatas:4


//MÉTODOS

- Ladrar():Hacer un ruido fuerte
- Comer () ingerir alimentos 
- moverLaCola(): demostrar felicidad moviendo la cola.-

```js
// ejemplo de un obejto con propiedades y métodos. 
let alumno = {
    nombre:"Juan";
    edad:16;
    saludar: funtion () {
        console.log("hola, mi mombre es Juan");
    }
}


//   Quiero imprimir los datos mi alumno. 
console.log(alumno.nombre); // Juan
console.log("me llamo",    alumno.nombre," y tengo" , alumno.edad, "años")

// Me llamo Juan y tengo 16 años 

// Para que el alumno me salude uso:
alumno.saludar();

```


## Donde probar / codificar JS

- En el navegador: en la pestaña de consola, escribimos directamente.
- En etiquetas de html "<script></script>", en un principio se recomienda poner las etiquetas al final del body. 
- Se puede usar en archivos externos con extension ".js" y linkeado a nuestro HTML. '<script src"./js/mi-archivo.js"></script>'

-En sitios 


## Funcionalidades 

1. Manipulación del DOM (Document Object Model): Agregar, modificar o eliminar elementos HTML Y CSS.
2. Procesar formularios: Verificar datos ingresados por el usuario, y realizar formularios complejos de múltiples secciones 
3. Manejo de animaciones: Manipular efectos visual y animaciones en nuestra web. 
4. Manejo de Eventos: Responder a las acciones del usuario. Ej: click, desplazarse por la web. 
5. Comuncación asíncrona con servidores mediante Ajax/Fetch: enviar y recibir datos de un servidor sin terner que recargar la pagina.

## Variables


> Son como CAJAS/CUBOS/VALDES/CUBETA que utilizamos para guardar información. Esta info puede ser un número, un texto, unalista de cosas, y muchos otros tipos más. 

Nos permite almacenar datos y luego usarlos o omdificarlos en diferentes partes de nuestro programa. 

> Definir una variable: Asignarle un nombre para encontrarla mas adelante.
Asignar un valor: Es poner cosas dentro de la caja, se realiza con el símbolo"-"

En JS las variables se declaran con la palabra `left`o `const`. Antes se utilizaba la palabra `var`como valor. 




## Comentarios en JS 


- simple `//`
- Simple en la misma linea `nombre="Sofia" // soy comentario``
- Bloque:`





## Tipos de Datos

- Números: enteros, decimales, positivos, negativos.(los decimales son con "." ej:3.5 )
- Cadena de Texto (Strings); textos, palabras, frases, 1 letra. Entre comillas simples '' comillas dobles "", o backticks ``. 
- Booleanos:  Verdader / Falso (truex,false)
- Lista de cosas(Arrays): Se escriben entre corchetes [] y se separan con comas ",".
- Obejto (Object): Colección de propiedades (caracteristicas) y métodos (funcionalidades), y se escriben con { }


```js

//PRIMITIVOS
let texto = "hola alumnos de CEI";
let textoConComillas= 'Hola estoy"bien"';
let textoConComillasSimples = "I´m Tomi";
// template String
let texto =  `Puedo usar comillas 'simples' y "Dobles"`;

let numeros=123;
let numeros2= "123";
numeros2 = Number(numeros2); // conveirte strings a numeros


let entero= 25;
let decimal = 22.30;
const PI= 3.14159;
let nume1234= Number("1234"); //1234

let estaPrendido = false;
let isPrimary = true:
let onActive = false;
let esMenorDeEdad = true;

// REFERENCIALES

// objetos o arrays (son constantes)

//Listas / arrays / arreglos

const alumnosDeDW = ["daniel","jaime", "laura,""liz"]; 
const edades = [25, 32,30, 29];
const listaMix = [1, "Juan", true, {edad:18, nombre:"laura"}];

const listaCompras = ["tomate", "lechuga"];
listaCompras = ["tomate", "Legucha", "papa"];

console.log (listas) 
```



