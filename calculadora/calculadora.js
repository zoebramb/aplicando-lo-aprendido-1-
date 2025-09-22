const prompt = require("prompt-sync")();

function main() 
{

const num1 = parseFloat(prompt("Ingrese el primer número: "));
const num2 = parseFloat(prompt("Ingrese el segundo número: "));

const operacion = prompt("Ingrese la operación (+, -, *, /): ");
let resultado;

switch (operacion) 
{
  case "+":
    resultado = num1 + num2;
    break;
  case "-":
    resultado = num1 - num2;
    break;
  case "*":
    resultado = num1 * num2;
    break;
  case "/":
    if (num2 !== 0) 
    {
      resultado = num1 / num2;
    } 
    else {
      console.log("Error: División por cero no es permitida.");
      return;
    }
    break;
  default:
    console.log("Operación no válida.");
    return;    
}

console.log("El resultado es : " + resultado);

}
main();