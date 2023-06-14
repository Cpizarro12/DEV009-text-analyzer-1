import analyzer from './analyzer.js';

const userInput = document.querySelector('textarea')
const textinner = document.querySelectorAll('li')

userInput.addEventListener('keyup', function(event){
  
  textinner[0].innerHTML ='Caracteres: '+analyzer.getCharacterCount(userInput.value);
  textinner[1].innerHTML ='Caracteres sin espacio: '+ analyzer.getCharacterCountExcludingSpaces(userInput.value);
  textinner[2].innerHTML ='Palabras: '+ analyzer.getWordCount(userInput.value);
  textinner[3].innerHTML ='Números: '+ analyzer.getNumberCount(userInput.value);
  textinner[4].innerHTML ='Suma Números: '+ analyzer.getNumberSum(userInput.value);
  textinner[5].innerHTML ='Promedio de Palabras: '+ analyzer.getAverageWordLength(userInput.value);
  console.log(event)
})



//Botón limpiar
const btnClear = document.getElementById('reset-button')

btnClear.addEventListener('click',() =>{
  document.querySelector("textarea").value =""
  textinner[0].innerHTML = "Caracteres: "
  textinner[1].innerHTML = "Caracteres sin espacio: "
  textinner[2].innerHTML = "Palabras: "
  textinner[3].innerHTML = "Promedio de Palabras: "
  textinner[4].innerHTML = "Números: "
  textinner[5].innerHTML = "Suma Números: "
  
  
    
    
})
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`