# Data Lovers

## Índice

* [Preámbulo](#preámbulo)
* [Descripción](#resumen-del-proyecto)
* [Consideraciones generales](#consideraciones-generales)
* [Objetivos de aprendizaje](#objetivos-de-aprendizaje)
* [Parte obligatoria](#parte-obligatoria)
* [Parte opcional](#parte-opcional-hacker-edition)
* [Consideraciones técnicas](#consideraciones-técnicas)
* [Primeros pasos](#primeros-pasos)
* [Contenido de referencia](#contenido-de-referencia)
* [Checklist](#checklist)

***

## Preámbulo

Según un [estudio de IBM](https://www-01.ibm.com/common/ssi/cgi-bin/ssialias?htmlfid=WRL12345USEN),
el 90% de la data que existe hoy ha sido creada durante los últimos dos años.
Cada día generamos 2.5 trillones de bytes de datos, una cifra sin precedentes.

No obstante, los datos por sí mismos son de poca utilidad. Para que esas
grandes cantidades de datos se conviertan en **información** fácil de leer para
los usuarios, necesitamos entender y procesar estos datos. Una manera simple de
hacerlo es creando _interfaces_ y _visualizaciones_.

En la siguiente imagen, podrás ver cómo con la data que que se ve en la parte
izquierda se puede construir una interfaz amigable y entendible por el usuario
al lado derecho.

![json-interfaz](https://lh4.googleusercontent.com/Tn-RPXS26pVvOTdUzRT1KVaJ-_QbFs9SpcGLxSPE43fgbHaXtFgMUInuDt7kV41DkT1j8Tt29V0LxQW7SMtC6digOIhfTXSBKdwI08wUwhD3RAqlwy0hjfmhZ2BFe91mtmCSEqysfgk)

\* Puedes ver el detalle de la data en este [link](https://gist.github.com/lalogf/dd4aa3017a9f8aa8f90dfbca382c4dc9#file-student-json)
y la interfaz construida en este [link](https://app.talento.laboratoria.la/profile/HFOoMpOreBU2psCcjjLg5O2EWEv2).

## Resumen del proyecto

En este proyecto **construirás una _página web_ para visualizar un
_conjunto (set) de datos_** que se adecúe a lo que descubras que tu usuario
necesita.

Como entregable final tendrás una página web que permita **visualizar la data,
filtrarla, ordenarla y hacer algún cálculo agregado**. Con cálculo agregado
nos referimos a distintos cálculos que puedes hacer con la data para mostrar
información aún más relevante para los usuarios (promedio, el valor máximo
o mel ínimo, etc).

Esta vez te proponemos una serie de datos de diferentes _temáticas_ para que
explores y decidas con qué temática te interesa trabajar. Hemos elegido
específicamente estos sets de datos porque creemos que se adecúan bien a esta
etapa de tu aprendizaje.

Una vez que definas tu área de interés, buscar entender quién es tu usuario
y qué necesita saber o ver exactamente; luego podrás construir la interfaz que
le ayude a interactuar y entender mejor esos datos.

Elegimos estos datos:

* [Pokémon](src/data/pokemon/pokemon.json):
  En este set encontrarás una lista con los 151 Pokémon de la región de Kanto,
  junto con sus respectivas estadísticas usadas en el juego [Pokémon GO](pokemongolive.com).

Cada set de datos tiene una identidad gráfica que deberás utilizar en la
interfaz. La identidad gráfica, también conocida como guía de estilos en
diseño, de cada set la podrás encontrar en el siguiente
[link](https://drive.google.com/open?id=1eeWFqrWpy-OYOH4EHDckFGunyrm9iNeE).



## Objetivos de aprendizaje

El objetivo principal de este proyecto es que aprendas a diseñar y construir una
interfaz web donde se pueda visualizar y manipular data, entendiendo lo que el
usuario necesita.

Dicho en palabras sencillas, aprenderás a:

* Aplicar y profundizar todo lo que aprendiste en el proyecto anterior.
* Pensar en las **necesidades de los usuarios** para crear historias de usuario.
* Escribir y trabajar con **historias de usuario**, sus definiciones de
  terminado (_definition of done_) y Criterios de Aceptación como herramienta
  central de la organización y planificación de tu trabajo.
* Definir qué data y de qué forma mostrarla en el producto, basándote en
  tu **entendimiento del usuario**.
* Crear productos que sigan los **principios básicos de diseño visual** y
  las **heurísticas de usabilidad**.
* Iterar el diseño del producto, basándote en los resultados de los
  **tests de usabilidad**.
* Manipular **_arreglos_ (_arrays_) y _objetos_ (_objects_)**.
* **Manipular el DOM** (agregar elementos dinámicamente basados en la data).
* **Manejar eventos del DOM** para permitir interacción con el usuario
  (filtrado, ordenado, ...).
* Entender los beneficios y complejidades de **trabajar en equipo** en un
  ambiente de incertidumbre.

## Parte Obligatoria

Los criterios para considerar que has completado este proyecto son:

### Definición del producto

Introducción
Pokémon GO es un videojuego de realidad aumentada basado en la localización desarrollado por Niantic, Inc. Para dispositivos iOS y Android. Es un videojuego gratuito pero contiene microtransacciones.3 El juego consiste en buscar y capturar personajes de la saga Pokémon escondidos en ubicaciones del mundo real y luchar con ellos, lo que implica desplazarse físicamente por las calles de la ciudad para progresar. La aplicación comporta un elemento de interacción social, ya que promueve reuniones físicas de los usuarios en distintas ubicaciones de sus poblaciones. Durante el año 2016 fue donde tuvo un auge y a la vez una caída
Rodríguez en el diario El País menciono que el juego ‘No fue capaz de fidelizar. Acabó aburriendo al usuario, literalmente. Llegó un momento en el que este agotó todo lo que se puede hacer en el juego’. El estudio realizado por este profesor de Ciencias de la Comunicación en la UJI se centró en la opinión de 332 jugadores. Los sujetos del estudio, de ambos sexos, contaban con una alta implicación en el mundo de Pokémon GO.
Uno de los datos más interesantes del estudio hace referencia al perfil de usuario. El juego de realidad aumentada consiguió llegar a un grupo muy heterogéneo de personas, “una característica que suele ser rara frente a los videojuegos convencionales, que tienen un target mucho más marcado”, destaca Rodríguez.
Sin embargo, y a pesar de ser un fenómeno que entusiasmó a las masas, fue la falta de interactividad lo que favoreció el declive del juego. Como señalan los investigadores de la UJI, los usuarios le pedían al juego cosas que nunca llegaron a recibir. “Intercambiar Pokémon con otros usuarios, competir… al final el juego se queda en el plano de lo individual, con pocas opciones de colaboración”.

Objetivos
Objetivo general
•	Determinar las necesidades para completar los pokemons de la región de manera más rápida.
Objetivos específicos:
•	Reconocer la lista completa de los pokeomon de la región de América Latina
•	Identificar todos los nombres de los Pokemon según número de pokedex
•	Diseñar un interacción donde el usuario pueda realizar el cálculo estadístico sobre el porcentaje que tiene de acuerdo a la dimensión tipo de pokemon.
User research
Desarrollo del producto
EL PROCESO DE DISEÑO
DESCUBRIMIENTO E INVESTIGACIÓN (RESEARCH)
Durante esta fase del proyecto, realizamos toda la investigación sobre el juego del pokemon GO, datos sobre la experiencia que si percibe en el juego, también encontramos que en esta región se pueden atrapar 151 pokemons, como dato importante sugerimos ir al callao y a el parque El Olivar debido a que hay mayor numero de apariciones.


### Historias de usuario
¿Cuántos años tienes?
Indícanos tu sexo
¿Por qué juegas PokemonGo?
¿Cuál es tu mayor dificultad?
Si tuvieras información disponible sobre los pokemons ¿Como prefieres que este organizado?
Como conclusión de las encuestas realizamos las siguientes historias de usuario

Historias de usuario

Yo como usuario deseo ver todos los pokemón en la web 

-	Prototipo de baja fidelidad.
-	Mostrar un pokemon en consola.
-	Mostrar un pokémon que se imprima en la web.
-	Mostrar todos los pokemon en la consola.
-	Mostrar todos los pokemon en la Web.

Yo como usuario deseo tener la opción de filtrar los pokemon por tipo

-	Realizar el prototipo de alta fidelidad.
-	Traer el valor de la propiedad tipo de un solo Pokemon
-	Mostrar un tipo de pokemon en la web.
-	obtener el valor del select 
-	Crear la función filter 
-	Visualizar el filtrado del pokémon en consola.
-	Pintar el pokemon en la Web.
-	identificar la propiedad tipo de pokemon
-	Mostrar los tipos de pokémon en la web
-	Obtener el valor del select con todos los tipos de pokemon.
-	Probar la funcionalidad de todos los tipos de Pokemon

Yo como usuario deseo ordenar los pokemon por N° de pokedex de forma ascendente.


-	Traer el valor de la propiedad de número de Pokedex de un solo pokemon.
-	Mostrar la opción de forma ascendente en la web
-	crear la función sort.
-	identificar la propiedad numero de pokedex 
-	Mostrar los pokémon de forma ascendente según la propiedad numero de Pokedex
-	Probar la funcionalidad de ordenar de forma ascendente  según numero de Pokedex 


Yo como usuario deseo ordenar los pokemon por N° de pokedex de forma descendente

-	Traer el valor de la propiedad de número de Pokedex de un solo pokemon.
-	Mostrar la opción de forma descendente en la web
-	crear la función sort.
-	identificar la propiedad número de pokedex de todos los pokemon
-	Mostrar los pokémon de forma descendente según la propiedad número de Pokedex
-	Probar la funcionalidad de ordenar de forma descendente  según número de Pokedex 



Yo como usuario deseo calcular el número de pokémon que me falta para completar la pokedex

-	Realizar un conteo de la propiedad de cada objetivo.
-	colocar un input en html
-	visualizar el input donde podrá colocar el valor 
-	Extraer el valor colocado por el usuario.
-	Hacer el cálculo con un función de resta
-	Mostrar en la web el resultado.



•	Necesidades de los usuarios: ubicar de forma rápida el número de Pokémon según la Pokedex
•	Objetivos de los usuarios: tener información que le permita atrapar mas pokemons en menos tiempo.
•	Sentimientos: Por lo general están insatisfechos con el hecho de que se les agota la batería constantemente, por eso quieren más información.
•	Obstáculos: no tener mucho tiempo para jugar el juego.

[entrevista a un jugador de pokemon go](https://www.youtube.com/watch?time_continue=2&v=ST67UlvcNxw)


Una vez que entiendas las necesidades de tus usuarios, escribe las [Historias
de Usuario](https://es.wikipedia.org/wiki/Historias_de_usuario) que representen
todo lo que el usuario necesita hacer/ver. Las **Historias de Usuario** deben
ser el resultado de tu proceso de investigación o _research_ de tus usuarios.


Asegúrate de incluir la definición de terminado (_definition of done_) y los
Criterios de Aceptación para cada una.

En la medida de lo posible, termina una historia de usuario antes de pasar
a la siguiente (Cumple con Definición de Terminado + Criterios de Aceptación).

Se realizó un formulario, en el cual apreciamos las necesidades del usuario, en este caso los jugadores de pokemonGO! al obtener la informacion estadisctica, empezamos con la elaboración del prototipo de baja fiabilidad y posterior a ello se realizo uno de alta fiabilidad.

dentro de la historias de usuario: identificamos que para mejorar su estrategia de juego les seria util obtener la informacion sobre el tipo de pokemones y el numero de caramelos que necesitan los pokemon para evolucionar de forma rápida y eficaz, porque la aplicacion del juego demando del uso de mucha bateria.

Roldolfo: Vive lejos de la universidad, es por ello que demora 2 horas en llegar por causa del tráfico, señala que siempre ha tenido agrado por la franquicia de Pokemón, descubrio el juego hace un par de años y desde entonces se ha vuelto un hobbie para él, sueña con completar la pokedex de la primera generación, pero el problema que presenta es el de la bateria.


María: Esa una jugadora no tan hábitual, porque la aplicacion ocupa mucho espacio, es por ello que suele desargar y borrar la aplicacion constantemente, lo cual impide que finalice el juego.



### Diseño de la Interfaz de Usuario

![WhatsApp Image 2019-03-21 at 9 45 20 AM (2)](https://user-images.githubusercontent.com/39390011/54761868-f5229880-4bc0-11e9-9ef1-16f219f6d832.jpeg)

![WhatsApp Image 2019-03-21 at 9 45 20 AM (2)](https://user-images.githubusercontent.com/39390011/54761868-f5229880-4bc0-11e9-9ef1-16f219f6d832.jpeg)
![WhatsApp Image 2019-03-21 at 9 45 20 AM (1)](https://user-images.githubusercontent.com/39390011/54761870-f5229880-4bc0-11e9-9c69-b82a7165aff3.jpeg)
![WhatsApp Image 2019-03-21 at 9 45 20 AM](https://user-images.githubusercontent.com/39390011/54761871-f5bb2f00-4bc0-11e9-996c-221a01bfe76f.jpeg)
![WhatsApp Image 2019-03-21 at 9 45 21 AM (1)](https://user-images.githubusercontent.com/39390011/54761872-f5bb2f00-4bc0-11e9-9860-45dccdd361cc.jpeg)
![WhatsApp Image 2019-03-21 at 9 45 21 AM](https://user-images.githubusercontent.com/39390011/54761873-f5bb2f00-4bc0-11e9-95a9-eb6dd3a9e3a8.jpeg)

#### Prototipo de baja fidelidad

![Tupokedex](https://user-images.githubusercontent.com/39390011/54762432-218ae480-4bc2-11e9-8876-c3a7941362f9.jpeg)


Durante tu trabajo deberás haber hecho e iterado sketches (boceto) de tu
solución usando papel y lápiz. Te recomendamos tomar fotos de todas las
iteraciones que hagas, las subas a tu repositorio, y las menciones en tu
`README.md`.

#### Prototipo de alta fidelidad

![image](https://user-images.githubusercontent.com/39390011/54762090-6e21f000-4bc1-11e9-9fab-291a911a18b3.png)
![image](https://user-images.githubusercontent.com/39390011/54762148-85f97400-4bc1-11e9-9e04-d87c5417b3d8.png)
![image](https://user-images.githubusercontent.com/39390011/54762160-8abe2800-4bc1-11e9-8462-984e9377048e.png)
![image](https://user-images.githubusercontent.com/39390011/54762173-94479000-4bc1-11e9-980f-2538fea5ed4c.png)

![version preliminar 2](https://user-images.githubusercontent.com/47748876/54940223-494ab700-4ef8-11e9-85a9-cfbecdc33e1c.png)


Lo siguiente es diseñar tu Interfaz de Usuario (UI por sus siglas en inglés -
_User Interface_). Para eso debes aprender a utilizar alguna herramienta de
diseño visual. Nosotros te recomendamos [Figma](https://www.figma.com/) que es
una herramienta que funciona en el navegador y, además, puedes crear una cuenta
gratis. Sin embargo, eres libre de utilizar otros editores gráficos como
Illustrator, Photoshop, PowerPoint, Keynote, etc. Recuerda utilizar la identidad
gráfica correspondiente a cada set de datos que elijas.

El diseño debe representar el _ideal_ de tu solución. Digamos que es lo que
desearías implementar si tuvieras tiempo ilimitado para hackear. Además, tu
diseño debe seguir los fundamentos de _visual design_. También, deberás exportar
tu diseño a [Zeplin](https://zeplin.io/) y utilizar las especificaciones de
estilo que te dé Zeplin al momento de implementar tus diseños en código.

#### Testeos de usabilidad

Durante el reto deberás realizar tests de usabilidad con distintos usuarios, y
en base a los resultados de esos tests, deberás iterar tus diseños. Cuéntanos
qué problemas de usabilidad detectaste a través de los tests y cómo los
mejoraste en tu propuesta final.



### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

Luego de diseñar tu interfaz de usuario deberás trabajar en su implementación.
Como mencionamos, **no** es necesario que construyas la interfaz exactamente
como la diseñaste. Tendrás un tiempo limitado para hackear, así es que deberás
priorizar.

Como mínimo, tu implementación debe:

1. Mostrar la data en una interfaz: puede ser un card, una tabla, una lista, etc.
2. Permitir al usuario filtrar y ordenar la data.
3. Calcular estadísticas de la colección (o subcolección) como media aritmética,
   máximo y/o mínimo de algún atributo numérico, o contar cuántas veces aparece
   un determinado valor, por ejemplo.
4. Ser _responsive_, es decir, debe visualizarse sin problemas desde distintos
tamaños de pantallas: móviles, tablets y desktops.

Es importante que tu interfaz, a pesar de ser una versión mínima de tu ideal,
siga los fundamentos de _visual design_.

### Pruebas unitarias

El _boilerplate_ de este proyecto no incluye Pruebas Unitarias (tests), así es
que  tendrás que escribir tu propias pruebas unitarias para las funciones
encargadas de _procesar_, _filtrar_ y _ordenar_ la data, así como _calcular_
estadísticas.

Tus Pruebas Unitarias deben dar una cobertura del 70% de _statements_ (_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_ (_ramas_)
del archivo `src/data.js` que contenga tus Funciones y está detallado en la
sección [Data](###data) de las [Especificaciones Técnicas](##especificaciones-técnicas).

## Parte Opcional (Hacker edition)

Features/características extra sugeridas:

* En lugar de consumir la data estática brindada en este repositorio, puedes
  consumir la data de forma dinámica, cargando un archivo JSON por medio de
  `fetch`. La carpeta `src/data` contiene una versión `.js` y una `.json` de
  de cada set datos.
* Agregarle a tu interfaz de usuario implementada visualizaciones gráficas. Para
  ello te recomendamos explorar librerías de gráficas como [Chart.js](https://www.chartjs.org/)
  o [Google Charts](https://developers.google.com/chart/).
* 100% Coverage

## Consideraciones técnicas

La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6), HTML y CSS. En este proyecto NO está permitido usar librerías o
frameworks, solo [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e),
con la excepción de librerías para hacer gráficas (charts); ver
[_Parte opcional_](#parte-opcional-hacker-edition) más arriba.

No se debe utilizar la _pseudo-variable_ `this`.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias:

```text
.
├── package.json
├── README.md
├── src
│   ├── data (según con qué data trabajes)
│   │   ├── injuries
│   │   │   ├── injuries.js
│   │   │   └── injuries.json
│   │   ├── lol
│   │   │   ├── lol.js
│   │   │   └── lol.json
│   │   ├── pokemon
│   │   │   ├── pokemon.js
│   │   │   └── pokemon.json
│   │   ├── steam
│   │   │   ├── steam.js
│   │   │   └── steam.json
│   │   └── worldbank
│   │       ├── worldbank.js
│   │       └── worldbank.json
│   ├── data.js
│   ├── index.html
│   ├── main.js
│   └── style.css
└── test
    └── data..js

8 directories, 17 files
```

### `src/index.html`

Como en el proyecto anterior, existe un archivo `index.html`. Como ya sabes,
acá va la página que se mostrará al usuario. También nos sirve para indicar
qué scripts se usarán y unir todo lo que hemos hecho.

En este archivo encontrarás una serie de _etiquetas_ (_tags_) `<script>`
_comentadas_. Para _cargar_ las diferentes fuentes de datos tendrás que
_descomentar_ estas _etiquetas_. Cada uno estos scripts asignará una variable
global con la data correspondiente a esa fuente de datos.

Por ejemplo, si "descomentamos" la siguiente línea:

```html
<!-- <script src="./data/worldbank/worldbank.js"></script> -->
```

La línea quedaría así:

```html
<script src="./data/worldbank/worldbank.js"></script>
```

Y ahora tendríamos la variable global `WORLDBANK` disponible en nuestros otros
scripts (como `src/data.js` o `src/main.js`).

### `src/main.js`

Recomendamos usar `src/main.js` para todo tu código que tenga que ver con
mostrar los datos en la pantalla. Con esto nos referimos básicamente a la
interacción con el DOM. Operaciones como creación de nodos, registro de
manejadores de eventos (_event listeners_ o _event handlers_), ....

Esta no es la única forma de dividir tu código, puedes usar más archivos y
carpetas, siempre y cuando la estructura sea clara para tus compañeras.

### `src/data.js`

El corazón de este proyecto es la manipulación de datos a través de arreglos
y objetos.

Te reomendamos que este archivo contenga toda la funcionalidad que corresponda
a obtener, procesar y manipular datos (tus funciones):

* `filterData(data, condition)`: esta función `filter` o filtrar recibiría la
  data, y nos retornaría aquellos datos que sí cumplan con la condición.

* `sortData(data, sortBy, sortOrder)`: esta función `sort` u ordenar
  recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `sortBy`, nos dice con respecto a cuál de los campos de
  la data se quiere ordenar.
  El tercer parámetro, `sortOrder`, indica si se quiere ordenar de manera
  ascendente o descendente.

* `computeStats(data)`: la función `compute` o calcular, nos permitirá hacer
  cálculos estadísticos básicos para ser mostrados de acuerdo a la data
  proporcionada.

Estos nombres de funciones y de parámetros son solamente referenciales, lo que
decidas depende de tu propia implementación.

Estas funciones deben ser [_puras_](https://medium.com/laboratoria-developers/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-2-funciones-puras-b99e08c2895d)
e independientes del DOM. Estas funciones serán después usadas desde el archivo
`src/main.js`, al cargar la página, y cada vez que el usuario interactúe (click,
filtrado, ordenado, ...).

### `src/data`

En esta carpeta están los datos de las diferentes fuentes. Encontrarás una
carpeta por cada fuente, y dentro de cada carpeta dos archivos: uno con la
extensión `.js` y otro `.json`. Ambos archivos contienen la misma data; la
diferencia es que el `.js` lo usaremos a través de una etiqueta `<script>`,
mientras que el `.json` está ahí para opcionalmente cargar la data de forma
asíncrona con [`fetch()`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
(ver sección de [_Parte Opcional_](#parte-opcional-hacker-edition)).

### `test/data.spec.js`

Tendrás también que completar las pruebas unitarias de las funciones
implementadas en el archivo `data.js`.

## Evaluación

Recuerda revisar la [rúbrica](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vRktPN4ilZtkRN5tUb3DVhgeihwlzk63_-JI3moA-bXpKDbHDioAK2H3qbrwWNb0Ql4wX22Tgv7-PDv/pubhtml)
para ver la descripción detallada de cada habilidad y cada nivel. Esta es una
lista de todas las habilidades involucradas en este proyecto y que evaluaremos
cuando lo completes:

### General

| Característica/Habilidad |
|--------------------------|
| Completitud |

### Habilidades Blandas

| Habilidad |
|-----------|
| Planificación, organización y manejo del tiempo |
| Autoaprendizaje |
| Presentaciones |
| Adaptabilidad |
| Solución de problemas |
| Trabajo en equipo |
| Responsabilidad |
| Dar y recibir feedback |
| Comunicación eficaz |

### Tech

| Habilidad |
|-----------|
| **Computer Science** |
| Lógica |
| Arquitectura |
| **Source Control Management** |
| Git |
| GitHub |
| **JavaScript** |
| Estilo |
| Nomenclatura/semántica |
| Funciones/modularidad |
| Estructuras de datos |
| Tests |
| **HTML** |
| Validación |
| Estilo |
| Semántica |
| **CSS** |
| DRY |
| Responsive |

### UX

| Habilidad |
|-----------|
| **Investigación (_Reseacrh_)** |
| User Centricity (_Diseño Centrado en el Usuario_)|
| Entrevistas |
| Pruebas (_tests_) de usabilidad|
| **Diseño Visual (_Visual Design_)** |
| Contraste |
| Alineación |
| Jerarquía |
| Tipografía |
| Color |

***

## Pistas sobre cómo empezar a trabajar en el proyecto

Antes de empezar a escribir código, debes definir qué deberá hacer el producto
en base al conocimiento que puedas obtener de tu usuario. Estas preguntas te
pueden ayudar:

* ¿Quiénes son los principales usuarios de producto?
* ¿Cuáles son los objetivos de estos usuarios en relación con el producto?
* ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?
* ¿Cuándo utilizan o utilizarían el producto?
* Toda tu investigación previa debe tener como resultado todas las Historias
de Usuario de tu proyecto.
* No hagas los prototipos de alta fidelidad de todas tus Historias. Comienza
solamente por los que se necesiten para tu Sprint 1 (semana 1 de trabajo). Más
pistas en la guía de organización para el proyecto.

Cuando ya estés lista para codear, te sugerimos empezar de esta manera:

1. Una de las integrantes del equipo debe realizar un :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) del repo de tu cohort,
   tus _coaches_ te compartirán un _link_ a un repo y te darán acceso de lectura
   en ese repo. La otra integrante del equipo deber hacer un fork **del
   repositorio de su compañera** y [configurar](https://gist.github.com/BCasal/026e4c7f5c71418485c1)
   un `remote` hacia el mismo.
2. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
3. 📦 Instala las dependencias del proyecto con el comando `npm install`. Esto
   asume que has instalado [Node.js](https://nodejs.org/) (que incluye [npm](https://docs.npmjs.com/)).
4. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
5. A codear se ha dicho! :rocket:

***

## Contenido de referencia

### Diseño de experiencia de usuario (User Experience Design)

* Investigación con usuarios / entrevistas
* Principios de diseño visual

### Desarrollo Front-end

* Unidad de testing en curso de JavaScript en LMS.
* Unidad de arreglos en curso de JavaScript en LMS.
* Unidad de objetos en curso de JavaScript en LMS.
* Unidad de funciones en curso de JavaScript en LMS.
* Unidad de DOM en curso de Browser JavaScript en LMS.
* [Array en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)
* [Array.sort en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort)
* [Array.map en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map)
* [Array.filter en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)
* [Array.reduce en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
* [Array.forEach en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach)
* [Object.keys en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/keys)
* [Object.entries en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/entries)
* [Fetch API en MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [json.org](https://json.org/json-es.html)

### Herramientas

* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)
* [Node.js](https://nodejs.org/)
* [Jest](https://jestjs.io/)

### Organización del Trabajo:

* [Historias de Usuario](https://www.youtube.com/watch?v=ky6wFiF5vMk&t=344s). Ojo que Cris no diferencia _Definición de terminado_ de
_Criterios de Aceptación_ y nosotros sí lo haremos. Más detalles en la guía.
* [Cómo dividir H.U.](https://www.youtube.com/watch?v=Ueq786iZ30I&t=341s)
* [Guía para Data Lovers](https://docs.google.com/presentation/d/e/2PACX-1vQhx9D36NjpH-Daea-ITPUDUzNL8ZiNAprq_7b5PSUrfutk45tEtaOLz2lmd8f54_5jX1hypDM8f8SM/pub?start=false&loop=false&delayms=60000)

***

## Checklist

* [ ] Usa VanillaJS.
* [ ] No hace uso de `this`.
* [ ] Pasa linter (`npm run pretest`)
* [ ] Pasa tests (`npm test`)
* [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [ ] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [ ] Incluye historias de usuario en `README.md`.
* [ ] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [ ] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [ ] Incluye link a Zeplin en `README.md`.
* [ ] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [ ] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [ ] UI: Permite ordenar data por uno o más campos (asc y desc).
* [ ] UI: Permite filtrar data en base a una condición.
* [ ] UI: Es _responsive_.