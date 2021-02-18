
calculate_driver.onclick = function () {
	
	var Trailer = document.getElementById('trailer').value;
	var Rookie = document.getElementById('rookie').value;
	var Viol = document.getElementById('violations').value;
	var HeavyHoul = document.getElementById('heavyhoul').value;
	var Miles = document.getElementById('miles').value;

	var Driver_AvPerMile;
	var Driver_AvPerWeek;
	var Driver_AvPerMonth;
	var Driver_AvPerYear;

	var Operator_AvPerMile;
	var Operator_AvPerWeek;
	var Operator_AvPerMonth;
	var Operator_AvPerYear;


	// DRIVER formula
	Driver_AvPerMile = Trailer *  (0.3 - (Viol * 0.02) - (Rookie * 0.02) + (HeavyHoul * 0.02));
	Driver_AvPerWeek = Driver_AvPerMile * Miles;
	Driver_AvPerMonth = 2000 + 1500 + (4 * Driver_AvPerWeek);
	Driver_AvPerYear = Driver_AvPerWeek * 48;
	document.getElementById("result_box_mile").innerHTML = "$ " + Driver_AvPerMile.toFixed(2);
	document.getElementById("result_box_week").innerHTML = "$ " + Math.round(Driver_AvPerWeek).toLocaleString();
	document.getElementById("result_box_month").innerHTML = "$ " + Math.round(Driver_AvPerMonth).toLocaleString();
	document.getElementById("result_box_year").innerHTML = "$ " + Math.round(Driver_AvPerYear).toLocaleString();

	// OWN OPERATOR formula
	Operator_AvPerMile = Trailer *  (0.8 - (Viol * 0.02) - (Rookie * 0.02) + (HeavyHoul * 0.02));
	Operator_AvPerWeek = Operator_AvPerMile * Miles;
	Operator_AvPerMonth = 2000 + 1500 + (4 * Operator_AvPerWeek);
	Operator_AvPerYear = Operator_AvPerWeek * 48;
	document.getElementById("result_box_mile").innerHTML = "$ " + Operator_AvPerMile.toFixed(2);
	document.getElementById("result_box_week").innerHTML = "$ " + Math.round(Operator_AvPerWeek).toLocaleString();
	document.getElementById("result_box_month").innerHTML = "$ " + Math.round(Operator_AvPerMonth).toLocaleString();
	document.getElementById("result_box_year").innerHTML = "$ " + Math.round(Operator_AvPerYear).toLocaleString();

}

/*
function number_to(id,from,to,duration) {
var element = document.getElementById(id);
var start = new Date().getTime();
setTimeout(function() {
var now = (new Date().getTime()) - start;
var progress = now / duration;
var result = Math.floor((to - from) * progress + from);
element.innerHTML = progress < 1 ? result : to;
if (progress < 1) setTimeout(arguments.callee, 10);
}, 10);}

//вызов функции
$(document).ready(function() {
number_to("result_box_mile",100, Driver_AvPerMile ,2000);
number_to("result_box_week",100, 180 ,2000);
number_to("result_box_month",100,17000,2000);
number_to("result_box_year",100,17000,2000);
});
*/
