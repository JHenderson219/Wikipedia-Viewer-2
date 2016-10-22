$(document).ready(function(){
	var userSearch= "test";
	/*$.ajax({
		url: "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions"+
		"&rvprop=content&format=jsonfm", 
		type: "GET",
		dataType: "jsonp",
		headers: {
			"API-User-Agent": "Wikipedia-Viewer/0.1 (codepen.io/https://codepen.io/JHenderson219/pen/VKgLpy, hendersonj219@gmail.com)",
			"Access-Control-Allow-Origin":"*",
			"Access-Control-Allow-Origin": "True"
		},
		success: function(json1){
		$("#jsonTest").html(json1)},
		error: alert("Failed to get API Data!")
	});*/
	var jsonData = $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&gsrlimit=15&generator=search"
		+"&origin=*&gsrsearch="+userSearch, function(data){
	});
	console.log(jsonData.length);
	$("#search").on("click", function(){
		$("#jsonTest").html("<h3 class = 'text-center'>"+jsonData+"</h3>");
	});
});