



Se pueden invertir el start y el end:



```css

.item-1  {
    grid-column-start:  1;
    grid-column-end: span 2; se amplia 1 mas (total 2)
    grid-row-start:1;
    grid-row-end: span 3;  se amplia 2 bloques más (total:3)
}
```


En vez de seleccionar inicio y fin de fila/col, podemos usar `span`para indicar cunato se expande nuestro item.
