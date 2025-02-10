// Primer ejercicio 
function calcularPrecioFinal() {
    let precioOriginal = parseFloat(prompt("Ingresa el precio original del producto:"));
  
        if (isNaN(precioOriginal)) {
        console.log("Error: El precio original debe ser un número.");
        return; 
        }
  
    
    let descuento = parseFloat(prompt("Ingresa el porcentaje de descuento:"));
  
        
        if (isNaN(descuento)) {
        console.log("Error: El descuento debe ser un número.");
        return; 
        }
  
    
    let precioFinal = precioOriginal - (precioOriginal * descuento / 100);
  
    
        if (descuento >= 50) {
        console.log("¡Oferta especial!");
        }
  
    console.log("Precio final: " + precioFinal);
  }
  
  calcularPrecioFinal();


 // Segundo ejercicio
 function determinarTipoNumero() {
    let numero = parseFloat(prompt("Ingresa un número:"));
  
    if (isNaN(numero)) {
      console.log("Error: Por favor, ingresa un número válido.");
      return; 
    }
  
    if (numero > 0) {
      console.log("El número es positivo.");
    } else if (numero < 0) {
      console.log("El número es negativo.");
    } else {
      console.log("El número es cero.");
    }
  }
  
  determinarTipoNumero();

//Tercer ejercicio
function calcularResultadoEstudiante() {
    
    let nota1 = parseFloat(prompt("Ingresa la nota 1 (0-100):"));
    let nota2 = parseFloat(prompt("Ingresa la nota 2 (0-100):"));
    let nota3 = parseFloat(prompt("Ingresa la nota 3 (0-100):"));
    let nota4 = parseFloat(prompt("Ingresa la nota 4 (0-100):"));
  
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4) ||
        nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 ||
        nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100) {
      console.log("Error: Ingresa notas válidas entre 0 y 100.");
      return; 
    }
  
    let promedio = (nota1 + nota2 + nota3 + nota4) / 4;
  
    let mensaje = "Promedio: " + promedio.toFixed(2) + ". "; 
  
    if (promedio >= 70) {
      mensaje += "¡Aprobado!";
    } else if (promedio >= 50) {
      mensaje += "Puedes mejorar.";
    } else {
      mensaje += "Reprobado.";
    }
  
    console.log(mensaje);
  }
  
  calcularResultadoEstudiante();