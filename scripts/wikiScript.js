$(document).ready(function(){
	var userSearch = "programming%20language";
	var keys;
	var searchIndices=[];
	var titleArray = [];
	var data = $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&gsrlimit=15&"+
		"generator=search&origin=*&gsrsearch="+userSearch, function(json){
		data = json["query"]["pages"];
		keys = Object.keys(data);
		console.log(keys); //keys is an array of the user's search keys
		keys.forEach(function(key){
			titleArray.push(data[key]["title"]);
		});
		console.log(titleArray);
	});
	
	$("#search").on("click", function(){
		var titleStr = titleArray.join('<br>');
		console.log(titleStr);
		$("#jsonTest").html("<p class = 'text-center'>"+titleStr+"</p>");

	});
});