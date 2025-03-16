// Document Object Model (DOM)

// .querySelector()
// Pass: #id, .classname, tagname
const elementWithId = document.querySelector("#first-div");
console.log(elementWithId);

elementWithId.textContent = "div 1";
elementWithId.style.backgroundColor = "Green";
elementWithId.style.color = "white"

// It can only select the first element.
const elementWithClass = document.querySelector(".sample-div");
console.log(elementWithClass);

// .querySelectorAll()
// Pass: #id, .classname, tagname
const divElementsWithClass = document.querySelectorAll(".sample-div");
console.log(divElementsWithClass);
divElementsWithClass[1].style.textAlign = "center";
divElementsWithClass[1].style.textDecoration = "underline";

const headings = document.querySelectorAll("h3");
console.log(headings);

headings.forEach(function (heading) {
    heading.style.backgroundColor = "Orange";
    heading.style.color = "White";
    heading.style.border = "4px solid black";
  });

  const parentElement = document.querySelector("#parent-element");
  const createdElemet = document.createElement("div");
  createdElemet.textContent = "Child Element";
  console.log(createdElemet);
  parentElement.appendChild(createdElemet);

  // Remove an element
  const elementToBeRemove = document.querySelector("#element-to-be-removed");
  elementToBeRemove.remove();

  const darkModeBtn = document.querySelector("#dark-mode-btn");
  darkModeBtn.addEventListener("click", function (){
    const pageContainer = document.querySelector("#page-container");
    pageContainer.style.backgroundColor = "black";
    pageContainer.style.color = "white";
    const pageModeText = document.querySelector("#page-mode-text");
    pageContainer.textContent = "Dark Mode"
  });
