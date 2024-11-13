# Transition CSS

## Que son 

Es una forma de cambiar los valores de una propiedad de manera suave y gradual. Se puede aplicar transiciones a cualquier propiedad que acpete valores umericos o de color. 
Por ejemplo: cambiar tamaño, color de fondo, opacidad, etc.


Propiedades numericas:
- width
- height
- font-size
- padding
- margin
- border-width
- opacity
- transform (props como:scale, rotate, translate, etc)


Propiedades de color:
- color
- background-color
- border- color
- box-shadow

## Como se define

Utilizamos la propiedad `transition` y se pueden personalizar de la siguiente manera:

- `transition-property`:nos indica la propiedad que se animara.
- `transition-duration`: duracion de la animación.
- `transition-timing-function`: la manera en que se llevará acabo la animación. 
- `transition-delay`: demora ates de que se inice la animación.


```css

div {
    transition-property: font-size;
    transition-duration: 4s;
    transition-delay: 2s;
    transition-timing-function: ease-in-out;

    /* unificar las 4 reglas en 1*/
    /* transition: <property> <duration><timing-funtion><delay>; */
    transition: font-size 4 ease-in-out 2s;
}
```


# Timinf Funtions

- `ease` : velocidad lenta - rapida -lenta - (por defecto)
- `linear`:constante
- `ease-in` : lento-rapido
- `ease-out`: rapida-lenta
- `ease-in-out` : lenta-rapida-lenta(mas brusca)
- `cubic-Bezier()` : timing personalizado. 


### Cubic-Bezier

Es una funación que me permite crear una curva de velocidad personalizada. 
https://cubic.bezier.com/
https://www.w3schools.com/cssref/func_cubic-bezier.php

```css


div{
    transition-timing-function: cubic-bezier(.17,.61,.76,.39);
}
````

