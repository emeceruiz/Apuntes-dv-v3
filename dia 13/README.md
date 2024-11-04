



## Nombres de variables (y selectores)


- UPPERCASE, Lowecase, Title Case
- Camel case:`miClase`
- Pascal case:`MiClase`
- Kebab case:`mi-clase` (archivos)
- Snake case:`mi_clase`

# Especificidad 

La especificidad en la forma en los que los navegadores deciden que regla de CSS se aplica a un elemento. 
Mientras más específica, mas peso tendrá, pero también será más difícil de sobreescribir. 

Vamos a tener valores que se calculan sumando puntos de 3 columnas:

- La primer columna representa los ID
- La segunda columna clases y sus atributos [...], y pseudo clases (:hover :root :required :nth-child(odd), :nth-of-type (3n) )
- La tercera columna es para etiquetas(p, input, strong, main) y pseudo-elementos(::before, ::after)

X   X   X   

```css


.caja {
    background:red;

}


.box {
    background:green;

}

#soyCaja {
    background:green;

}

```

```html
<div id="soyCaja">

</div>

```



## Ejemplos

<!-- /* Ejemplo 1 */ -->

#myElement { color: yellow; }
#myElement .myBox { color: green;}




<!-- /* Ejemplo 2 */ -->
#myElement { color: green; }
.bodyClass .sectionClass .parentClass[id="myElement"] { color: yellow; }

<!-- /* Ejemplo 3 */ -->
:root input { color: green; }
html body main input { color: yellow; }

<!-- /* Ejemplo 4 */ -->
input.myClass { color: yellow; }
:root input { color: green; }
input[type="checkbox"] { color: orange; }



# Nomenclatura BEM ( Block- Elments-Modifier)


- Sus nombres son en keban-case (minuscula)
- Bloques: "buttom", ".form" ".navegacion"
- Elementos: Son hijos de bloques. ej: ".form__checkbox" ".form__buttom" ".form__tittle"
- Modificaciones: Clases que modifican tanto `elementos`
como `bloques` 
Ej: "`.form__buttom--disabled`"

.[bloque]__[elemento]--[modificador] {
    // reglas de css
}

```css
/* en ves de tener algo como: */
.header .nav .nav-item .nav-link {}
/* pasamos a tener algo como  */
.header__nav-link {
    
}

.header {}
.header__nav {}
.header__nav-item {}

```

```html




```
