$("#search").click(function(){

	if ($("#city").val()!=""){

		$.get("scraper.php?city="+$("#city").val(), function (data){
			$("#weather_alert").css("display", "block");
			$("#weather_alert").html(data);

		});

	} else {

		alert("Please enter a city");

	}
});