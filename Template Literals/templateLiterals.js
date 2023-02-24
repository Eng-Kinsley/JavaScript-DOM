 //noprotect
 //template literals
 /*
 - string literals allowing embedded expressions
 - makes it easier to create multiline strings and 
 allows string interpolation
 - enclosed in back=ticks (` `)
 - back-ticks (` `)are used instead of single quotes (' ')
 or double quotes (" ")
 - can maintain placeholders
 */
//in the normal days this would happen👇👇👇

var firstName = "Kinsley";
var secondName = "Kaimenyi";
var myAge = "20";

console.log("Hello " + ", " + firstName + " "+ secondName + " " + "here " + ", " + "I " + "am " +  myAge + " years old");

//let's use a different way to, the ES6 way
/*
- First we begin by creating a const with the list of things
- then we get an element by id where we will place our list
- and the content in the list in the id using .innerHTML function 
*/

const myOtherNewList =
    `<ul>
        <li>I am es6 number 1!</li>
        <li>I am item 2</li>
        <li>I am item 3</li>
        <li>I am #4</li>
    </ul>`;
const myDiv = document.getElementById("myDiv");
myDiv.innerHTML = myOtherNewList;

const newParagraph = `Hello guys,  welcome to the es6 world. It's an amazing world, please don't be left out`;
const newText = document.getElementById("newParagraph");
newText.innerHTML = newParagraph;
