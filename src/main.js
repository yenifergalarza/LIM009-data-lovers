 /* Manejo del DOM */
 const printPoke = document.getElementById("rootCard");

 const pokeData = POKEMON.pokemon;

 const eachPoke = (pokemon) => {
   for (let pokeOne = 0; pokeOne < pokemon.length; pokeOne++) {
     if (pokemon[pokeOne].hasOwnProperty('candy_count')) {
       printPoke.innerHTML += `
        <div class="card">
      <img src="${pokemon[pokeOne].img}" class="card-img-top" > 
      <div class="card-body card-header">
      <p class="card-title whiteText" >${pokemon[pokeOne].name}</p>
      </div>  
      <ul class="list-group list-group-flush">
      <li class="list-group-item" > N° de PokeDex : ${pokemon[pokeOne].num}</li>
      <li class="list-group-item" > Tipo : ${pokemon[pokeOne].type}</li>
      <li class="list-group-item"  > Debilidades : ${pokemon[pokeOne].weaknesses}</li>
      <li class="list-group-item" > Apariciones : ${pokemon[pokeOne].spawn_chance}</li>
      <li class="list-group-item" > Peso : ${pokemon[pokeOne].weight}</li>
      <li class="list-group-item" > Caramelos : ${pokemon[pokeOne].candy_count}  ${pokemon[pokeOne].candy}</li>
      </ul>
      </div> `
     } else {
       printPoke.innerHTML += `
        <div class="card" ">
      <img src="${pokemon[pokeOne].img}" class="card-img-top" > 
      <div class="card-body card-header">
      <p class="card-title whiteText">${pokemon[pokeOne].name}</p>
      </div>
      <ul class="list-group list-group-flush">
      <li class="list-group-item" > N° de PokeDex : ${pokemon[pokeOne].num}</li>
      <li class="list-group-item" > Tipo : ${pokemon[pokeOne].type}</li>
      <li class="list-group-item"  > Debilidades : ${pokemon[pokeOne].weaknesses}</li>
      <li class="list-group-item" > Apariciones : ${pokemon[pokeOne].spawn_chance}</li>
      <li class="list-group-item" > Peso : ${pokemon[pokeOne].weight}</li>
      <li class="list-group-item" > Caramelos : no necesita mas ${pokemon[pokeOne].candy} </li>
      </ul>
      </div> `
     }
   }
 }



 document.getElementById('down').addEventListener('click', downPoke);

 function downPoke() {
   printPoke.innerHTML = ``;
   eachPoke(pokeData.sort(sortArrsToObjects).reverse());
 }
 document.getElementById('up').addEventListener('click', upPoke);

 function upPoke() {
   printPoke.innerHTML = ``;
   eachPoke(pokeData.sort(sortArrsToObjects));
 }

 const pokemonFiltrado = document.getElementById("tipoDePokemon");
 pokemonFiltrado.addEventListener("change", () => {
   const filtrando = filtrarPokemon(pokeData, pokemonFiltrado.value);
   printPoke.innerHTML = ``;

   let pokeStat = calculusStats(pokeData, filtrando);
   const pokeBar = document.getElementById("pokeBar");
   const titlePoke = document.getElementById("titlePoke");
   pokeBar.innerHTML = ``;
   titlePoke.innerHTML = ``;
   titlePoke.innerHTML = `Porcentaje de pokemones de tipo ${ pokemonFiltrado.value} : ${pokeStat}%`;
   pokeBar.innerHTML += ` 
   <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: ${pokeStat}%" aria-valuenow="${pokeStat}" aria-valuemin="0" aria-valuemax="100"></div>`;
   eachPoke(filtrando);
 });
