


# Metodología  SUIT CSS

[SuitCSS oficial](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md)


SuitCss se utiliza en muchos frameworks como Angular, React, etc. Es una nomenclatura  basada en BEM, pero con algunas diferencias.

Sus partes son: "Componentes", "Elementos", "Modificadores", "Estados" y "Utilidades"


## Partes


- ComponentName (PascalCase)
- ComponentName-elementName (-camelCase)
- ComponentName--modifierName (--camelCase)
- ComponentName.isStateOfComponent (.isPascalCase, .hasPascalCase, .focusPascalCase, onPascalCase)
- u-utilityName (u-camelCase)


## Componentes (bloque) y elementos

```css
/* Componentes */
.Galeria{}

/* Elementos */
.Galeria-titulo{}
.Galeria-imagen{}
.Galeria-pieGaleria{}


/* Modificadores */
.Galeria--principal{}
.Galeria-imagen--extraGrande{}
```

## Estados

Los estados son modificadores son "TEMPORALES" de un elemento(activo, inactivo, cerrado, abierto), y son independientes de los componentes en que se utiliza.


```css
.isActive{}
.MiComponente.isActive{}
.MiGaleria.isActive{}


.Micomponente.onHover{}
.MiComponente.isLoading{}

```

```html


<div class="Micomponente isActive"></div>
<div class="Micomponente"></div>
<div class="Micomponente"></div>
<div class="Migaleria isActive"></div>
<div class="Migaleria"></div>
<div class="Migaleria"></div>
```

## Utilidades/ utilites

Es una clase que se puede aplicar a CUALQUIER ETIQUETA y que no tiene relación con el componente. Se escribe con una "u-" al frente.

```css
.u-textCenter{
    text-align:center;
    margin-left:auto;
    margin-right:auto;
}

.u-bgRed{
    background-color:red;
}

.u-textRigth{}
.u.textDanger{}
``` 

Incluso las utilidades o utilites poseen variantes responsive como "u-sm-textCenter",
"u-md-texCenter", "u-lg-textCenter", para aplicar en diferentes tamaños de pantalla (sm:small, md:medium, lg:large)