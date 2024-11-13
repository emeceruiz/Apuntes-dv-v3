



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






# Grid Templetes Areas

Podemos nombrar celdas utilizando `grid-templete-areas`


```css
.container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4,100px);
    grid-gap:10px;


    grid-template-areas:
            "sector1 sector1 sector2"
            "sector3 sector3 sector2"
            "sector4 sector5 sector5"
            "sector4 sector5 sector5"


}


.header{
    grid-area:sector1;
}

.caja-2 {
    grid-area:sector2;
}

.caja-3 {
    grid-area:sector3;
}

.caja-4 {
    grid-area:sector4;
}

.caja-5 {
    grid-area:sector5;
}