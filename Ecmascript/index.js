/** @format */

console.log("This is ECMA SCRIPT");

//Call_Back Examples

// const sum = (a, b, Callback) => {
//   const result = a + b;
//   Callback(result);
// };
// const Display = (result) => {
//   const h1 = document.querySelector("h1");
//   h1.innerText = result;
// };
// sum(20, 10, Display);

// function sum(a, b, callback) {
//   const result = a + b;
//   callback(result);
// }

// function DisplayMessage(result) {
//   const h1 = document.querySelector("h1");
//   h1.innerText = result;
// }
// sum(20, 20, DisplayMessage);

// In this code example shows that we write same code for some operations in multiple lines which is not better approach in programming
// Quotes "Expert Programmers is that person which Never repeat the code for same purpose operations"
//Better Approach in these cases use CallBack Functions
//E.g
const arr = [1, 2, 3, 4, 5];
function Calculator(arr = [], callBack) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const elements = callBack(arr[i]);
    newArray.push(elements);
  }
  console.log(newArray);
}

// function multiply(arr = []) {
//   const newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArray.push(arr[i] * 10);
//   }
//   console.log(newArray);
// }

// function Divide(arr = []) {
//   const newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArray.push(arr[i] / 10);
//   }
//   console.log(newArray);
// }

// Calculator(arr, (a) => a * 10);
// Calculator(arr, (a) => a / 10);
// Calculator(arr, (a) => a + 10);
// Calculator(arr, (a) => a - 10);

const ProductList = [];
const FetchData = (callBack) => {
  setTimeout(
    (callBack) => {
      ProductList.push(
        {
          name: "Mobiles",
          id: 1,
        },
        {
          name: "Laptop",
          id: 2,
        },
        {
          name: "Camera",
          id: 3,
        }
      );
      callBack();
      console.log(
        ProductList,
        "shows Fetch data after 2 seconds then display after 1 second"
      );
    },
    2000,
    callBack
  );
};
const DisplayData = () => {
  setTimeout(() => {
    for (let i = 0; i < ProductList.length; i++) {
      const element = `#:${ProductList[i].id} ${ProductList[i].name}`;
      const h3 = document.createElement("h3");
      h3.innerHTML = element;
      document.body.append(h3);
    }
    console.log("when Data Fetch then shows data in body");
  }, 1000);
};
FetchData(DisplayData);
