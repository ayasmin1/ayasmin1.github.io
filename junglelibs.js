var TKLibs = function() { 
	var storyDiv = document.getElementById("story1"); 
	var verb = document.getElementById("verb").value; 
	var noun = document.getElementById("noun").value;
	var adjective = document.getElementById("adjective").value; 
	var adverb = document.getElementById("adverb").value;  
	storyDiv.innerHTML = "The day I saw the Tiger King " + verb + " was one of the most interesting days of the year. After he did that, the king played chess on his brother's " + noun + " and then combed his "
	+ noun1 + " or up on a/an " + noun2 + ". A good vacation place is one where you can ride " + pluralnoun1 + " or play " + game + " or go hunting for " + pluralnoun2 + ". "
    + adjective + " hair with a comb made out of old fish bones. Later that same day, I saw the Tiger King dance " + adverb + " in front of an audience of kangaroos and wombats.";
}
 
$(document).ready(function(){
    $('#lib-button').click(function(){
        TKLibs();
    });
})