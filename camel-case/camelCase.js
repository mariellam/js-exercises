function toCamelCase(str){

  const regex = /[\-]|[\_]/g;
  
  const divided = str.split(regex);

  for ( let i = 1; i < divided.length; i++) {
    divided[i] = divided[i].replace(divided[i][0], divided[i][0].toUpperCase());
  }

  return divided.join('');
}

toCamelCase("A-B-C");