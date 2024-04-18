
// Agrega a la pantalla el valor del boton de la calculadora que toquemos
function agregar(valor){
  document.getElementById('operacion').value += valor

}

//Funcion borrar de pantalla

function borrar(){
  document.getElementById('operacion').value = ''
  document.getElementById('resultado').value = ''
}

// Funcion para calcular

function calcular(){
  const valorPantalla = document.getElementById('operacion').value
  const resultado = eval(valorPantalla)
  document.getElementById('resultado').value = resultado
}