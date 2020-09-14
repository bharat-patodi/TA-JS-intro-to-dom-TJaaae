// For styling the header
let body = document.querySelector("body");
body.style.margin = "0";
let header = document.querySelector("header");
header.innerHTML = "<h1>People of GOT</h1>";
header.style.textAlign = "center";
header.style.backgroundColor = "#4075d5";
header.style.padding = "0.5rem";
header.style.color = "white";

// A library container of books
let main = document.querySelector("main");
let container = document.createElement("div");
container.classList.add = "container";
main.append(container);
main.style.backgroundColor = "#f4f5f9";
container.style.maxWidth = "1400px";
container.style.padding = "1rem 2rem";
container.style.margin = "0 auto";

// All books display section
let peopleSection = document.createElement("section");
container.append(peopleSection);
peopleSection.classList.add = "people-list";
peopleSection.style.display = "grid";
peopleSection.style.gridTemplateColumns =
  "repeat(auto-fit, minmax(350px, 1fr))";
peopleSection.style.gridGap = "20px";

// All the people
got.houses.forEach((house) => {
  house.people.forEach((person) => {
    let character = document.createElement("article");

    let charIntro = document.createElement("div");
    let charImage = document.createElement("img");
    let charTitle = document.createElement("h2");
    charIntro.append(charImage, charTitle);
    let charDesc = document.createElement("p");
    let charButton = document.createElement("a");
    character.style.textAlign = "center";
    character.style.backgroundColor = "white";
    character.style.padding = "2rem";
    character.style.borderRadius = "5px";
    character.style.boxShadow = "3px 5px 5px 5px #ccc";

    character.append(charIntro, charDesc, charButton);
    peopleSection.append(character);

    charIntro.style.display = "flex";
    charImage.src = person.image;
    charImage.style.width = "25%";
    charImage.style.height = "25%";
    charImage.style.borderRadius = "50%";
    charImage.style.border = "3px solid teal";
    charImage.alt = "GOT character";
    charImage.style.marginRight = "1rem";
    charTitle.style.fontWeight = "700";
    charDesc.style.marginBottom = "20px";
    charButton.style.display = "block";

    // Filling in the values
    charTitle.innerText = person.name;
    charDesc.innerText = person.description;
    charButton.style.padding = "0.5rem 1rem";
    charButton.style.backgroundColor = "#e7edfd";
    charButton.style.color = "#4075d5";
    charButton.style.fontWeight = "700";
    charButton.style.borderRadius = "5px";
    charButton.innerText = "Learn More!";
  });
});
