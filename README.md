# Analizador de texto

## Índice

* [1. Consideraciones generales del proyecto](#1-consideraciones-generales-del-proyecto)
* [2. Preámbulo](#2-preámbulo)
* [3. Funcionalidades](#3-funcionalidades)
* [4. Prototipo](#4-prototipo)
* [5. Tecnologías utilizadas](#4-tecnologías-utilizadas)
* [6. Pagina web](#5-pagina-web)
* [7. Autor](#5-autor)


***

## 1. Consideraciones generales

* Este proyecto está diseñado para contar la cantidad de palabras, numeros, la suma de estos y el promedio de palabras de un texto, el cual es ingresado por el usuario.
* Las metricas se van actualizando automaticamente a medida que el usuario escribe en la caja de texto.
* El diseño de la pagina está hecho para que sea agradable a la vista. 


## 2. Preámbulo 

![Lentes sobre un libro](/images/pexels-photo-3109168.jpeg)

_Credito: Foto de [Wallace Chuck](https://www.pexels.com/es-es/foto/lupa-gris-y-anteojos-en-la-parte-superior-del-libro-abierto-3109168/)_

Un analizador de texto puede servir para diversas cosas, en primer lugar para conocer la longitud de un texto, la cantidad de numeros presentes, las sumas de estos, etc. esto es útil para ciertos casos donde se necesita un numero determinado de palabras o de caracteres. 

En este caso este analizador de texto está diseñado para conocer 6 parametros distintos:
* Numero de Caracteres
* Numero de Caracteres sin espacio
* Numero de Palabras
* Cantidad de Números 
* Suma de la cantidad de números presentes
* Promedio de la longitud de Palabras

Cada uno de estos elementos entrega información valiosa que resulta útil a la hora de analizar un texto y la composición de este.



## 3. Funcionalidades

En este proyecto se presenta un analizador de texto con diferentes metricas para el posterior analisis de este.

Las funcionalidades de este proyecto son:


1.- La aplicación permite al usuario ingresar un texto de diversa longitud en un cuadro de texto

2.- La aplicación calcula las siguientes metricas en tiempo real:

 - **Recuento de caracteres**: La aplicación cuenta cada uno de los caracteres que el usuario va escribiendo, esto contando espacios, numeros, signos, etc.
  - **Recuento de caracteres sin espacio**: la aplicación cuenta el numero de caracteres sin espacio que se van registrando
  - **Recuento de Palanras**: la aplicación cuenta el numero de palabras escritas
  - **Recuento de Números: la aplicación cuenta la cantidad de números ingresador, haciendo la distinción sobre si estos están junto a una palabra, en cuyo caso no son considerador como numero por la aplicación
  - **Suma de Números**: la aplicación va sumando los valores númericos, obteniendo asi el total de estos
  - **Promedio de Palabras**: la aplicación va calculando a medida que el usuario escribe, el promedio de la longitud de las palabras.

3.- La aplicación cuenta con un botón que permite limpiar de manera sencilla la caja de texto al hacerle click.


## 4. Flujo de Trabajo
Para comenzar este proyecto se realizó un prototipo de baja fidelidad para definir algunos lineamientos a seguir durante la construcción de la aplicación.

![Prototipo-de-baja-fidelidad](/images/Prototipo%20Proyecto%20text-analyzer.png)

Inicialmente se comenzó con este prototipo, el cual contiene un título principal con el nombre de "Analizador de Texto".
Posteriormente la pagina se dividió en 2; por un lado a la izquierda el cuadro de texto con un tamaño considerable para que el texto sea más facil de visualizar, y por otro lado la lista de las metricas a analizar; caracteres, caracteres sin espacio, palabras , números , suma de números y longitud promedio en ese orden.

Posteriormente se encuentra un botón cuya finalidad será borrar el texto ingresado en el cuadro de texto.

Finalmente se encuentra un pie de pagina con el nombre de quien desarrolló la apliación.

A su vez se definió una paleta de colores basado en la comodidad del usuario, donde el color de fondo fuera agradable y no resultara molesto para la visual. Se coincideraron tambien los contrastes, ya que si el cuadro de texto fuese blanco molestaría mucho en comparación con el color de fondo.

La paleta de colores elegida fue la siguiente:

![paleta-de-colores](/images/Imagen%20de%20WhatsApp%202023-06-15%20a%20las%2010.09.05.jpg)

Posterior a esto se empezó a trabajar en el código del proyecto.

## 5. Tecnologías utilizadas

Para este proyecto se utilizaron 3 tecnologías diferentes:

* HTML: Se utilizó para la construcción del esqueleto de la pagina web, definiendo sus partes utilizando HTML semántico.

* CSS: Se utilizó para darle estilos que fuesen agradables a la vista y que no resultaran molestos a la hora de visualizar la pagina web, asi como la distribución de cada uno de los elementos de la pagina web.

* JavaScript: Se utilizó para darle funcionalidades a la aplicación y hacer que funcionara  cada una de las metricas definidas para el análisis del texto ingreado por el usuario.




## 6.- Pagina web

La pagina web terminada es la siguiente: 
![pagina-terminada](/images/Captura%20de%20pantalla%202023-06-15%20124403.png)

La pagina inicia con el título "Analizador de Texto", abajo se observan dos columnas, al lado izquierdo el cuadro de texto y al lado derecho la lista de metricas a medir.

Posteriormente en la pante inferior se encuentra el botón, el cual tiene la funcionalidad de borrar el texto ingresado de manera rapida y sencilla.

A continuación se muestra en funcionamiento de la pagina web:

![gif-pagina-web](/images/2023-06-15-13-19-39.gif)

## 6.- Autor

Este proyecto fue presentado e ideado por Laboratoria, donde se entregaron los lineamientos de esta aplicación y sus funcionalidades, además de entregar test para validar la correcta escritura del codigo.

Si bien el proyecto fue ideado por Laboratoria, la ejecución fue realizada por Constanza Pizarro, responsable de definir el estilo visual y encargada de escribir el codigo tanto HTML, CSS como JavaScript.