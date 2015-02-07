
var playerData;

$(document).ready(function() {
   getData();
});


function getData () {
		$.getJSON("js/andre_ethier_card.json", function(data) {
				playerData = data;
				drawChart();
		});
}

function drawChart() {
		$(".playe-name").html(playerData.name);

	$.each(playerData.stats, function(i, item) {
		var width = item.HR * 10;
		$(".chart").append(
			"<div class='col-md-12 bar-container'>"+
				"<div class='year'>"+item.year+"</div>"+
				"<div class='bar' style='width: "+width+"px'></div>"+
				"<div class='total'>"+item.HR+"</div>"+
			"</div>"
		);
	});

}
