// Write your solution here!
//initial cats array
let cats = ["Milo", "Otis", "Garfield"];
//destructivelyAppendCat(name)
function destructivelyAppendCat(name) {
  cats.push("Ralph");
}

//destructivelyPrependCat(name)
function destructivelyPrependCat(name) {
  cats.unshift("Bob");
}

//destructivelyRemoveLastcat(name)
function destructivelyRemoveLastCat(name) {
  cats.pop("Otis");
}

//destructivelyRemoveFirstCat(name)
function destructivelyRemoveFirstCat(name) {
  cats.shift("Milo");
}
//appendsCat(name)
function appendCat(name) {
  return [...cats, "Broom"];
}
//prependCat(name)
function prependCat(name) {
  return ["Arnold", ...cats];
}
//removeLastCat()
function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}
//removeFirstCat()
function removeFirstCat() {
  return cats.slice(1);
}
if (typeof mudule !== undefined && module.exports) {
  module.exports = {
    destructivelyAppendCat,
    destructivelyPrependCat,
    destructivelyRemoveLastCat,
    destructivelyRemoveFirstCat,
    appendCat,
    prependCat,
    removeLastCat,
    removeFirstCat,
  };
}
