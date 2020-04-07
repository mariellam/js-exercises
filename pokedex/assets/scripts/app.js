function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const list = document.getElementById('pokedex');
const url = "https://pokeapi.co/api/v2/pokemon/?limit=150";
let pokemons;

fetch(url)
  .then(resp => resp.json())
  .then(function(data) {
    pokemons = data.results;
    pokemons.forEach((e, i) => {
      const li = createNode('li'),
            a = createNode('a'),
            div = createNode('div'),
            h2 = createNode('h2'),
            img = createNode('img'),
            pokemonId = i + 1;
            pokemonName = e.name;
      a.href = 'detail.html' + '?' + 'name=' + pokemonName;
      div.innerHTML = '<span>'+ pokemonId + '</span>';
      h2.innerHTML = e.name;
      img.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+ pokemonId +'.png';
      append(li, a);
      append(a, div);
      append(a, img);
      append(div, h2);
      append(list, li);
    });
  })
.then(function(search){
  const searchBox = document.getElementById('searchbox');
  console.log(searchBox);
});