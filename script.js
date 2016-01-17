$("#search").click(function(event){

	event.preventDefault();

	if ($("#city").val()!=""){

		$.get("scraper.php?city="+$("#city").val(), function (data){

			if (data==""){

				$("#weather_invalid").fadeIn();

			} else {

				$("#weather_alert").html(data).fadeIn();

			}

		});

	} else {

		alert("Please enter a city");

	}
});