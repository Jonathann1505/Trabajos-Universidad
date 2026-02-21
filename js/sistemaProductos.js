const productos = {
 laptop: {
 nombre: 'Laptop Gaming',
 precio: 1500,
 stock: 5
 },
 mouse: {
 nombre: 'Mouse Inalámbrico',
 precio: 50,
 stock: 20
 }
};


function mostrarProducto(producto) {
 const {nombre, precio, stock} = producto;
 return `${nombre} - Precio: $${precio} - Stock: ${stock}`;
}
console.log(mostrarProducto(productos.laptop));
console.log(mostrarProducto(productos.mouse));