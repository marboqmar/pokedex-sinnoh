# Pokedex Sinnoh

Este proyecto es una aplicación web en la que puedes consultar los Pokemon que habitan la región de Sinnoh. Para realizarla, he decidido utilizar React, Sass y TypeScript.
He optado por React en lugar JavaScript ya que React me parece mucho más sencillo de utilizar. También he usado Sass en lugar de CSS porque veo muy útil la utilización de variables y mixins para reutilización de código y también para modificar el código de forma más sencilla. Finalmente, he elegido TypeScript ya que, aunque complica ligeramente el código, hace mucho más predecible la aplicación.

Mi primer paso para realizar esta aplicación ha sido familiarizarme con la API que provee los datos de los pokemon que se van a mostrar (PokeApi, https://pokeapi.co/) y encontrar el listado completo de los pokemon a mostrar, ya que solo queremos los pokemon que aparecen en la región de Sinnoh (https://www.serebii.net/pokemon/gen4pokemon.shtml). He definido la información a obtener de la API y he realizado el diseño acorde a esta información (por ejemplo, se ha visto que ningún pokemon tiene más de dos tipos, por lo que esto se ha tenido en cuenta a la hora de realizar el diseño).

Una vez el diseño estaba completo me he puesto con el código. Lo primero que he hecho ha sido crear las rutas a mis componentes utilizando `react-router-dom`, y, una vez las rutas estaban funcionando correctamente, he decidido añadir la fuente que he elegido en el diseño (`PKMN RBYGSC` que es la fuente utilizada en los juegos de Pokemon Amarillo, Rojo y Azul).
Ya que nunca he utilizado fuentes que no estuvieran disponibles en Google Fonts, este ha sido el primer problema con el que me he encontrado realizando este proyecto, pero he encontrado la solución en este blog https://darshnarekha09.medium.com/adding-local-fonts-in-react-9d1466952042.

En este momento he creado las variables con los colores que se van a usar en el proyecto y he establecido la imagen de fondo de la aplicación (sin pensar en el modo oscuro por el momento). Después, he creado el JSX del header, sin añadirle ninguna lógica y utilizando iconos de https://fontawesome.com/, y mi componente de botón (utilizando la librería `classnames`).
Al crear el componente de botón, utilizando `ComponentType<any> | keyof ReactHTML;` como tipo para la propiedad `component`, este "any" me ha dado un error (`ESLint: Unexpected any. Specify a different type`). He conseguido solucionar este error haciendo un bypass del mismo como se indica aquí https://stackoverflow.com/questions/58467000/how-to-bypass-warning-unexpected-any-specify-a-different-type-typescript-eslin.

He creado los componentes que van a representar la información de un pokemon (en las vistas de grid, lista, y detalles del pokemon) con información predeterminada para comprobar la correcta visualización de los componentes con información controlada. Para poner en mayúscula la primera letra del nombre de los pokemon, me he ayudado de esta guía https://flexiple.com/javascript/javascript-capitalize-first-letter.

A continuación, he decidido empezar a implementar la lógica de la aplicación haciendo que la home cambie la vista de los pokemon de cuadrícula a lista. Como el botón para cambiar de cuadrícula a lista está en el header y el componente que necesita saber si está seleccionado el modo cuadrícula o el modo lista es PokemonDisplay, he decidido hacer un contexto para poder tener disponible esta información. También he modificado el header para que si se está mostrando los detalles de un pokemon (que no tiene vista de cuadrícula o lista), no muestre el botón de cambio de vista.

Ahora he implementado las llamadas a la API, el manejo de cuando está cargando y cuando la API devuelve un error, y el mapeo de la información que viene de la API.
Primero he comprobado que la llamada se hacía correctamente y que devolvía la información que necesitaba. Para hacer la lógica para poder realizar llamadas a múltiples URLs me he ayudado de este blog https://www.storyblok.com/tp/how-to-send-multiple-requests-using-axios.
Una vez ya tenía toda la información necesaria de la API he añadido la lógica para mapearla y así trabajar con la información en el formato que yo le he indicado, en vez de tal cual viene de la API.
Como la misma información de los pokemon ha de estar disponible tanto en la home, como en la página de pokemon details, he decidido realizar un contexto con la llamada a la API.

Para la paginación, he buscado como hacerla en estos blogs ya que no la había hecho antes: https://dev.to/canhamzacode/how-to-implement-pagination-with-reactjs-2b04 y https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/.

En el caso del modo oscuro, me he ayudado de este blog para implementarlo https://dev.to/franklin030601/using-dark-mode-in-your-react-app-5364.

Lo siguiente que he implementado ha sido los filtros de favoritos y búsqueda por nombre.

Para el responsive, he hecho un contexto para ver el tamaño de la pantalla, pero tenía mal apuntado en mis apuntes el removeEventListener, por lo que solo calculaba una vez el ancho de la pantalla y ya no lo actualizaba. En este blog he visto la solución a mi problema https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react.
Para hacer el hamburger menu con dropdown me he ayudado de esta guía https://selftaughttxg.com/2024/02-24/developing-a-dynamic-hamburger-menu-in-react-a-step-by-step-guide/

Como el responsive causa re-renderizaciones la experiencia con el modo oscuro se veía afectada, así que he movido el modo oscuro al local storage para que se mantenga entre renderizaciones.
