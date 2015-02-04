
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
		$.each(playerData.stats, function(i, item) 
			{

			var width = item.HR;
				
			$(".chart").append('<div class ="bar" style="width: '+width+'px">' + item.HR + '<div>');


		});

}


