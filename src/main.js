/* Manejo del DOM */
<<<<<<< HEAD
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
=======

/*const arrayPoke = Object.values(pokeData); codigo muerto :(*/
const printPoke = document.getElementById("rootCard");
const pokeData = POKEMON.pokemon;
const eachPoke = (pokemon) => {
  for (let pokeOne = 0; pokeOne < POKEMON.pokemon.length; pokeOne++) {
    if (POKEMON.pokemon[pokeOne].hasOwnProperty('candy_count')) {
      //console.log(.pokemon[pokeOne].name);
      printPoke.innerHTML += `
      <div class="card">
    <img src="${pokemon[pokeOne].img}" class="card-img-top" > 
    <div class="card-body card-header">
    <p class="card-title"> Nombre : ${pokemon[pokeOne].name}</p>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item" > N° de Pokemon : ${pokemon[pokeOne].num}</li>
    <li class="list-group-item" > Tipo : ${pokemon[pokeOne].type}</li>
    <li class="list-group-item"  > Debilidades : ${pokemon[pokeOne].weaknesses}</li>
    <li class="list-group-item" > Apariciones : ${pokemon[pokeOne].spawn_chance}</li>
    <li class="list-group-item" > Caramelos : ${pokemon[pokeOne].candy_count}</li>
    </ul>
    </div> `
    } else {
      printPoke.innerHTML += `
      <div class="card" style="width: 12rem;">
    <img src="${pokemon[pokeOne].img}" class="card-img-top" > 
    <div class="card-body card-header">
    <p class="card-title"> Nombre : ${pokemon[pokeOne].name}</p>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item" > N° de Pokemon : ${pokemon[pokeOne].num}</li>
    <li class="list-group-item" > Tipo : ${pokemon[pokeOne].type}</li>
    <li class="list-group-item"  > Debilidades : ${pokemon[pokeOne].weaknesses}</li>
    <li class="list-group-item" > Apariciones : ${pokemon[pokeOne].spawn_chance}</li>
    <li class="list-group-item" > Caramelos : no necesita mas ${pokemon[pokeOne].candy} </li>
    </ul>
    </div> `
    }

  }
}
eachPoke(pokeData);
>>>>>>> 66ccac9b8f59e660380a004831894bb520cff52d
