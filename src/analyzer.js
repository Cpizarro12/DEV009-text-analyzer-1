const analyzer = {  
  getWordCount: (userInput) => {
    return userInput.split(' ').length;
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  
  },
  getCharacterCount: (userInput) => {
    return userInput.length
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (userInput) => {
    const textWithouthSpaces = userInput.replace(/[^\w]+/g,'');
    return textWithouthSpaces.length;
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (userInput) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const wordLength = userInput.split(' ') //Se divide userInput en un array
    let sum = 0 //se inicializa la variable en 0 para almacenar la suma de las longitudes
    let totalWords = 0 //Se inicializa la variable en 0 para almacenar el numero total de palabras
    for (let i=0; i< wordLength.length; i++){ //Se usa el ciclo for para recorrer todas las palabras en wordLength. En cada iteración se agrega la longitud de la palabra actual al valor sum y se aumenta el contador de totalWords
      sum += wordLength[i].length;
      totalWords++}
    let prom = sum / totalWords //se calcula el promedio de la longitud de palabras dividiendo la suma de las longitudes en el numero de palabras
    prom = prom.toFixed(2) //Se utiliza tofixed para determinar que se muestren solo 2 decimales.

    return Number(prom) //se ocupa Number para que lo mostrado sea un numero
  },
  getNumberCount: (userInput) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const numRegEx = /\b\d+(\.\d+)?\b/g; //Se crea la expresión regular valida solo para numeros
    const matches = userInput.match(numRegEx); //se utiliza match para buscar todas las ocurrencias de la expresión regular.
    if(matches === null){  //si la variable es null retorna 0, en caso contrario sretorna la longitud.
      return 0; 
    }
    else{
      return Number(matches.length);
    }
  },
  getNumberSum: (userInput) => {
    const nums = userInput.match(/\b\d+(\.\d+)?\b/g)
    if (nums === null) {
     
      return 0
    } 
    let sum=0
    for (let i = 0 ; i < nums.length; i ++){
      sum += parseFloat(nums[i])  
    }
  
    
    return sum 
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.

  }}
;

export default analyzer;
