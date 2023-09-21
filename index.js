let kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten() {
   kittens.push('Ralph');
   return kittens;
}

function destructivelyPrependKitten(){
  kittens.unshift('Bob');
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(){
  let catList = [...kittens , 'Broom' ];
  return catList ;
}

function prependKitten(){
  let catList2 = ['Arnold', ...kittens];
  return catList2;
}

function removeLastKitten(){
  let kittenList = kittens.slice(0,-1);
  return kittenList;
}

function removeFirstKitten(){
  let kittenList2 = kittens.shift(1);
  return kittenList2 ;
}