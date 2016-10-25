$(document).ready(function(){
	$("#search").on("tap", function(){
		var userSearch = document.getElementById("queryBox")[0].value;
		var keys;
		var searchIndices=[];
		var titleArray = [];
		var titleStr;
		var data;
		$(".queryBox").html('<form id="queryBox"> <input type="text" name="search Wikipedia" placeholder="Search Wikipedia for..." class="center-block animated fadeIn"></form>');
		$("#searchResults").empty();
		data = $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&gsrlimit=15&"+
		"generator=search&origin=*&gsrsearch="+userSearch, function(json){
			data = json["query"]["pages"];
			keys = Object.keys(data);
			keys.forEach(function(key){ //creates array of titles and HTML formatting
			titleArray.push("<a class= 'animated fadeIn' target = '_blank' href = 'https://en.wikipedia.org/?curid="+key+"'>"+data[key]["title"]+"</a>");
			});
		titleStr = titleArray.join('<br><br>');
		$("#searchResults").html("<h3 class = 'text-center animated fadeIn'>"+titleStr+"</h3>");
		});	
	});
	
	$("#search").on("click", function(){
		var userSearch = document.getElementById("queryBox")[0].value;
		var keys;
		var searchIndices=[];
		var titleArray = [];
		var titleStr;
		var data;
		$(".queryBox").html('<form id="queryBox"> <input type="text" name="search Wikipedia" placeholder="Search Wikipedia for..." class="center-block animated fadeIn"></form>');
		$("#searchResults").empty();
		data = $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&gsrlimit=15&"+
		"generator=search&origin=*&gsrsearch="+userSearch, function(json){
			data = json["query"]["pages"];
			keys = Object.keys(data);
			keys.forEach(function(key){ //creates array of titles and HTML formatting
			titleArray.push("<a class= 'animated fadeIn' target = '_blank' href = 'https://en.wikipedia.org/?curid="+key+"'>"+data[key]["title"]+"</a>");
			});
		titleStr = titleArray.join('<br>');
		$("#searchResults").html("<h3 class = 'text-center animated fadeIn'>"+titleStr+"</h3>");
		});	
	});
});