# Emmet

Ver emmet.html

# Variables en CSS


Se pueden crear variables para reutilizar valores.

- Mejorar la elgibilidad del código
- Facilitar la actualización de los valores. 

Se puede crear de manera global en la raíz del documento, que en el de webs es <html>


```css

:root {
    --blue: #1e90ff;
    --white: #fff;
    --danger:red;
    --primary: #aaaccb;
}

.container{
    background-color:var(--blue);
    color: var(--white);
}


.container.dark-mode{
    --primary: #bbbaac;
}

```