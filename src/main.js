/* Manejo del DOM */
const  pokeData = POKEMON.pokemon;
const printPoke = document.getElementById("root");
 
const eachPoke = (pokemon) =>{ for(let pokeOne = 0; pokeOne< POKEMON.pokemon.length;pokeOne++){
  if(POKEMON.pokemon[pokeOne].hasOwnProperty('candy_count'))
  {
    //console.log(.pokemon[pokeOne].name);
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
     `
  }
  else{
    printPoke.innerHTML +=`
    <figure>
    <img src="${pokemon[pokeOne].img}">
    </figure>                
    <p> Nombre : ${pokemon[pokeOne].name}</p>
    <p> N° de Pokemon : ${pokemon[pokeOne].num}</p>
    <p> Tipo : ${pokemon[pokeOne].type}</p>
    <p> Debilidades : ${pokemon[pokeOne].weaknesses}</p>
    <p> Apariciones : ${pokemon[pokeOne].spawn_chance}</p>
    <p> Caramelos : no necesita mas ${pokemon[pokeOne].candy}</p>
     `}
  
}}
eachPoke(pokeData);