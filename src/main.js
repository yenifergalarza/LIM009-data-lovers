/* Manejo del DOM */
const  pokeData = POKEMON.pokemon;
const arrayPoke = Object.values(pokeData);
const printPoke = document.getElementById("root");
 
const eachPoke = (pokemon) =>{ for(let pokeOne = 0; pokeOne< POKEMON.pokemon.length;pokeOne++){
  console.log(POKEMON.pokemon[pokeOne].name);
  printPoke.innerHTML +=`
  <figure>
  <img src="${pokemon[pokeOne].img}">
  </figure>                
  <p> Nombre : ${pokemon[pokeOne].name}</p>
  <p> N° de Pokemon : ${pokemon[pokeOne].num}</p>
  <p> Tipo : ${pokemon[pokeOne].type}</p>
  <p> Debilidades : ${pokemon[pokeOne].weaknesses}</p>
  <p> Apariciones : ${pokemon[pokeOne].spawn_chance}</p>
  <p> Caramelos : ${pokemon[pokeOne].candy_count}</p>
   `;
}}
eachPoke(arrayPoke);