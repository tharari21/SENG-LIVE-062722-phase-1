document.addEventListener("DOMContentLoaded", () => {
  const renderBookList = (bookStore) => {
    bookStore.inventory.forEach(renderBookCard);
  };

  const renderBookCard = (book) => {
    const li = document.createElement("li");
    const h3 = document.createElement("h3");
    const pAuthor = document.createElement("p");
    const pPrice = document.createElement("p");
    const img = document.createElement("img");
    const deleteBtn = document.createElement("button");

    h3.textContent = book.title;
    pAuthor.textContent = book.author;
    pPrice.textContent = book.price;
    deleteBtn.textContent = "DELETE";
    deleteBtn.addEventListener("click", (event) =>
      event.target.parentElement.remove()
    );
    img.src = book.imageUrl;
    li.className = "list-li";

    li.append(h3, pAuthor, pPrice, img, deleteBtn);
    document.querySelector("#book-list").append(li);
  };
  // Renders Header
  function renderHeader(bookStore) {
    document.querySelector("h1").textContent = bookStore.name;
  }
  // Renders Footer
  function renderFooter(bookStore) {
    const footerDivs = document.querySelectorAll("footer div");
    footerDivs[0].textContent = bookStore.name;
    footerDivs[1].textContent = bookStore.address;
    footerDivs[2].textContent = bookStore.hours;
  }
  const clearBookList = () => {
    document.querySelectorAll("#book-list > li").forEach((li) => li.remove());
  };
  const loadPage = (bookStore) => {
    renderHeader(bookStore);
    renderFooter(bookStore);
    renderBookList(bookStore);
  };

  let toggleSwitch = false;
  const switchStore = () => {
    toggleSwitch = !toggleSwitch;

    if (!toggleSwitch) {
      clearBookList();
      loadPage(bookStore1);
    } else {
      clearBookList();
      loadPage(bookStore2);
    }
  };

  /*
    - Demo a simple event:
        - Add an eventListener to an element and log the event object. Do something simple as an example before integrating events into the application. (Such as a click that console.logs)
    */
  // document.querySelector("#header").addEventListener("click", (e) => {
  //   console.log(e);
  // });
  /*
    - Demo click event and remove 
        - In renderBookCard, add an event listener to the Delete button.
        - Add a callback that removes the li. You can do this through the li itself or the event.target.parentElement
    */
  /*
    - Demo Forms and Submit
        - Select the form with the id of ‘book-form’.
        - Add a submit eventListener.
        - Pass the eventListener a callback that handles the form.
        - The callback takes the event as a parameter.
        - It should prevent the form's default behavior.
        - It should build a book object useing the event object through the name attribute (e.target.title.value),  the id attribute (note the ids are in kabab case so you’ll need to select the id with bracket notation (e.target[form-title].value) or index of the input (e.target[0].value)
        - Call renderBookCard and pass it the new book object.
    */

  const form = document.querySelector("#book-form");
  const handleForm = (event) => {
    event.preventDefault();
    const book = {
      id: bookStore.inventory.length + 1,
      title: event.target.title.value,
      author: event.target.author.value,
      price: event.target["form-price"].value,
      imageUrl: event.target[3].value,
      inventory: event.target.inventory.value,
      reviews: [],
    };
    renderBookCard(book);
  };
  form.addEventListener("submit", handleForm);

  /*
    - Demo DOMcontentLoaded
        - Add a DOMcontentLoaded eventListener to the document and wrap the code within the callback function
    */
  // document.addEventListener('DOMcontentLoaded', () =>)

  /*
    - Bonus
        - Create a new store object with the same properties as BookStore.
        - Add a button that toggles the store information to a different store.
        - Add eventListener for a click that toggles the store info in the header and footer to the new store object.
    */
  const toggleBtn = document.getElementById("toggle-btn");
  toggleBtn.addEventListener("click", switchStore);
});
