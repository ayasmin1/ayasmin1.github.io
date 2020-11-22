var LoveLibs = function() {  
    //creating variables for all of the inputs 
    var storyDiv = document.getElementById("story2");  
    var adjective1 = document.getElementById("adjective1").value;  
    var verb1 = document.getElementById("verb1").value;  
    var verb2 = document.getElementById("verb2").value;  
    var propername = document.getElementById("propername").value;  
    var lengthoftime = document.getElementById("lengthoftime").value;  
    var bodypart = document.getElementById("bodypart").value;  
    var explanation = document.getElementById("exclamation").value;  
    var comparison = document.getElementById("comparison").value;  
    var place = document.getElementById("place").value;  
    var adverb = document.getElementById("adverb").value;  
    var noun1 = document.getElementById("noun1").value;  
    var food = document.getElementById("food").value;  
    var pluralanimal = document.getElementById("pluralanimal").value;  
    var noun2 = document.getElementById("noun2").value;  
    var number = document.getElementById("number").value;  
    var verb3 = document.getElementById("verb3").value;  
    var adjective2 = document.getElementById("adjective2").value;  
    var salutation = document.getElementById("salutation").value; 
     // prrocessing all inpurs into the story 
    storyDiv.innerHTML = "It was a " + adjective1 + ", summer afternoon when he " + verb1 + " by me and said, 'Hey.' My eyes " + verb2 +     " as my heartbeat fluttered. In that instant I knew " + propername + " and I would love each other for " + lengthoftime + ". 'Hey,' I said back. Then he looked deep into my " +     bodypart + " and replied, ' " + explanation + " ' , you are the " + comparison + " girl I have ever seen. We sat in the " + place +     " and stared at each other for hours. As his hand " + adverb + " touched my hand, sparks flew. We talked about " + noun1 +     " and other important details of our lives. He loved " + food + " and " + pluralanimal + " almost as much as I loved him. He offered to show me his " +     noun2 + " collection. For " + number + " days we talked and " + verb3 + " . The warm summer days turned " + adjective2 + " and he had to leave. I did not even get to say " +     salutation + " .";
} 
$(document).ready(function() {  
    //putting the entire story together
    $('#lib-button').click(function() {  
    LoveLibs();
    });
    // this will call the overlay and content to open the pop-up box
    $(".open").on("click", function() {
        $(".poverlay, .pcontent").addClass("active");
    });
    // this will reemove the activity status of the open button
    // basically closing the popup
    $(".close, .poverlay").on("click", function() {
        $(".poverlay, .pcontent").removeClass("active");
    });
})


