var TKLibs = function() {
    var storyDiv = document.getElementById("story2");
    var verb = document.getElementById("verb").value;
    var noun = document.getElementById("noun").value;
    var adjective = document.getElementById("adjective").value;
    var adverb = document.getElementById("adverb").value;
    storyDiv.innerHTML = "The day I saw the Tiger King " + verb + " was one of the most interesting days of the year. After he did that, the king played chess on his brother's " + noun + " and then combed his " + adjective + " hair with a comb made out of old fish bones. Later that same day, I saw the Tiger King dance " + adverb + "in front of an audience of kangaroos and wombats."
}

$(document).ready(function() {
    $('#lib-button').click(function() {
        TKLibs();
    });

    $(".open").on("click", function() {
        $(".poverlay, .pcontent").addClass("active");
    });

    $(".close, .poverlay").on("click", function() {
        $(".poverlay, .pcontent").removeClass("active");
    });
})