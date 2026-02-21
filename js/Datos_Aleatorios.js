function generarUsuario() {
 const nombres = ['Ana', 'Carlos', 'María', 'Juan', 'Sofía'];
 const apellidos = ['García', 'López', 'Martínez', 'Rodríguez'];

 const nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
 const apellidoAleatorio = apellidos[Math.floor(Math.random() * apellidos.length)];
 const edadAleatoria = Math.floor(Math.random() * 50) + 18;

 return {
 nombre: nombreAleatorio,
 apellido: apellidoAleatorio,
 edad: edadAleatoria,
 email: `${nombreAleatorio.toLowerCase()}@email.com`
 };
}
const usuario = generarUsuario();
console.log(`Usuario: ${usuario.nombre} ${usuario.apellido}`);
console.log(`Edad: ${usuario.edad} años`);
console.log(`Email: ${usuario.email}`);