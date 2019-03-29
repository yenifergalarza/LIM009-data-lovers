 /* Manejo del DOM */
/*const arrayPoke = Object.values(pokeData); codigo muerto :(*/
  const printPoke = document.getElementById("rootCard");
  const pokeData = POKEMON.pokemon;
  const eachPoke = (pokemon) => {
    for (let pokeOne = 0; pokeOne < POKEMON.pokemon.length; pokeOne++) {
      if (POKEMON.pokemon[pokeOne].hasOwnProperty('candy_count')) {
        //console.log(.pokemon[pokeOne].name);
        printPoke.innerHTML +=`
        <div class="card">
      <img src="${pokemon[pokeOne].img}" class="card-img-top" > 
      <div class="card-body card-header">
      <p class="card-title">${pokemon[pokeOne].name}</p>
      </div>  
      <ul class="list-group list-group-flush">
      <li class="list-group-item" > N° de PokeDex : ${pokemon[pokeOne].num}</li>
      <li class="list-group-item" > Tipo : ${pokemon[pokeOne].type}</li>
      <li class="list-group-item"  > Debilidades : ${pokemon[pokeOne].weaknesses}</li>
      <li class="list-group-item" > Apariciones : ${pokemon[pokeOne].spawn_chance}</li>
      <li class="list-group-item" > Caramelos : ${pokemon[pokeOne].candy_count}  ${pokemon[pokeOne].candy}</li>
      </ul>
      </div> `
      } else {
        printPoke.innerHTML +=`
        <div class="card" ">
      <img src="${pokemon[pokeOne].img}" class="card-img-top" > 
      <div class="card-body card-header">
      <p class="card-title">${pokemon[pokeOne].name}</p>
      </div>
      <ul class="list-group list-group-flush">
      <li class="list-group-item" > N° de PokeDex : ${pokemon[pokeOne].num}</li>
      <li class="list-group-item" > Tipo : ${pokemon[pokeOne].type}</li>
      <li class="list-group-item"  > Debilidades : ${pokemon[pokeOne].weaknesses}</li>
      <li class="list-group-item" > Apariciones : ${pokemon[pokeOne].spawn_chance}</li>
      <li class="list-group-item" > Caramelos : no necesita mas ${pokemon[pokeOne].candy} </li>
      </ul>
      </div> `
      }
    }
  }

  //console.log(pokeData.sort(sortArrsToObjects).reverse());
    //eachPoke(arrayPokesFilter);
    document.getElementById('down').addEventListener('click',downPoke);
  function downPoke(){
    printPoke.innerHTML = ``;
    eachPoke(pokeData.sort(sortArrsToObjects).reverse());
  };
  document.getElementById('up').addEventListener('click',upPoke);
  function upPoke(){
    printPoke.innerHTML = ``;
    eachPoke(pokeData.sort(sortArrsToObjects));
  };
  //filterOfPoke(pokeData);
  // document.getElementById('twoEvolution').addEventListener('click',twoEvoClick);
  // function twoEvoClick(){
  // numberEvolution = 2
  //   printPoke.innerHTML = ``;
  //   eachPoke(filterOfEvo(pokeData));
  // }

  const pokemonFiltrado = document.getElementById("tipoDePokemon");
pokemonFiltrado.addEventListener("change", () => {
    const filtrando = filtrarPokemon(pokeData, pokemonFiltrado.value);
    printPoke.innerHTML = ``;
    
console.log( (pokeData.length/100)*(filtrando.length));
eachPoke(filtrando);
});


 
