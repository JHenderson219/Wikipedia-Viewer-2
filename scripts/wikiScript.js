$(document).ready(function(){
	$.ajax({
		url: "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions"+
		"&rvprop=content&format=jsonfm", 
		type: "GET",
		dataType: "json",
		headers: {
			"Api-User-Agent": "Wikipedia-viewer"
		},
		success: function(json1){
		$("#jsonTest").html(json1)},
		error: alert("Failed to get API Data!")
	});
});