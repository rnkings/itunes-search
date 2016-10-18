
// 
// GET TUNE
// 


// $('document').ready(function(){
// 	var tuneName = "Upside Down";   
	//.value like most wanted for get info?

var tuneNameInput = $('#buttonTune').val();  //is this even right?
$(selector).val(function(index,currentvalue))
window.print();


function getTune(userInputTuneName){
	$.ajax({
		url: "https://itunes.apple.com/search?term=/"+userInputTuneName,
		type: "GET",
		dataType: "JSONP"
	}).done(function(data){
		console.log(data);
	}).fail(function(error){
		console.log("an error occured!");
	});
}


$("#buttonTune").click(function(){
	getTune(userInputTuneName);
});


