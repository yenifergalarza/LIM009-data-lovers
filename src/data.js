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




function filterOfPoke(arrayOfPoke){
  for(let x = 0;x<arrayOfPoke.length;x++){
    if(arrayOfPoke[x].type[0]==="Water"){
console.log(arrayOfPoke[x]);

arrayPokesFilter.push(arrayOfPoke[x]);
    }
  }
};

window.filterOfPoke = filterOfPoke;

// let numberEvolution = 0 ;

// function filterOfEvo(arrayOfPoke){
//   for(let x = 0; x < arrayOfPoke.length;x++){
//     if(arrayOfPoke[x].next_evolution=== numberEvolution ){
// console.log(arrayOfPoke[x]);

// arrayPokesFilter.push(arrayOfPoke[x]);
//     }
//   }
// };

// window.filterOfEvo = filterOfEvo;