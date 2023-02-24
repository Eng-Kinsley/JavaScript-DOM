//noprotect
//addEventListener
//format of eventlistener
/*
addEventListener("listner to be added e.g "click", function(){
	logic inside fucntion e.g for click listener 
	👇👇👇
	alert("clicked!")
})

OR

addEventListener("listner to be added e.g "click", function(event){
	logic inside function e.g for click listener 
	👇👇👇
	alert(event.type)
})
*/
//challenges for adding event listeners on our documents.
/*
- add an event on our document that listens for clicks when we click anywhere in our document.
- add a click listener to div id = "clicky"
- generate a click event for the button. since its the only button on the document,  we can use queryselector.
- also add focus listener on the button
- on top of that we can add focus out listener on our button
- (use doodle div)we can now create a function below the code so that we can give reference to the event listener code. e.g below
👇👇👇
- const buttonly = document.querySelector("button");
- buttonly.addEventListener("click", logEvent);
- function logEvent(event){
	console.log(event.type);
}
*/

//CHALLENGE PART TWO

/*
(use div info)
-removing listener from button after the event has been fired to avoid the listener from being fired severally. 
for e.g 👇👇👇👇
- const buttonly = document.querySelector("button");
- buttonly.addEventListener("click", logEvent);
- function logEvent(e){
	buttonly.innerText = e.type ...this will take the name of the event being fired...it's optional.
	buttonly.removeEventListener("click", logEvent);
    console.log(e.type); 
}
(use div once)
***To make sure that after removing the event listener, we are firing the event only once 
***we can add timeStamp function
for e.g 👇👇👇👇
-const buttonly = document.querySelector("button");
buttonly.addEventListener("click", logEvent);
function logEvent(e){
	buttonly.innerText = e.timeStamp; ...using a number to can make sure that the event is not fired again. 
	buttonly.removeEventListener("click", logEvent);
	console.log(e.type);
}
*/

//to practice more bout clicks, click the link below👇👇👇
//https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event


//CHALLENGE PART 3 
// (use div propagation)
//let's say we have a node that when you click on it you get some type of a background color
//or border

/*The mousedown event is fired at an Element when 
a pointing device button is pressed while the pointer is inside the element.

* toogle() - The toggle() method of the DOMTokenList interface removes a given token from the list and returns false.
 If token doesn't exist it's added and the function returns true.

 * classList function. The Element.classList is a read-only property that returns 
 a live DOMTokenList collection of the class attributes of the element. 
 This can then be used to manipulate the class list.
 Using classList is a convenient alternative to accessing an element's list of classes
  as a space-delimited string via element.className.
*/

/*
- we're also going to use the .which function on mouse dowd event listener
- this is the reason why 👇👇👇👇

*which event listener represents a number displayed when a certain key is pressed
* to practice this, we use the code below👇

const ... = document.getElementById("...");
blabla.addEventListener("mousedown", switchBackground);
function switchBackground(e){
	console.log(e);
}
*after we run the code above, we can check the number at our console in our document

*/


/*
*first we get our element by id as usual using: const ... = document.getElementById("...");
*we add the event listener. blabla.addEventListener("mousedown", then our listner in this case, switchBackground);
* function switchBackground(e){
	if(e.which === 1 or any other number from which that we want){
	blabla.classList.toogle("maybe the background-color so that we can clearly see some change")
	}
}
*/

//CHALLENGE PART 4
//use (div improved)
//instead of doing what we have done on the above code
//in this code we will add a class, simply because we want it to behave differently👇👇👇
// blabla.classList.add("background");
//how do we remove the color after it has been added
//- we create/ add a focusout event listener(blabla.addEventListener("focusout", switchBackground)), 
//to remove the background color once there is no more focus 
// NB: the moment we have multiple events, we use if statements on our function👇
/* function switchBackground(e){
	if(e.type === "mousedown"){
		blabla.classList.add("background");
	}
	else if(e.type === "focusout"){
	blabla.classList.remove("background");
	}
}
*/

//CHALLENGE PART 5
//use div (listy)
//we'll use mouse event application to highlight elements in a list of this div
//we will use target property
//procedure to do this small project of ours
/*
- obviously we'll begin by gettling our element by Id
- this time we will use the click event listener👇👇👇 to display our event on the h2 header.
- const blabla = document.getElementById("...");
- document.addEventListener("click", switchBackground)
= function switchBackground(e){
	console.log(e) ...optional. it will shows us the event on the console.
	 const hasBeenClicked = blabla.contains(e.target);
	 console.log(hasBeenClicked); ...optional. It will return either true or false when we click to the website	 
	 if(hasBeenClicked) {
	 	blabla.classList.add("background-color")
	 }
	 else {
	blabla.classList.remove("background-color")
	 }
}
*/
//so to be able to change the background color of the objects in the listy div we do this
/*
- we add another listener on our click event on the list of items
//we do this so that we cannot chnage the the background color👆👆 of the whole div
- the other event listener is for adding a different color to the list once the event has been fired.
- const blabla = document.getElementById("...");
- const doosh = blabla.querySelector("UL");

- document.addEventListener("click", switchBackground)
- dosh.addEventListener("click", addGreenBackground)

= function switchBackground(e){
	const hasBeenClicked = blabla.contains(e.target);
	 if(hasBeenClicked) {
	 	blabla.classList.add("background-color")
	 }
	 else {
	blabla.classList.remove("background-color")
	 }
}

- function addGreenBackground(e){
	const targetLI = e.target;
	targetLI.classList.add("green");
}
*/
/*
CHALLENGE PART 6
Use div(backup)
= Effect only on the list items instead of the whole div
- let say we didn't want the background to change because of our new code
- we use propagation funtion
- function addGreenBackground(e){
	e.stopPropagation();
	const targetLI = e.target;
	targetLI.classList.add("green");
}
*/

/*
CHALLENGE PART 7
- Toogle between different elements on the list items
- Use div(blur)
- we can use the code below

const blabla = document.getElementById("...");
const doosh = blabla.querySelector("UL");

document.addEventListener("click", switchBackground);
dosh.addEventListener("click", addGreenBackground);

 function switchBackground(e){
	const hasBeenClicked = blabla.contains(e.target);
	 if(hasBeenClicked) {
	 	blabla.classList.add("background-color")
	 }
	 else {
	blabla.classList.remove("background-color")
	 }
}

 function addGreenBackground(e){
	e.stopPropagation();
	const targetLI = e.target;
	const green = document.querySelector(".green");
	if(green){
	greem.classList.remove("green");
	}
	targetLI.classList.add("green");
}

*/