const marvelHeros = ["Captain America", "Ironman", "Spiderman"]
const dcHeros = ["Batman", "Superman", "Flash"]

marvelHeros.push(dcHeros); 
// ['Captain America', 'Ironman', 'Spiderman' , ['Batman','Superman', 'Flash']]
// Here array is pushed into another array as a single element.

console.log(marvelHeros); 
/* Arrays can take any kind of entry data here it took array as a data that array is a 
single element.
Here "Captain America", "Ironman", "Spiderman" are 3 elements and dcHeroes 
["Batman", "Superman", "Flash"] all are one element means 4 element.
*/ 

console.log(marvelHeros [3] [1]) // Superman
// Like this we can access the data of 3rd element.


const allHeros = marvelHeros.concat(dcHeros);
console.log(allHeros);
// concat is used to merge two arrays into one array. It will not change the existing arrays but instead return a new array.
// It concats the two arrays and create a new array.
// But the problem is it will not make the elements of arrays individual, it will take the whole array as a single element.



const allNewHeros = [...marvelHeros , ...dcHeros] //(... is spread operator)

console.log(allNewHeros);
// spread operator is used to merge two arrays into one array. It will not change the existing arrays but instead return a new array.
// This is called as the spread operator , between spread and concat ,
// spread operator is prefer to use because it can make the elements of arrays individual.



const months = ['March', 'Jan', 'Feb', 'Dec', 'July'];
months.sort();
console.log(months);
// Array ["Dec", "Feb", "Jan", "March" , 'July']