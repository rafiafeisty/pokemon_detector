const input=document.getElementById('search-input');
const searchButton=document.getElementById('search-button');
const name=document.getElementById('pokemon-name');
const id=document.getElementById('pokemon-id');
const weight=document.getElementById('weight');
const height=document.getElementById('height');
const hp=document.getElementById('hp');
const attack=document.getElementById('attack');
const defense=document.getElementById('defense');
const speacialAttack=document.getElementById('special-attack');
const speacialdefense=document.getElementById('special-defense');
const speed=document.getElementById('speed');
const spriteContainer=document.getElementById('sprite-container');
const types=document.getElementById('types');

const getPokemon=async()=>{
    try{
        const NameorId=input.value.toLowerCase();
        const checking=await fetch(
             `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${NameorId}`
        );
        const data=await checking.json();
        id.textContent=`: #${data.id}`;
        weight.textContent=`weight: ${data.weight}`;
        height.textContent=`height: ${data.height}`
        name.textContent=`Name: ${data.name.toUpperCase()}`;
        spriteContainer.innerHTML=`<img id="sprite" src="${data.sprites.front_default}" alt="${data.name} front default sprite">`

        hp.innerHTML=data.stats[0].base_stat;
        attack.textContent=data.stats[1].base_stat;
        defense.textContent=data.stats[2].base_stat;
        speacialAttack.textContent=data.stats[3].base_stat;
        speacialdefense.textContent=data.stats[4].base_stat;
        speed.textContent=data.stats[5].base_stat;
        
        types.style.display="block";
        types.innerHTML = data.types
        .map(obj => `<span class="type ${obj.type.name}">${obj.type.name}</span>`)
        .join('');
    } catch (err) {
        resetDisplay();
        alert('Pokémon not found');
        console.log(`Pokémon not found: ${err}`);
      }
};

const resetDisplay=()=>{ 
       name.textContent = "";
    id.textContent = "";
    types.innerHTML = "";
    weight.textContent = "";
    height.textContent = "";
    hp.textContent = "";
    attack.textContent = "";
    defense.textContent = "";
    speacialAttack.textContent = "";
    speacialdefense.textContent = "";
    speed.textContent = "";
    spriteContainer.innerHTML = "";
}
searchButton.addEventListener("click",getPokemon);