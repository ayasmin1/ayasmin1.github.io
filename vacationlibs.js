var vacationLibs = function() {  
    //creating variables for all of the inputs
    var storyDiv = document.getElementById("story1");  
    var adjective1 = document.getElementById("adjective1").value;  
    var adjective2 = document.getElementById("adjective2").value;  
    var noun1 = document.getElementById("noun1").value;  
    var noun2 = document.getElementById("noun2").value;   
    var pluralnoun1 = document.getElementById("pluralnoun1").value;  
    var game = document.getElementById("game").value;  
    var pluralnoun2 = document.getElementById("pluralnoun2").value;  
    var verbING1 = document.getElementById("verbING1").value;  
    var verbING2 = document.getElementById("verbING2").value;  
    var pluralnoun3 = document.getElementById("pluralnoun3").value;  
    var verbING3 = document.getElementById("verbING3").value;  
    var noun3 = document.getElementById("noun3").value;  
    var plant = document.getElementById("plant").value;  
    var partOfTheBody = document.getElementById("partOfTheBody").value;  
    var place = document.getElementById("place").value;  
    var verbING4 = document.getElementById("verbING4").value;  
    var adjective3 = document.getElementById("adjective3").value;  
    var number = document.getElementById("number").value;  
    var pluralnoun4 = document.getElementById("pluralnoun4").value;  
    // prrocessing all inpurs into the story 
    storyDiv.innerHTML = "<span style='font-size:20px'>" + "A vacation is when you take a trip to some " + adjective1 + " place with your " + adjective2 + "family. Usually you go to some place that is near a/an "   + noun1 + " or up on a/an " + noun2 + ". A good vacation place is one where you can ride " + pluralnoun1 + " or play " + game + " or go hunting for " + pluralnoun2 + ". "   + "I like to spend my time " + verbING1 + " or " + verbING2 + ". When parents go on a vacation, they spend their time eating three " + pluralnoun3 + " a day, and fathers play golf, and mothers sit around "   + verbING3 + ". Last summer, my little brother fell in a/an " + noun3 + " and got poison " + plant + " all over his " + partOfTheBody + ". My family is going to go to (the) " + place + " and I will practice "   + verbING4 + ". Parents need vacations more than kids because parents are always very " + adjective3 + " and because they have to work " + number + " hours every day all year making enough " + pluralnoun4 + " to pay for vacation." + "</span";
} 
$(document).ready(function() {
    //putting the entire story together
    $('#lib-button').click(function() {
        vacationLibs();
    });

    $(".open").on("click", function() {
        // this will call the overlay and content to open the pop-up box
        $(".poverlay, .pcontent").addClass("active");
    });

    $(".close, .poverlay").on("click", function() {
    // this will reemove the activity status of the open button
    // basically closing the popup
        $(".poverlay, .pcontent").removeClass("active");
    });

})