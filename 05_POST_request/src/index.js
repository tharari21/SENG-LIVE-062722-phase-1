document.addEventListener("DOMContentLoaded", () => {
  const baseUrl = "http://localhost:3000";
  // Fetch requests
  // Function for making a GET request
  function fetchResource(url) {
    return fetch(url).then((res) => res.json());
  }
  const createResource = (url, body) => {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };
  // Rendering functions
  // Renders Header
  function renderHeader(store) {
    document.querySelector("h1").textContent = store.name;
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
  const loadStore = (store) => {
    renderHeader(store);
    renderFooter(store);
  };
  const displayPopup = (error) => {
    console.log(error);
    const popupDiv = document.createElement("div");
    popupDiv.className = "popup";

    const h3 = document.createElement("h3");
    h3.textContent = `There has been an error reaching the server. Status code: ${error.status}`;

    const confirmationBtn = document.createElement("button");
    confirmationBtn.textContent = "OK";
    confirmationBtn.addEventListener("click", () => {
      popupDiv.remove();
    });

    popupDiv.append(h3, confirmationBtn);
    document.querySelector("#form-wrapper").append(popupDiv);
  };

  // Event Handlers
  function handleBookForm(e) {
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
    console.log(book);
    createResource(`${baseUrl}/books`, book)
      .then((res) => {
        if (!res.ok) {
          return Promise.reject({ status: res.status });
        }

        return res.json();
      })
      .then((jsonData) => {
        console.log(jsonData);
      })
      //   .catch(displayPopup);
      .catch((err) => {
        console.log("Error", err);
        displayPopup(err);
      });

    renderBookCard(book);
  }
  const handleStoreForm = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.location.value);
    console.log(e.target.address.value);
    console.log(e.target.number.value);
    console.log(e.target.hours.value);
    const store = {
      name: e.target.name.value,
      location: e.target.location.value,
      address: e.target.address.value,
      number: e.target.number.value,
      hours: e.target.hours.value,
    };
    createResource(`${baseUrl}/stores`, store).then((res) => {
      res.json().then((data) => {
        console.log(data);
        loadStore(data);
      });
    });
  };

  // Invoking functions
  fetchResource("http://localhost:3000/stores/1")
    .then((store) => {
      renderHeader(store);
      renderFooter(store);
    })
    .catch((e) => console.error(e));

  fetchResource("http://localhost:3000/books")
    .then((books) => books.forEach(renderBookCard))
    .catch((e) => console.error(e));

  document
    .querySelector("#book-form")
    .addEventListener("submit", handleBookForm);
  document
    .querySelector("#store-form")
    .addEventListener("submit", handleStoreForm);
    
});
