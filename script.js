$("#search").click(function(){

	if ($("#city").val()!=""){

		$.get("scraper.php?city="+$("#city").val(), function (data){

		alert(data);

		});

	} else {

		alert("Please enter a city");

	}
});