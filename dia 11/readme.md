


# Media Queries!

## Que es?

Declaracion en CSS que nos permite definir los estilos de nuestra web. 

## Sintaxix de una MQ

Una media Query se compone de multiples partes:

-la primera parte: es @media es una palabra clave reservada.
-la segunda parte: es un tipo de media(screen, print, all, speech) y se llama [Media Type]. 
-la tercer Operadores (and, not, only)
-la cuarta Breakpoint una condicion(max-width, min-widht,etc)
-la quinta un bloque de CSS.

```css
/* // @media screen and (breakpoint) { }  */


body{
    background-color: lightgreen;
}

@media screen and (min-width: 60px){

    body {
        background-color:lightblue;
    }
}

```


```css
/* Combinacion de breakpoints */
@media screen and (min-width: 600px)and (max-width:800px) {

body{
    background-color:lightblue;
    }

}
    /* Orientacion del dispositivo (landapace vs portrait) */
@media screen and(orientation: landscape){
    body {
        background-color: lightblue;
    }
}


/* modo oscuro */
  
  @media screen and(prefers-color-schema: dark){
    body {
        background-color: black;
        color:white;
    }
}
```

## Media

- all:todos los dispositivos
- print:vista previa de impresion
- screen: pantallas a color (tablets, moviles, ordenadores)
- speech: dispositivos que convierten texto a voz


- otros elementos despreciados: tv, hanheld, braile.. etc ( no se utilizan mas en CSS3)

```css

.no-imprimir{
    display:block;
}

@media print{
    .no-imprimir {
        display:none;
    }
}
```


## Tips para utilizarlo


- Sobreescriben las reglas CSS normales, pero no possen mayor especificidad por lo tanto los MQ deben ir al final de nuestro CSS.
- Deben utilizar el mismo selector y propiedades para que reemplace la regla que deseamos.
- Pensar de antemano los breakpoints. 
- Podemos utilizar una @media para cada selector o una sola para todos los selectores (recomendada)



```css
/* moviles */
.box{}
.p{}


/* pantalla pequeña */
@media screen and (min-width: 600px){
    .box{}
    .p{}
}

/* pantalla mediana */
@media screen and (min-width: 1024px){
    .box{}
    .p{}

}

/* pantalla grande */
@media screen and (min-width: 2048px){
    .box{}
    .p{}

}
```

## Mobile vs Tablets Vs Desktop

Actualizados al 2024 (https://www.browserstack.com/guide/common-screen-resolutions)

- Mobile: 320px - 480px / 1440 x 3200px
- Tablets: 768px - 1024px / 2560 x 1600px
- Desktop: 1024px - 1920px / 5120 x 2880px


uso recomendado de Media queries en imagenes



```html
    <picture>
        <source media="(min-widht:1024)" srcset="./foto-desktop.png">
        <source media="(min-widht:650)" srcset="./foto-desktop.png">
        <img src= "./foto-mobile.png" alrt="Mi foto">   
    </picture>

```










