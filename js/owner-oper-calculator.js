
calculate_driver.onclick = function () {
	
	var Trailer = document.getElementById('trailer').value;
	var Rookie = document.getElementById('rookie').value;
	var Viol = document.getElementById('violations').value;
	var HeavyHoul = document.getElementById('heavyhoul').value;
	var Miles = document.getElementById('miles').value;

	var Operator_AvPerMile;
	var Operator_AvPerWeek;
	var Operator_AvPerMonth;
	var Operator_AvPerYear;

	// OWN OPERATOR formula
	Operator_AvPerMile = Trailer *  (0.8 - (Viol * 0.02) - (Rookie * 0.02) + (HeavyHoul * 0.02));
	Operator_AvPerWeek = Operator_AvPerMile * Miles;
	Operator_AvPerMonth = 2000 + 1500 + (4 * Operator_AvPerWeek);
	Operator_AvPerYear = Operator_AvPerWeek * 48;

	document.getElementById("result_box_mile").innerHTML = "$ " + Operator_AvPerMile.toFixed(2);
	document.getElementById("result_box_week").innerHTML = "$ " + Math.round(Operator_AvPerWeek).toLocaleString();
	document.getElementById("result_box_month").innerHTML = "$ " + Math.round(Operator_AvPerMonth).toLocaleString();
	document.getElementById("result_box_year").innerHTML = "$ " + Math.round(Operator_AvPerYear).toLocaleString();


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
	                    y: Operator_AvPerYear,
	                    color: '#f7911d'
	                },

	                {
	                    name: "National Avarage",
	                    y: Operator_AvPerYear - (Operator_AvPerYear * 0.19),
	                    color: '#b3abab'
	                }
	            ]
	        }
	    ]
	});
}


