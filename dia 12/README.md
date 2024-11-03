# Web Semantica


Etiquetas con significado. 


- Ejemplos de etiquetas no semánticas: Div, Span
- Ejemplo de etiquetas semánticas: Form, Table, Article


## Header

Encabezado de una página, sección o artículo.

- Incluye elementos como logo, Texto introdcutorio, menus de navegación.
- Puede haber múltiples headers en una misma página. 
- No puede haber un header dentro de un footer o otro header. 


<header class="header">
    <nav></nav>
</header>

## Footer

Pie de página de un `sitio web` o una `sección`


- Puede haber múltipes footers en una misma página. 
- Puede incluir información como:
    - Información de contacto
    - Enlaces a RRSS (redes sociales)
    - Mapa del sitio
    - Formulario de contacto
    - Creditos



##  Nav

Un contenedor para un conjunto de enlaces de navegación principal.

- No todos los links "(<a></a>)" deben de estar dentro de Nav, ya que e-readers pueden omitir los navs al leer el contenido. 

## Main 

El contenedor para el contenido principal de la página. 

- Debe haber uno solo. 
- El mail no debe incluir contenido de otras secciones, por ejemplo logos, sidebar, navegación, etc.
- No puede ser hijo de etiquetas: aricle, aside, footer, header, nav. 

## Aside 

Define un contenido relacionado indirectamente con el contenido principal, por ej: un sidebar..


Elementos que suelen estar en un aside son:
- Publicidad
- Biografía del autor
- Enlaces relacionados
- Información de Perfil


## Section

Define una sección de una página, donde se agrupa los contenidos relacionados, normalmente incluye un título.

Ua web se compone de multiples secciones y cada una con su propio contenido y proposito. 

Ejemplos:
- Cápitulo
- IntroduccióN
- Noticias
- Informaciíon de Contacto.



## Article

Definir un contenido `independiente`. El mismo puede ser compartido en otro sitio sin requerir contexto. 

- Suele incluir un título
Ejemplos de uso:
    - un post de un blog
    - un articulo de una revista 
    - comentario de un usuario
    - tarjeta de un producto


    Tanto las secciones como los articulos, pueden estar uno dentro del otro. 



## Figure

Define elementos autocontenidos, como una imagen, un diagrama o gráfico, una tabla, una fotografía etc.. 
Dentro de ella se suele utilizar "figcaption" para describir este contenido. 

<figure>
    <img src="ruta-de-image.png" alt="Mi imagen">
    <figcaption>Fig1. - imagen de prueba</figcaption>
</figure>


## Mark

Define un texto resaltado, normalmente se muestra con un fondo amarillo. 
<mark>texto resaltado</mark>