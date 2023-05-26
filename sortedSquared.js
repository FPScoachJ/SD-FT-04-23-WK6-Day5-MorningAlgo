const array = [-1, 2, 3, 5, 6, 8, 9];
const newArray = [];

function sortSquare() {
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] * array[i]);
  }
}
sortSquare(array);

newArray.sort((a, b) => a - b);
console.log(newArray);
return newArray;


