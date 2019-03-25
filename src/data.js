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
/* Ordenado ascendente */
function filterOfPoke(arrayOfPoke){
  for(let = 0;x<arrayOfPoke.length;x++){
    if(arrayOfPoke[x].type[0]==="Fire"){
console.log(arrayOfPoke[x]);
    }
  }
}
window.filterOfPoke = filterOfPoke;