# Live Coding - Arrays and Objects


## Arrays

### Definition

In JavaScript, an array is one of the most commonly used data types. It stores multiple values and elements in one variable. These values can be of any data type, meaning you can store a string, number, boolean, and other data types in one variable.

---

### Creating arrays

These are two methods to create an array on JavaScript.

```javascript
  let fruits = ["apple", "bnanna", "mango"];
  let numbers = new Array(2, 8, 9, 0, 19);
  ```

---

### Accessing Elements

We can access to an element on an array by index (index on arrays started by 0).

```javascript
  numbers[2] = 20   // assign a new value
  console.log(fruits[0])  // Outupt: apple
```
---

### Arrays Methods

- **length()** is a property return the length of an array

- **toString()** method convert an array value to a string comma sperated values.

- **at()** method accept an index as an argument and return value of it's index.

- **includes()** Determines whether an array includes a certain element, returning true or false.

- **sort()** Sorts elements in an array. By default, sorts elements as strings, which may need a compare function for numbers.

- **join()** method is like **toString** method but here you can choose the sperator.

- **push()** method adds a new element at the end of the array (return the new size).

- **pop()** method removes the last element from an array (return the removed element).

- **shift()** method removes the first element from an array.

- **unshift()** method adds a new element to the begining of the array.

- **concat()** method create a new array by merging an existing arrays (it accept multiple arguments).

- **splice()** method can be used to add a new items to an array (accept 3 arguments splice(index, nbr_elements, new_elements), return the deleted elements).

- **toSpliced()** is like the last one but it doesn't change the orgininal array (ES2023).

- **slice()** method slices out a piece of an array into a new array.

- **map()** Creates a new array with the results of calling a function on every element in the array.

- **filter()** Creates a new array with all elements that pass a test implemented by the provided function.

- **reduce()** Reduces the array to a single value by accumulating a result, processing each element from left to right.

- **find()** Returns the first element in the array that satisfies the provided testing function, or undefined if none do.


### Multidimentional arrays

A **multidimensional array** (or **nested array**) is an array that contains other arrays as its elements. In JavaScript, the most common form of a multidimensional array is a **2D array** (an array of arrays), which is often used to represent grids, tables, matrices, or other two-dimensional data structures.

**1. Basics of Multidimensional Arrays**

In JavaScript, multidimensional arrays are created by nesting arrays within arrays. Here’s an example of a 2D array:

```javascript
let matrix = [
    [1, 2, 3],     // First row
    [4, 5, 6],     // Second row
    [7, 8, 9]      // Third row
];
```

In this example:
- `matrix` is a 2D array with 3 rows and 3 columns.
- Each inner array represents a row in the matrix.

**2. Accessing Elements in a Multidimensional Array**

To access elements, you use multiple indices:
1. The first index represents the outer array (or the row).
2. The second index represents the inner array (or the column within that row).

For example:

```javascript
console.log(matrix[0][0]); // Output: 1 (first row, first column)
console.log(matrix[1][2]); // Output: 6 (second row, third column)
console.log(matrix[2][1]); // Output: 8 (third row, second column)
```

**3. Manipulating Multidimensional Arrays**

Just like with 1D arrays, you can manipulate multidimensional arrays using standard array methods. For example:

- **Adding a Row (push)**:  
  To add a new row, you can use `.push()` to add an array to the outer array.

  ```javascript
  matrix.push([10, 11, 12]);
  // matrix is now:
  // [
  //   [1, 2, 3],
  //   [4, 5, 6],
  //   [7, 8, 9],
  //   [10, 11, 12]
  // ]
  ```

- **Adding an Element to a Specific Row**:  
  You can add an element to a specific row (inner array) using `.push()` on that row.

  ```javascript
  matrix[0].push(4); // Adds 4 to the first row
  // matrix is now:
  // [
  //   [1, 2, 3, 4],
  //   [4, 5, 6],
  //   [7, 8, 9]
  // ]
  ```

**4. Looping Through a Multidimensional Array**

To process each element in a 2D array, you often use nested loops: an outer loop for each row and an inner loop for each element in that row.

```javascript
for (let i = 0; i < matrix.length; i++) {           // Loop over each row
    for (let j = 0; j < matrix[i].length; j++) {    // Loop over each element in the row
        console.log(matrix[i][j]);
    }
}
```

## Objects 

JavaScript **objects** are fundamental structures that allow you to store collections of key-value pairs and represent complex data. Here’s a concise guide to the essential concepts related to objects.

---

### 1. **Creating an Object**

- **Object Literal Syntax**:
  ```javascript
  let person = {
      name: "Alice",
      age: 25,
      isStudent: true
  };
  ```

- **Using `new Object()`**:
  ```javascript
  let person = new Object();
  person.name = "Alice";
  person.age = 25;
  ```

---

### 2. **Accessing Properties**

- **Dot Notation**:
  ```javascript
  console.log(person.name); // Output: Alice
  ```

- **Bracket Notation** (useful for dynamic keys):
  ```javascript
  console.log(person["age"]); // Output: 25
  ```

---

### 3. **Modifying Properties**

- Add or update a property:
  ```javascript
  person.city = "New York"; // Adds a new property
  person.age = 26;          // Updates an existing property
  ```

- **Delete a Property**:
  ```javascript
  delete person.isStudent;
  ```

---

### 4. **Methods**

Objects can contain **methods** (functions defined as properties).

```javascript
let calculator = {
    add: function(a, b) {
        return a + b;
    }
};

console.log(calculator.add(5, 3)); // Output: 8
```

---

### 5. **`this` Keyword**

Inside a method, `this` refers to the object calling the method.

```javascript
let person = {
    name: "Alice",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

person.greet(); // Output: Hello, Alice
```

---

### 6. **Object Methods**

JavaScript provides built-in methods for object manipulation:

- **`Object.keys(obj)`**: Returns an array of property names.
  ```javascript
  Object.keys(person); // ["name", "age", "city"]
  ```

- **`Object.values(obj)`**: Returns an array of property values.
  ```javascript
  Object.values(person); // ["Alice", 26, "New York"]
  ```

- **`Object.entries(obj)`**: Returns an array of key-value pairs.
  ```javascript
  Object.entries(person); // [["name", "Alice"], ["age", 26], ["city", "New York"]]
  ```

---

### 7. **Checking Properties**

- **`in` Operator**:
  ```javascript
  "name" in person; // true
  ```

- **`hasOwnProperty` Method**:
  ```javascript
  person.hasOwnProperty("age"); // true
  ```

---

### 8. **Nested Objects**

Objects can contain other objects as values, which allows for complex structures.

```javascript
let user = {
    name: "Bob",
    address: {
        city: "Paris",
        zip: 75001
    }
};

console.log(user.address.city); // Output: Paris
```

---

### 9. **Spread and Destructuring**

- **Spread Operator (`...`)**: Used for copying or merging objects.
  ```javascript
  let clone = { ...person };
  ```

- **Destructuring**: Extracts values into variables.
  ```javascript
  let { name, age } = person;
  ```

---

### 10. **Prototype and Inheritance**

Every JavaScript object has a prototype, enabling **inheritance**. The prototype chain allows objects to inherit properties and methods.

```javascript
let person = { name: "Alice" };
let student = Object.create(person);
student.grade = "A";

console.log(student.name); // Output: Alice (inherited)
```

---


### 11. **Object Constructors**

- **Syntax**

A constructor function typically starts with a capital letter by convention, and it is called using the new keyword to create new instances of the object.

```javascript
  function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;

  this.greet = function() {
    console.log(`Hello, my name is ${this.name}.`);
  };
}
```

- **Creating objects with object constructor**

```javascript 
  const person1 = new Person("Alice", 25, "Engineer");
const person2 = new Person("Bob", 30, "Designer");
```