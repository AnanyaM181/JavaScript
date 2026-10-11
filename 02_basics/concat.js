const marvelHeros = ["Captain America", "Ironman", "Spidermann"]
const dcHeros = ["Batman", "Superman", "Flash"]

const allHeros = marvelHeros.concat(dcHeros);
console.log(allHeros);

//Concat with multiple arrays
const marvelHeros2 = ["Captain America", "Ironman", "Spidermann"]
const dcHeros2 = ["Batman", "Superman", "Flash"]
const otherHeros = ["Wolverine", "Deadpool"]

const allHeros2 = marvelHeros2.concat(dcHeros2, otherHeros);
console.log(allHeros2);