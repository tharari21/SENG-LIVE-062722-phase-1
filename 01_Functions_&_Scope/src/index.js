//Data
const inventory = [
  {
    id: 1,
    title: "Eloquent JavaScript: A Modern Introduction to Programming",
    author: "Marjin Haverbeke",
    price: 10.0,
    reviews: [
      { userID: 1, content: "Good book, but not great for new coders" },
    ],
    inventory: 10,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
  {
    id: 2,
    title: "JavaScript & JQuery: Interactive Front-End Web Development",
    author: "Jon Duckett",
    price: 45.75,
    reviews: [{ userID: 15, content: "good way to learn JQuery" }],
    inventory: 2,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg",
  },
  {
    id: 3,
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    price: 36.0,
    reviews: [
      { userID: 25, content: "I disagree with everything in this book" },
      { userID: 250, content: "Only JS book anyone needs" },
    ],
    inventory: 8,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
  {
    id: 4,
    title: "JavaScript: The Definitive Guide",
    author: "David Flanagan",
    price: 25.5,
    reviews: [
      { userID: 44, content: "Great intro to js book" },
      { userID: 350, content: "It really is the Definitive guide" },
    ],
    inventory: 0,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg",
  },
  {
    id: 5,
    title: "You Don’t Know JS",
    author: "Kyle Simpson",
    price: 6.0,
    reviews: [
      {
        userID: 76,
        content: "You can find this for free online, no need to pay for it!",
      },
    ],
    inventory: 7,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg",
  },
  {
    id: 6,
    title: "Learn Enough JavaScript to Be Dangerous",
    author: "Michael Hartl",
    price: 24.0,
    reviews: [{ userID: 50, content: "pretty good" }],
    inventory: 5,
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQyf6xSyTHc7a8mx17ikh6GeTohc88Hn0UgkN-RNF-h4iOwVlkW",
  },
  {
    id: 7,
    title: "Cracking the Coding Interview",
    author: "Gayle Laakmann McDowell",
    price: 49.95,
    reviews: [
      {
        userID: 99,
        content:
          "One of the most helpful books for taking on the tech interview",
      },
      {
        userID: 20,
        content: "Great but I just wish it was in JavaScript instead of Java",
      },
    ],
    inventory: 20,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg",
  },
];

/* Declare a function that takes a book as a parameter and returns the 
book's price formatted to look like currency. 
Given inventory[0] the return should be '$10.00"
*/
const printPrice = (book) => {
  return `$${book.price.toFixed(2)}`;
};

/* Demo Function Expressions:
    - Create a function Expression that takes a book as a parameter and returns a string consisting of the title and author of the book. Given inventory[0] the return should be 'Title: Eloquent JavaScript: A Modern Introduction to Programming by Marjin Haverbeke'
*/
const printTitleAndAuthor = (book) => {
  return `Title: ${book.title}\nAuthor: ${book.author}`;
};
/*- Demo arrow functions pt1: 
    - Create an arrow function that takes a book as a parameter and returns a string noting a book is on sale. Given inventory[0] the return should be 'Eloquent JavaScript: A Modern Introduction to Programming by Marjin Haverbeke is on sale!'
*/
// const isOnSale = (book) => {
//     if
// }

/* -  Demo arrow functions pt2: 
     - Create an arrow function that takes a discount and a book as parameters. Return the book price divided by the discount. Given inventory[0] and 2 the return should be 5.00
*/
const getDiscountPrice = (discount, book) => {
  return book.price / discount;
};

/*
- Demo Scope: 
    - Create a variable in the global scope and set it to a book's title. 
    - Create a function that takes title, price, author, and imageUrl as parameters. 
    - Create a variable in function scope and set it to an empty object. 
    - Assign the object the properties of title, price, and author with their values set to their corresponding parameters. Add a key of inventory and set it to 0, and a key of reviews set to an empty array. 
    - Create a conditional statement that checks whether the imageUrl has a value. If it has a value, give the object the property of imageUrl with its value set to the parameter. Else create a variable with the value of 'placeHolderImage.jpg' within block scope and give the object property of imageUrl set to the variable in block scope. (Note: we can give the parameter a default value here, but this section's purpose is to demo scope.)

    - Return book object 
    - Invoke the function with arguments and pass it to inventory.push so the return value is added to the inventory array.
    - Show the different levels of scope using console.logs or debuggers. Where do we have access to variables declared in global scope? Where do we have access to variables declared in function scope? Where do we have access to variables declared at the block level? What does local scope mean?
*/

const title = inventory[0].title;
const createBook = (title, price, author, imageUrl) => {
  const book = {};
  book.title = title;
  book.price = price;
  book.author = author;
  book.imageUrl = imageUrl;
  book.inventory = 0;
  book.reviews = [];
  if (imageUrl) {
    book.imageUrl = imageUrl;
  } else {
    const placeHolderImageUrl = "placeholder.jpg";
    book.imageUrl = placeHolderImageUrl;
  }
  return book;
};
console.log(createBook("NEW BOOK", 100, "Tomer", "img.jpg"));

/*
- Demo Callbacks
    - Create a function that takes a callback function and an array
    - Inside the function create a variable and set it to an empty array.
    - Loop through the array property. Within the block, invoke the callback function and pass it to the array element as an argument.
    - The return value of the callback should be pushed to the new array variable.
    - Return the new array variable. 
    - Test the function by passing the inventory array and one of our previous functions as its callback. (The function must take a single book as a parameter)
*/

const func = (callBackFn, arr) => {
  const newArr = [];
  for (const elem of arr) {
    newArr.push(callBackFn(elem));
  }
  return newArr;
};
console.log(func(printTitleAndAuthor, inventory));

// BONUS: Demo .map as a practical example of callbacks.
const printInventoryItem = (item) => {
  console.log(item);
};

inventory.map((book) => {
  console.log(printPrice(book));
  console.log(printTitleAndAuthor(book));
});
