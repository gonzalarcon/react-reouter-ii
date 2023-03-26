Desafío consistente a Router II, del módulo React Router II.
En este desafío, se utilizó el hook NavLink para facilitar la navegación del usuario entre las pestañas 'Home' y 'Pokemones'.
En la pestaña 'Pokemones' se consumió una api (PokeApi) con el método de fetch, y se desplegó en un selector el nombre de los primeros 20 pokemones de Kanto, mediante el método map.
Al seleccionar el botón de consulta, se despliegan los principales datos del pokemon seleccionado (mediante el método map).
Asimismo, se utilizaron los hooks useParams para obtener los parámetros de la selección en la url y añadirlo al DOM.
Por último, el uso del hook useNavigate realiza una redirección programática al momento de presionar el botón, señalando, dentro del url 'pokemon', el id del pokémon seleccionado.

