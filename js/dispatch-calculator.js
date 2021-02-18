
calculate_driver.onclick = function () {
	
	var Trailer = document.getElementById('trailer').value;
	var Miles = document.getElementById('miles').value;
	var Fleet = document.getElementById('fleet').value;
	var DispTruck = document.getElementById('trucks').value;



	var Dispatching_AvPerMile;
	var Dispatching_AvPerWeek;
	var Dispatching_AvPerMonth;
	var Dispatching_AvPerYear;


	// DISPATCHING formula
	Dispatching_AvPerMile = Trailer *  (0.88 + (Fleet * 0.02));
	Dispatching_AvPerWeek = Dispatching_AvPerMile * Miles * DispTruck;
	Dispatching_AvPerMonth = Dispatching_AvPerWeek * 4;
	Dispatching_AvPerYear = Dispatching_AvPerWeek * 48;

	document.getElementById("result_box_mile").innerHTML = "$ " + Dispatching_AvPerMile.toFixed(2);
	document.getElementById("result_box_week").innerHTML = "$ " + Math.round(Dispatching_AvPerWeek).toLocaleString();
	document.getElementById("result_box_month").innerHTML = "$ " + Math.round(Dispatching_AvPerMonth).toLocaleString();
	document.getElementById("result_box_year").innerHTML = "$ " + Math.round(Dispatching_AvPerYear).toLocaleString();

	Highcharts.chart('madco-chart', {
	    chart: {
	        type: 'column'
	    },
	    title: {
	        text: 'Lets compare'
	    },
	    subtitle: {
	        text: ''
	    },
	    xAxis: {
	        type: 'category'
	    },
	    yAxis: {
	        title: {
	            text: ''
	        },
	        max : null
	    },
	    legend: {
	        enabled: false
	    },
	    plotOptions: {
	        series: {
	            borderWidth: 0,
	            dataLabels: {
	                enabled: true,
	                format: '$ {point.y:.1f}'
	            }
	        }
	    },

	    tooltip: {
	        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
	        pointFormat:  '<span style="color:{point.color}">{point.name}</span>: <b>$ {point.y:.2f}</b> per year<br/>'
	    },

	    series: [
	        {
	            name: "Average Revenue",
	            colorByPoint: true,
	            data: [
	                {
	                    name: "MadCo",
	                    y: Dispatching_AvPerYear,
	                    color: '#f7911d'
	                },

	                {
	                    name: "National Avarage",
	                    y: Dispatching_AvPerYear - (Dispatching_AvPerYear * 0.19),
	                    color: '#b3abab'
	                }
	            ]
	        }
	    ]
	});
}
