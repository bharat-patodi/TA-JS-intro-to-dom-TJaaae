/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)

*/

// Your code goes here

const createInputElm = (label, type = "text") => {
  let newLabel = document.createElement("label");
  newLabel.innerText = label;
  let newInput = document.createElement(`input`);
  newInput.setAttribute("type", type);
  document.body.append(newLabel);
  newLabel.append(newInput);
};

// TEST
createInputElm("Your name"); //<label>Your name: <input type="text"></label>
createInputElm("Your age", "number"); //<label>Your age: <input type="number"></label>

// 2. Do the same thing as above using string literal like `<h1>Hello</h1>`

// Your code goes here

const createInputElmRefactored = (label, type = "text") => {
  let newLabel = document.createElement("label");
  newLabel.innerHTML = `${label}: <input type="${type}">`;
  document.body.append(newLabel);
};

// TEST
createInputElmRefactored("Your name"); //<label>Your name: <input type="text"></label>
createInputElmRefactored("Your age", "number"); //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>
// Your code goes here

const createList = (arr) => {
  let myUl = document.createElement("ul");
  document.body.append(myUl);

  arr.forEach((val) => {
    let newLi = document.createElement("li");
    newLi.innerText = val;
    myUl.append(newLi);
  });
};

// TEST
createList(["ALABAMA", "ALASKA", "HAWAII", "KENTUCKY"]);
createList(["Afghanistan", "Antarctica", "Congo", "Estonia"]);

// 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/*
<ul>
  <li>
    <p>Learn DOM</p>
    <input type="checkbox" checked name="" id="">
    <span>X</span>
  </li>
</ul>
*/

// Your code goes here

const createTodoList = (arr) => {
  let myUl = document.createElement("ul");
  document.body.append(myUl);

  arr.forEach((val) => {
    let myLi = document.createElement("li");
    myUl.append(myLi);

    let theP = document.createElement("p");
    myLi.append(theP);

    theP.innerText = val.name;

    let theinput = document.createElement("input");
    myLi.append(theinput);
    theinput.setAttribute("type", "checkbox");
    theinput.setAttribute("name", "");
    theinput.setAttribute("id", "");
    if (val.isDone) {
      // Add checked to input
      theinput.setAttribute("checked", true);
      // Add span with X
      let mySpan = document.createElement("span");
      myLi.append(mySpan);
      mySpan.innerText = "X";
    }
  });
};

// TEST
createTodoList([
  { name: "Learn DOM", isDone: false },
  { name: "Learn JS", isDone: true },
]);
createTodoList([
  { name: "Learn DOM", isDone: false },
  { name: "Learn React", isDone: true },
  { name: "Learn JS", isDone: true },
]);
