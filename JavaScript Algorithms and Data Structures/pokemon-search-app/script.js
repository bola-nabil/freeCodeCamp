const userInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const pokemonImg = document.getElementById("sprite");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const data = document.getElementById("data");

// data.style.display = "none";
searchBtn.addEventListener("click", async () => {
  const inputValue = userInput.value;
  // data.style.display = "block";
  try {
    const response = await fetch(
      `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${inputValue.toLowerCase()}/`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Display the results
    console.log("data", data);
    pokemonName.innerText = data.name;
    pokemonId.innerText = `${data.id}`;
    pokemonWeight.innerText = data.weight;
    pokemonHeight.innerText = data.height;
    pokemonImg.src = data.sprites.front_default;

    types.innerHTML = "";

    data.types.forEach((e) => {
      let span = document.createElement("span");
      span.textContent = `${e.type.name}`;
      span.classList.add("type");
      types.appendChild(span);
    });

    let stats = [];
    data.stats.forEach((stat) => {
      stats.push(stat.base_stat);
    });
    hp.innerText = stats[0];
    attack.innerText = stats[1];
    defense.innerText = stats[2];
    specialAttack.innerText = stats[3];
    specialDefense.innerText = stats[4];
    speed.innerText = stats[5];
  } catch (error) {
    alert("Pokémon not found", error);
  }
});
