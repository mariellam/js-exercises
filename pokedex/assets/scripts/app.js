function createNode(element) {
  return document.createElement(element); // Create the type of element you pass in the parameters
}

function append(parent, el) {
  return parent.appendChild(el); // Append the second parameter(element) to the first one
}

const list = document.getElementById('pokedex');
const url = 'https://pokeapi.co/api/v2/pokemon';

for (i = 1; i<= 150; i++){
  fetch(url + '/' + i)
    .then(resp => resp.json())
    .then(function(data) {
      let pokemon = data;
      let li = createNode('li'),
          img = createNode('img'),
          span = createNode('span'),
          a = createNode('a');
      
      a.href = url + '/' + i;
      img.src = pokemon.sprites.front_default;
      span.innerHTML = pokemon.name;
      append(li, a);
      append(a, img); // Append all our elements
      append(a, span);
      append(list, li);
      })
    .catch(function(error) {
      console.log(error);
    });
}