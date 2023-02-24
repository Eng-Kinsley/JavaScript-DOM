//one thing that need to know is the fact
//alert shows the event on the page, as console.log shows the event on the  console.
/*
document.addEventListener("click", function(){
	alert("clicked!");
})
*/
//or

/*
document.addEventListener("click", function(e){
	alert(e.type);
})
*/

/*
const blooper = document.getElementById("clicky");
blooper.addEventListener("click", function(e){
	alert(e.type);
})
*/

//so we can try to only focus on the button

/*
const luda = document.getElementById("button1");
luda.addEventListener("click", logEvent);
function logEvent(event) {
	alert(event.type);
}
*/

//let us now add another event listener on the button
/*
const added = document.getElementById("button1");
added.addEventListener("click", function(sign){
	alert(sign.type);
});
added.addEventListener("focus", function(twitch){
	console.log(twitch.type);
});
added.addEventListener("focusout", function(sugar){
	console.log(sugar.type);
});
*/

/*
const moosh = document.getElementById("buttonly");
moosh.addEventListener("click", vlok);
function vlok(e){
	console.log(e.type);
}
*/

/*
removing event listeners
*/

/*
const buttonly = document.getElementById("more");
buttonly.addEventListener("click", logEvent);
function logEvent(e){
	buttonly.removeEventListener("click", logEvent);
    console.log(e.type); 
}
*/