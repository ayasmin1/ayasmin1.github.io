function lightSwitch_on()
{
    document.getElementById('switch').src='ON.png'
    document.body.style.backgroundColor = "yellow";
    document.getElementById("s2").innerHTML= "As Drake woud say <br> Look, I just flipped the switch (flipped, flipped)"
}

function lightSwitch_off()
{
    document.getElementById('switch').src='OFF.png'
    document.body.style.backgroundColor = "black";
    document.getElementById("s1").innerHTML= "It's dark in here, lets turn on the lights!"
}

