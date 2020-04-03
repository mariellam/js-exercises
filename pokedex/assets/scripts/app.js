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
          a = createNode('a'),
          div = createNode('div'),
          h2 = createNode('h2'),
          img = createNode('img');
      a.href = e.url;
      div.innerHTML = '<span>'+ (i+1) + '</span>';
      h2.innerHTML = e.name;
      img.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+(i+1)+'.png';
      append(li, a);
      append(a, div);
      append(a, img);
      append(div, h2);
      append(list, li);
    });
  })