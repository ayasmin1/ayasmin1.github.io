
const theBody = document.querySelector('body');
// console.log(theBody);
// .style is the property that holds all the sub CSS properties!
console.log(theBody.style);
let theText = document.querySelector('h2');

// .textContent holds the human readable text inside the HTML element text
// console.log(theText.textContent)
// pass the HTML element into a variable
let theButton = document.querySelector("#theFirst");
// add an eventListener to the button and trigger a function when it happend
theButton.addEventListener('click', myFunction);

function myFunction(){
 // console.log("click!");
 theBody.style.backgroundColor="yellow"
 theText.textContent = "As Drake woud say <br> Look, I just flipped the switch (flipped, flipped)";
 theText.style.color="black"
}

// ES6 Arrorow notation 
document.addEventListener('keydown', theEvent => {
 if (theEvent.keyCode === 32) {
  console.log("key 32!!");
 }
})