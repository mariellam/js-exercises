function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const content = document.getElementById('content');
const name = window.location.search.slice(6);
const urlBasic = 'https://pokeapi.co/api/v2/pokemon/' + name;

fetch(urlBasic)
  .then(resp => resp.json())
  .then(function(data) {
    const pokemon = data;
    const div1 = createNode('div'),
          div2 = createNode('div'),
          h2 = createNode('h2'),
          img = createNode('img'),
          p = createNode('p'),
          pokemonId = pokemon.id,
          pokemonName = pokemon.name,
          pokemonTypes = pokemon.types.forEach(function(e) {
            let types = e.type.name;
            return types;
          });
      div1.innerHTML = '<span>'+ pokemonId + '</span>';
      div2.setAttribute('id','details');
      h2.innerHTML = pokemon.name;
      p.innerHTML = pokemonTypes;
      img.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+ pokemonId +'.png';
      append(div1, div2);
      append(div1, img);
      append(div2, h2);
      append(div2, p);
      append(content, div1);
      return pokemonName;
  });

const urlFlavor = 'https://pokeapi.co/api/v2/pokemon-species/' + name;

fetch(urlFlavor)
  .then(resp => resp.json())
  .then(function(data) {
    const pokemonSpecies = data;
    const div2 = document.getElementById('details');
    const p = createNode('p'),
          pokemonFlavor = pokemonSpecies.flavor_text_entries.find(e => e.language.name == "en").flavor_text;
      p.innerHTML = pokemonFlavor;
      div2.appendChild(p);
  });