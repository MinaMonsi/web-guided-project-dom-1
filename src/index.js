// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

// A- finding across the entire DOM
const header = document.querySelector("header");
const logoTitle = document.querySelector("#logoTitle");
const firstCard = document.querySelector(".card");

// B- finding within one particular element
const imageFirstCard = document.querySelector("div.card img");
const titleFirstCard = document.querySelector(".card-title");
const subtitleFirstCard = document.querySelector(".card-subtitle");
const textFirstCard = document.querySelector(".card-text");
console.log(imageFirstCard, titleFirstCard, subtitleFirstCard, textFirstCard);

// C- traversing with dot notation
const link1FirstCard = textFirstCard.nextElementSibling;
const link2FirstCard = link1FirstCard.nextElementSibling;

// 👉 2- Finding collections of elements in the DOM
// A- find all the anchor tags inside the nav element
const links = document.querySelectorAll("nav a");
console.log(links);
// B- loop over the links and console.log their text content
links.forEach((link) => console.log(link.textContent));

// C- turn the collection of links into a real array
const linksRealArray = Array.from(links);
// D- use .filter to find the anchor tag with the textContent of "Home"
console.log(linksRealArray.find((link) => link.textContent === "Home"));
const homeLink = links[0];
console.log(homeLink);

// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
//  B- Have the students research online the difference between textContent and innerText
logoTitle.textContent = "Lambda Dog";
titleFirstCard.textContent = "Dog pic";
subtitleFirstCard.textContent = "Doggy subtitle";
textFirstCard.textContent = "stuff about Dogs";

// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
homeLink.textContent = "Puppy Palace";
imageFirstCard.src =
  "https://herepup.com/wp-content/uploads/2015/12/Dog-Advice-1-1.jpg";
//  B- Using .setAttribute to change a few attributes
link1FirstCard.setAttribute("href", "https://www.pexels.com/search/dog/");
link2FirstCard.setAttribute("href", "https://doggoipsum.com/");

// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
header.classList.add("sky");
header.classList.remove("sky");
setInterval(() => {
  header.classList.toggle("sky");
}, 1000);

//  B- By manipulating inline styles on the element
header.style.fontSize = "2em";

// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
const blogLink = document.createElement("a");
blogLink.textContent = "Blog";
blogLink.href = "#"; //# used as a place holder, link not linked to anything yet

document.querySelector("nav").appendChild(blogLink);
console.log(document.querySelector("nav"));

// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times
const secondCard = firstCard.cloneNode(true);
document.querySelector(".card-group").appendChild(secondCard);

// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]
header.remove();
document.querySelector("body").prepend(header);
// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]

// const header = document.querySelector("header");
// // console.log('header', header);

// const logoTitle = document.querySelector("#logoTitle");
// console.log("logoTitle", logoTitle);
// const logoContainer = document.querySelector(".logo-container");
// // console.log('logo-container', logo-container);

// const mainNav = document.getElementById("mainNav");
// // console.log('mainNav', mainNav);

// const cardText = document.querySelector(".card-text");
// const catPic = cardText.nextElementSibling;
// const catIpsumLink = catPicLink.nextElementSibling;
// // console.log(cardText);
// // console.log(catPic);
// // console.log(catIpsumLink);

// const firstCard = document.querySelector(".card:nth-of-type(1)");
// //
// const navLinks = document.querySelectorAll("nav a");
// //console.log("navLinks", navLinks);
// //

// const arrayFromNavLinks = Array.from(navLinks);
// //console.log("arrayFromNavLinks", arrayFromNavLinks);

// // changing text

// const cardTitle = document.querySelector(".card-title");
// const cardSubtitle = document.querySelector(".card-subtitle");
// const cardText = document.querySelector(".card-text");

// cardTitle.textContent = "Dogs are superior";
// cardSubtitle.textContent = "For Real";
// cardText.textContent = "Dogs are the best and run fast";

// const cardImgTop = document.querySelector(".card-img-top");
// catPicLink = cardText.nextElementSibling;
// const catIpsumLink = catPicLink.nextElementSibling;

// cardImgTop.src = "https:";
// catPicLink.setAttribute("href", "https://");
// catIpsumLink.setAttribute("href", "https://doggoipsum.com/");

// //CREATING NEW ELEMENTS FOR THE DOM

// const blogLink = document.createElement("a");
// blogLink.textContent = "Blog Here";
// blogLink.href = "#";
// document.querySelector("nav").appendChild(blogLink);

// //copying elements
// const secondCard = firstCard.cloneNode(true);
// document.querySelector(".card-group").appendChild(secondCard);
