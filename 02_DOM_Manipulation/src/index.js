//BookStore has been moved to data.js

/*
- Demo querySelector:    
    - Create a function that sets the text content of the header to the bookstore name.
*/
const renderHeader = (bookStore) => {
  const header = document.querySelector("header > div > h1");
  header.textContent = bookStore.name;
};

/*
- Demo querySelectorAll:   
    - Create a function that grabs all the divs from the footer. Render the bookstore name,, address, and hours 
*/
const renderFooter = (bookStore) => {
  document.querySelector("#bookstore-name").textContent = bookStore.name;
  document.querySelector("#bookstore-address").textContent = bookStore.address;
  document.querySelector("#bookstore-hours").textContent = bookStore.hours;
};
/*
- Demo createElement   
    - Iterate through bookdata.inventory (an array of book objects). For every object in the array create a li, h3 , 2 ptags, image, and button elements. 
    - Add a book title to the h3 text content, the author and price to the ptags, and ‘Delete’ to the button. 
    - Add the imageUrl to the img.src and a class to the li of ‘list-li.’ (This is for some css in our style sheet.)
    - Append the h2, ptags, image, and button to the li 
    - Select the ul with the id of ‘book-list’ and append the li
*/
const renderBook = (book) => {
  const li = document.createElement("li");
  const h3 = document.createElement("h3");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const img = document.createElement("img");
  const btn = document.createElement("button");

  h3.textContent = book.title;
  p1.textContent = book.author;
  p2.textContent = book.price;
  btn.textContent = "DELETE";
  img.src = book.imageUrl;
  li.className = "list-li";

  li.append(h3, p1, p2, img, btn);
  document.querySelector("#book-list").append(li);
};
bookStore.inventory.forEach(renderBook);

/*
- Refactor:
    - Take the callback function out of the forEach and set it to a variable so it can be reused in other areas of our code. 

*/
