# Unidades de Medidas en CSS: px, %, em, rem

## Pixeles
Son unidades absolutas que representan un punto en la pantalla. Son ideales para tamaños que deben ser precisos y no cambiar en relación a otros elementos.
No se adaptan a diseños responsive.

# Porcentaje (%)
Es una unidad relativa al tamaño del elemento padre, Por ejemplo, si un elemento tiene 200%, y el hijo tiene 50%, entonces el elemento ocupara 100px. Son uútiles para crear diseños fluidos y responsive que se adapten a distintos tamaños de patanlla.

# EM


[ Wikipedia EM ](https://es.wikipedia.org/wiki/Wikipedia:Portada)

La unidad em es relativa al tamaño de la fuente del elemento padre. Por ejemplo si el padre tiene un font size: 10px, y un margin: 3em, el margen sera de 30px. Esta unidad es util para crear tamaños de texto y márgenes que escalen con el tamaño de la fuete. Esto mejora la accesibilidad y flexibilidad del diseño. 
Es ideal para escelar elementos proporcionalmente al texto. Por defecto, los navegaodres asignan el font-size a 16px;

```css
    .card{
        font-size: 16px; /* 16 */
        padding:1.5em;  /*24px */
    }
    .card__title  {
        font-size: 2em; /*32px */
        /* margin:2.5em;/* 40px */
    }

```

## REM (Root EM)

Es relativa al tamaño de fuente de nuestro elemento raíz (normalmente es el <html>)
Por defecto esta es de 16px.  Rem es útil para mantener una escala consisttente en ek documento, independiente de la estructura del DOM. 

```CSS

html {
    font-size: 16px;
}

.card {
    font-size: 2em; 
}


.card__title  {
    /* el REM ignora el font-size de .card */
    margin: 1em;
    
}

```

