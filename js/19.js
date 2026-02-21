let total = 0;

function agregarCarrito(precio) {
    return total += precio;

}

function calcularImpuesto(total){
    return total * 1.19;
}

total = agregarCarrito(precio = 100)
console.log(total);
total = agregarCarrito(precio = 200)
console.log(total);
const totalPagar = calcularImpuesto(total)

console.log("EL valor total a pagar es >>>> " + totalPagar)