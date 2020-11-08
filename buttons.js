console.log("js!");

let theButton = document.querySelector("button");
let theTxt = document.querySelector('h2');
let theBody = document.querySelector('body');


function lightSwitch(num)
{
    var pic; // declaring the variable
        if(num == 0) // when value is 0, it'll show the off-switch pictures
        {
            pic="OFF.png";
        }
        else(num == 1) // when value is 1, it'll show the on-switch picture
        {
            pic="ON.png";
            document.body.style.backgroundColor = "yellow";
        }
    document.getElementById('switch').src=pic; // this links the images to the already declared id of SWITCH from my HTML back onto my script code
}