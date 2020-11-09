function lightSwitch_on() // calling this variable from the HTML
{
    document.getElementById('switch').src='ON.png' // get the picture of the on-switch
    document.body.style.backgroundColor = "yellow"; // background color is yellow when button is preessed for light effect
    document.getElementById("s2").innerHTML= "As Drake woud say <br> Look, I just flipped the switch (flipped, flipped)" // sentence that appeears when you press this button
}

function lightSwitch_off() // calling this variable from the HTML
{
    document.getElementById('switch').src='OFF.png' // get the picture of the off-switch
    document.body.style.backgroundColor = "black"; // background color is black when button is preessed for light effect. also default is black
    document.getElementById("s1").innerHTML= "It's dark in here, lets turn on the lights!" // sentence that appeears when you press this button
}

