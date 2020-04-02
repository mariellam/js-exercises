function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const list = document.getElementById('pokedex');
const url = "https://pokeapi.co/api/v2/pokemon/?limit=150";

fetch(url)
  .then(resp => resp.json())
  .then(function(data) {
    var pokemons = data.results;
    pokemons.forEach((e, i) => {
      let li = createNode('li'),
          img = createNode('img'),
          h2 = createNode('h2'),
          a = createNode('a'),
          span = createNode('span');
      a.href = e.url;
      span.innerHTML = i+1;
      img.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+(i+1)+'.png';
      h2.innerHTML = e.name;
      append(li, a);
      append(a, span);
      append(a, img);
      append(a, h2);
      append(list, li);
    });
  })