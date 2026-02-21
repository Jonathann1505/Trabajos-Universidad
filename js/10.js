const producto = {
    nombreProducto : "Monitor 28 Pulgadas",
    precio: 300,
    disponible: true

    
}

console.log(producto.precio)
console.log(producto["nombreProducto"])

producto.imagen ="imagen.jpg"
console.log(producto.imagen)

delete producto.disponible
console.log(producto)