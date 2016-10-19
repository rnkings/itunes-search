"use strict";

function getTune(userInputTuneName){
	$.ajax({
		url: "https://itunes.apple.com/search?term=/"+userInputTuneName,
		type: "GET",
		dataType: "JSONP"
	}).done(function(data){
		console.log(data);
		console.log(data.results[0].trackName);
		printToPage(data);
	}).fail(function(error){
		console.log("an error occured!");
	});
}



function printToPage(data){
	for(var i = 0; i < data.results.length; i++){
		var result = data.results[i];
		console.log(result.trackName);
		console.log(result);
		var html = "<hr>" + " Tune Name: " + result.trackName + "<br>" + " Artist: " + result.artistName + "<br>" + " Albumn: " + result.collectionName + "<br>" + "<br>"
		html += "<audio controls><source src='" + result.previewUrl + "' type='audio/mpeg'></audio>" + "<br>" + "<br>" + "<img src='" + result.artworkUrl100 + "' height='120' width='120'>";
		document.getElementById("printArea").innerHTML += html; 
	}
}

function getUserInput(){
	//document.getElementByID.value
	return document.getElementById("topSpace").value;
	//return
}

$("#buttonTune").click(function(){
	var userInputTuneName = getUserInput();
	getTune(userInputTuneName);
});
