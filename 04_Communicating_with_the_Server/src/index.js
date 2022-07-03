document.addEventListener("DOMContentLoaded", () => {
  // Render Functions
  // Renders Header
  function renderHeader(store) {
    const header = document.querySelector("h1");
    header.textContent = store.name;
  }
  // Renders Footer
  function renderFooter(store) {
    const footerDivs = document.querySelectorAll("footer div");
    footerDivs[0].textContent = store.name;
    footerDivs[1].textContent = store.address;
    footerDivs[2].textContent = store.hours;
  }

  function renderBookCard(cardData) {
    const li = document.createElement("li");
    const h3 = document.createElement("h3");
    const pAuthor = document.createElement("p");
    const pPrice = document.createElement("p");
    const img = document.createElement("img");
    const btn = document.createElement("button");

    h3.textContent = cardData.title;
    pAuthor.textContent = cardData.author;
    pPrice.textContent = `$${cardData.price}`;
    btn.textContent = "Delete";

    img.src = cardData.imageUrl;
    li.className = "list-li";

    //Event Listeners
    btn.addEventListener("click", () => li.remove());

    li.append(h3, pAuthor, pPrice, img, btn);
    document.querySelector("#book-list").append(li);
  }

  const clearBookList = () => {
    const liList = document.querySelectorAll("#book-list > li");
    liList.forEach((li) => {
      li.remove();
    });
  };
  const loadPage = (books) => {
    clearBookList();
    books.forEach(renderBookCard);
  };

  // Event handlers
  function handleForm(e) {
    e.preventDefault();
    //Builds Book
    const book = {
      title: e.target.title.value,
      author: e.target.author.value,
      price: e.target.price.value,
      imageUrl: e.target.imageUrl.value,
      inventory: e.target.inventory.value,
      reviews: [],
    };
    renderBookCard(book);
  }

  //Invoking functions
  renderHeader(bookStore);
  renderFooter(bookStore);
  bookStore.inventory.forEach(renderBookCard);
  document.querySelector("#book-form").addEventListener("submit", handleForm);

  const fetchResource = (url) => {
    return fetch(url).then((res) =>
      res.json().then((data) => {
        return data;
      })
    );
  };

  const baseUrl = "http://localhost:3000";

  fetchResource(`${baseUrl}/books`).then((books) => {
    loadPage(books);
  });

  fetchResource(`${baseUrl}/stores/3`)
    .then((store) => {
      renderHeader(store);
      renderFooter(store);
    })
    .catch((err) => {
      const errObj = { name: "Failed to get store", address: "", hours: "" };
      renderHeader(errObj);
      renderFooter(errObj);
    });

  /*
    - Bonus
    - Create a fetch request that fetches all stores
    - Create a ul with a class name of store-menu.
    - Create a li for each store that's appended to the ul. The li's text content should be the store name, and it should have an id with the store's id.
    - Add an eventListener for click to each li.
    - The listener should change the header and footer to the information to match the store that was selected. You can do this without an additional fetch, but if you'd like to demo fetch again, make a fetch call for the specific store information. 


    */
  // Fetch all stores
  fetchResource(`${baseUrl}/stores`).then((stores) => {
    //   - Create a ul with a class name of store-menu.
    const storeMenu = document.createElement("ul");
    storeMenu.className = "store-menu";
    stores.forEach((store) => {
      const li = document.createElement("li");
      li.textContent = store.name;
      li.id = store.id;
      li.addEventListener("mouseover", () => {
        li.style.cursor = "pointer";
        li.style.color = "red";
      });
      li.addEventListener("mouseout", () => {
        li.style.cursor = "default";
        li.style.color = "black";
      });
      li.addEventListener("click", () => {
        renderHeader(store);
        renderFooter(store);
      });
      storeMenu.append(li);
    });
    document.querySelector(".list").append(storeMenu);
  });
});
