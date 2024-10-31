// Arrays 

let arr = [1, 2, 3, 4];

// PRINT AN ARRAY
// console.log(arr);

// arr[0] = 10;

// FOR LOOPS
// for (let i = 0 ; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let i of arr) {
//   console.log(i);
// }


// FOR EACH METHOD
// arr.forEach(x => console.log(x));

// const y = function (x) {
//   console.log(x);
// }


// GET LENGTH OF AN ARRAY
// let len = arr.length

// TRANSFER AN ARRAY TO A STRING
// let str = arr.toString()

// ADD AN ELEMENT TO THE END OF AN ARRAY
// arr.push(20);

// console.log(arr);


// REMOVES THE LAST ELEMENT
// arr.pop()
// console.log(arr)

// DELETE THE FIRST ELEMENT
// arr.shift()
// console.log(arr)

// ADD AN ELEMENT AT THE BEGINING OF A TABLE
// arr.unshift(20);
// console.log(arr);

let arr2 = [30, 40]

// MERGE TABLES
// let arr3 = arr.concat(arr2);
// console.log(arr3);

// ADD ELEMENT WITH SPLICE METHOD
// arr.splice(arr.length, 2, 40, 50);
// console.log(arr)

// REMOVES ELEMENT WITH SPLICE 
// arr.splice(2, 1);
// console.log(arr);

//REPLACE ELEMENTS WITH SPLICE
// Replace elements
// arr.splice(2, 1, 30);
// console.log(arr)

// toSplice() IS LIKE splice() BUT THISONE RETURNS THE A NEW ARRAY
// let arr3 = arr.toSpliced(0, 2);
// console.table(arr);
// console.table(arr3);


// COPY A PART OF AN ARRAY
// let arr3 = arr.slice(0, 2);
// console.table(arr3)


// let fruits = ["mango", "bnana", "apple"]
// let numbers = [20, 9, 7, 5]

// SORT ELEMENTE WITH sort() METHOD 
//ASCENDING ORDER
// numbers.sort((a, b) => a-b);
// DESCENDING ORDER
// numbers.sort((a, b) => b-a);
// console.log(numbers);


// MODIFY A FUNCTION WITH A CALLBAKC FUNCTION
// let arr3 = arr.map((x) => x*2)
// console.log(arr3)

// FILTER AN ARRAY
// let arr3 = arr.filter(pair)
// function pair(x) {
//   if(x%2 == 0) {return x};
// }

// console.log(arr3)

// FIND AN ELEMENT 
// let arr3 = arr.find((x) => x>2);
// console.log(arr3)

// FIND THE INDEX OF THE ELEMENT
// console.table(arr)
// let index = arr.findIndex((x) => x>2);
// console.log(index);



// OBJECTS


// CREATE AN OBJECT
const person = {
  name: "ayman",
  age: 20,
  skills: ["html", "css" ,"js"],
  sayHello: function () {
    console.log(`Hello, ${this.name}`);
  }
}

// PRINT A PROPERTY OF AN OBJECT
console.log(person.name);
console.log(person["name"])
//PRINT A METHOD
person.sayHello();
// ITERATE INTO THE OBJEC
for (let x in person) {
  console.log(x, person[x]);
}

// RETURN AN ARRAY OF PERSON OBJECTS KEYS
console.log(Object.keys(person))
// RETURN AN ARRAY OF PERSON VALUE
console.log(Object.values(person))
// RETURN AN ARRAY OF SUBARRAYS WITH KEY VALUES
console.log(Object.entries(person))
