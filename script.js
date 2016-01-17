$("#search").click(function(){
	$.get("scraper.php?city=London", function (data){
		alert(data);
	});
});