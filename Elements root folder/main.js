
//let's try creating an element via the DOM
//and we will check out the element that we have created
//to do this you have to;
/*
- use .createElement function
- we need to have a place where we can append our new element so that it can be visible in our
*/
const newElement = document.createElement("p");
console.log(newElement);

//let us add an element to the html doc
//and also add text to thge console in our doc
const newText = document.createElement("p");
newText.innerText = "I am the innerText that was created via the DOM";
console.log(newText);

//we can add html to our doc
//we do these by using .appendChild function
//let me explain
//first, we create a const that gets our element via Id where we want to assign our element
//second, we create a second const where we create an Element and at this point we clarify the tag for our element.
//third, we add text to our second const using .innerText
/*fourth, we add .appendChild function to our first const that stated where we were going to
 assing our new element.*/
//we also added the styling on classList using .classList function.    
//noprotect
const urban = document.getElementById("town");

const tooshie = document.createElement("p");
tooshie.innerText = "I was created by Science!";
tooshie.classList.add("cities");

urban.appendChild(tooshie);

//in this challenge we will create a div inside a div
//and add elements inside that div
//the elements that we will add via the DOM will be unordered lists

const myFavIceCream = ["Vanilla", "Strawberry", "Rocky-road", "winsty", "greenerierish", "vision"];
const world = document.getElementById("wonder");
const newly = document.createElement("div");
const UL = document.createElement("UL");
const LI = document.createElement("LI");
LI.innerText = myFavIceCream;

UL.appendChild(LI);
newly.appendChild(UL);
world.appendChild(newly);

//using the concept in the above example, we can use a for loop to create an element.

const myFavDonuts = ["chocolate", "Strawberry", "mint", "raspberry", "vanilla", "plain-forest", "plums", "begos", "dummy"];
const sweetness = document.getElementById("donuts");
const newDiv = document.createElement("div");
const newOL = document.createElement("OL");

for (var i = 0; i < myFavDonuts.length; i++) {
    const newLI = document.createElement("LI");
    newLI.innerText = myFavDonuts[i];
    newOL.appendChild(newLI);
}
newDiv.appendChild(newOL);
sweetness.appendChild(newDiv);

//in js, if we can create an element via the DOM, then it means that we can
//also remove elements via the DOM.
//for, example, lets remove some donuts from our code above
for(const prop of newOL.childNodes){
    if(prop.innerText === "dummy"){
        newOL.removeChild(prop);
    }
}