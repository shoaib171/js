/** @format */

console.log("JavaScript_API");
const Api = "https://jsonplaceholder.typicode.com/users";

// fetch(`${Api}`)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    // create HTML elements dynamically
    const container = document.createElement("div");
    const title = document.createElement("h2");
    const list = document.createElement("ul");

    // populate the elements with data

    data.map((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item.name;
      list.appendChild(listItem);
      const ListEmail = document.createElement("h2");
      ListEmail.textContent = item.email;
      title.appendChild(ListEmail);
    });

    // append the elements to the DOM
    container.appendChild(title);
    container.appendChild(list);
    document.body.appendChild(container);
  })
  .catch((error) => console.error(error));
