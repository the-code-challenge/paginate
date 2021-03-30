# Code Challenge: Paginate

El objetivo del challenge es implementar una función que permita paginar un array de objetos.

La función recibirá como parámetros el array de objetos, el número de página y la cantidad de elementos a mostrar por página.

La función debe retornar un objeto con las siguientes propiedades

- totalItems: El total de elementos del array recibido como parámetro
- itemsOnPage: Un array con el subconjunto de objetos a mostrar para la página solicitada
- page: El numero de pagina a mostrar
- itemsPerPage: El numero de elementos a mostrar por pagina
- from: El número de posición que ocupa el primer item en itemsOnPage dentro del Array recibido  con todos los items
- to: El número de posición que ocupa el último item en itemsOnPage dentro del Array recibido con todos los items
- prev: Si existe una página anterior devolver verdadero, de lo contrario falso
- next: Si existe una página siguiente devolver verdadero, de lo contrario falso

## Entrada

##### Parámetro 1
- **items**: Array
- **page**: Number (Integer)
- **itemsPerPage**: Number (Integer)

## Salida

Un objeto con las siguientes propiedades:  

- totalItems: Number (Integer)
- itemsOnPage: Array
- page:  Number (Integer)
- itemsPerPage:  Number (Integer)
- from:  Number (Integer)
- to:  Number (Integer)
- prev: Boolean
- next: Boolean

## Ejemplos

### Ejemplo 1

#### INPUT
```
paginate(["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nive", "Teen"], 2, 5)
```
#### OUTPUT
```
{
        totalItems: 10,
        itemsOnPage: ["Six", "Seven", "Eight", "Nive", "Teen"],
        page: 2,
        itemsPerPage: 5,
        from: 6,
        to: 10,
        prev: true,
        next: false
    }
```
---

### Ejemplo 2

#### INPUT
```
paginate([1,2,3,4,5,6,7,8,9,10,11,12], 3, 5)
```
#### OUTPUT
```
{
        totalItems: 12,
        itemsOnPage: [11,12],
        page: 3,
        itemsPerPage: 5,
        from: 11,
        to: 12,
        prev: true,
        next: false
    }
```

### Ejemplo 3

#### INPUT
```
paginate([
    {id: 1, product: "Drone A200"}, 
    {id: 2, product: "Drone A500"},
    {id: 3, product: "Drone A900"}, 
    {id: 4, product: "Smartphone TZ10"},
    {id: 5, product: "Smartphone TZ12"}, 
    {id: 6, product: "Smartphone TZ14"},
], 1, 3)
```
#### OUTPUT
```
{
        totalItems: 6,
        itemsOnPage: [
         {id: 1, product: "Drone A200"}, 
         {id: 2, product: "Drone A500"},
         {id: 3, product: "Drone A900"}
        ],
        page: 1,
        itemsPerPage: 3,
        from: 1,
        to: 3,
        prev: false,
        next: true
    }
```

## Instrucciones
- Crear un nuevo repositorio utilizando este repositorio como template (Boton: use this template).
- Editar el código de la función definida en el archivo index.js con un algoritmo que permita obtener los resultados esperados en los test.
- Ejecutar los test validando que todos resulten exitosos

## Ejecutar Pruebas

Instalar dependencias (mocha)
```
npm install
```

Ejecutar test
```
npm run test
```
