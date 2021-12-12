const pContainer = document.getElementById("pContainer");
const pNumber = 75;

const fPokemon = async () => {
    for (let x = 1; x <= pNumber; x++) {
        await gPokemon(x);
    }
};

const colors = {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#98d7a5",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#F5F5F5",
};

const mType = Object.keys(colors);
console.log(mType);

const gPokemon = async (id) => {
    const pLink = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const result = await fetch(pLink);
    const pType = await result.json();
    createPCard(pType);
};

fPokemon();

function createPCard(pType) {
    const pElement = document.createElement("div");
    pElement.classList.add("pType");

    const pVariant = pType.types.map((param1) => param1.type.name);
    const pName = pType.name[0].toUpperCase() + pType.name.slice(1);
    const pAbility = pType.abilities.map((param3) => param3.ability.name);
    const pMove = pType.moves.map((param4) => param4.move.name);

    const pInnerHTML = `
        <div class="iContainer">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/${pType.id}.png">
        </div>
        <div class="about">
            <span class="serial">${pType.id}</span>
            <h2 class="pName">${pName}</h2>
            <div class="pChar">
                <div class="pAbility"><strong>Ability: </strong><div class="sub-pAbility">${pAbility}</div></div>
                <div class="pMove"><strong>Move: </strong>${pMove[0]}</div>
                <div class="pWeight"><strong>Weight: </strong>${pType.weight}</div>
            </div>
        </div>
    `;

    pElement.innerHTML = pInnerHTML;

    pContainer.appendChild(pElement);
}
