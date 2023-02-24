//noprotect
//preventing default is used to block acces when a person is trying to access something in a website.

//we are preventing the user to access the link
document.addEventListener("click", logo);
function logo(e) {
	console.log(e.type);
}

/*
const happy = document.getElementById("div2");
const looney = happy.querySelector("a");
looney.addEventListener("click", function(event){
	event.preventDefault();
	alert("OOps, not available :(");
});
*/

//prevent the user to right click on the page

document.addEventListener("contextmenu", function(event){
	event.preventDefault();
	alert("This functionality is disabled!");
});


//on our div(myform)
//we are going to be adding information on our list above by submitting information using the submit button
//first we begin by preventing the browser from responding when we hit the submit button
//we do the function above by simply preventing the default

const myForm = documnet.getElementById("myForm");
myform.addEventListener("submit", logable);
function(e) {
	e.preventDefault();
} 

//let's try getting a value after we click the submit button using .value function


