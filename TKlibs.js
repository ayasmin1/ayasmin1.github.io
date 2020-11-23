var TKLibs = function() {
  //creating variables for all of the inputs 
    var storyDiv = document.getElementById("story2");
    var verb = document.getElementById("verb").value;
    var noun = document.getElementById("noun").value;
    var adjective = document.getElementById("adjective").value;
    var adverb = document.getElementById("adverb").value;
    // prrocessing all inpurs into the story
    //https://irp-cdn.multiscreensite.com/ec2b0ab8/files/uploaded/Mad%20Libs.pdf
    storyDiv.innerHTML = "<span style='font-size:20px', 'text-align:center'>" + "The day I saw the Tiger King " + verb + " was one of the most interesting days of the year. After he did that, the king played chess on his brother's " + noun + " and then combed his " + adjective + " hair with a comb made out of old fish bones. Later that same day, I saw the Tiger King dance " + adverb + "in front of an audience of kangaroos and wombats." + "</span>";
}

$(document).ready(function() {
  //putting the entire story together
    $('#lib-button').click(function() {
        TKLibs();
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