function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const url = window.location.search.slice(1);
console.log(url);

fetch(url)
  .then(resp => resp.json())
  .then(function(data) {
    let pokemon = data;
    console.log(pokemon)
    });