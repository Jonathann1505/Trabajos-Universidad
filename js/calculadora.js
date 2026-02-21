function calculadora(num1, num2, operacion) {
 if (operacion === 'suma') {
 return num1 + num2;
 } else if (operacion === 'resta') {
 return num1 - num2;
 } else if (operacion === 'multiplicacion') {
 return num1 * num2;
 } else if (operacion === 'division') {
 return num1 / num2;
 }
}

console.log(calculadora(10, 5, 'suma')); // 15
console.log(calculadora(10, 5, 'division')); // 2
