/* Manejo de data */
let arrayPokesFilter = [];

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

/* Ordenado ascendente */

/* const  filterOfPoke = (data, tipo) => {
  let arrayFiltrar = [];
  arrayFiltrar = data
      .filter((contenido) => {
          for (let i = 0; i < contenido.type.length; i++) {
              if (contenido.type[i] === tipo) {
                  return 1;

              }
          }
      });
  return arrayFiltrar;
} */

/*function filterOfPoke(pokedata, tipo) {
let arrayFil=[];
arrayFil=pokedata
.filter((array)=>{
  for(let x = 0;x<array.type.length;x++){
    if(array.type[x]===tipo){
      return 1;
}
  }
});
return arrayFil;

};*/ 

const filtrarPokemon = (data, tipo) => {
    let arrayFiltrar = [];
    arrayFiltrar = data.filter((contenido) => {
            for (let i = 0; i < contenido.type.length; i++) {
                if (contenido.type[i] === tipo) {
                    return 1;
                }
            }
        });
    return arrayFiltrar;
  }
window.filtrarPokemon = filtrarPokemon;
