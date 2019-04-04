/* Manejo de data */

function sortArrsToObjects(a, b) {
  a = a.id;
  b = b.id;  

if (a > b) {
  return 1;
} else if (a < b) {
  return -1;
} else if (a === b) {
  return 0;
}
}
 
window.sortArrsToObjects = sortArrsToObjects;


const filtrarPokemon = (data, tipo) => {
    let arrayFiltrar = [];
    arrayFiltrar = data.filter((contenido) => {
            for (let i = 0; i < contenido.type.length; i++) {
                if (contenido.type[i] === tipo) {
                    return 1;} 
                  }
        });
    return arrayFiltrar;
  }
  
  
window.filtrarPokemon = filtrarPokemon;
