let words = ["one", "two", "three"];

function handMadePush(array, element) { 
  array[array.length] = element;
  return array;
}

const hariu = handMadePush(words, "four");

console.log(hariu);
