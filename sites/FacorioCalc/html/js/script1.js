function myFunction() {
	var items_produced = document.getElementById("items_produced").value;
	var time_taken = document.getElementById("time_taken").value;
	var craft_speed = document.getElementById("craft_speed").value;
	var productivity = document.getElementById("productivity").value;
	var goal = document.getElementById("goal").value;
	var outputITP = (items_produced / time_taken * craft_speed * productivity);
	var outputRatio = goal / outputITP;
	document.getElementById("outputITP").innerHTML=outputITP;
	document.getElementById("outputRatio").innerHTML=Math.ceil(outputRatio);
	document.getElementById("test1").innerHTML=outputRatio;
}

var global_output1 = null;

function myFunction2() {
	var items_needed = document.getElementById("items_needed").value;
	var assembler_number = document.getElementById("assembler_number").value;
	var assembler_time = document.getElementById("assembler_time").value;
	var assembler_speed = document.getElementById("assembler_speed").value;
	var assembler_real_time = assembler_time / assembler_speed;
	var variable1 = items_needed * assembler_number;
	var output = variable1 / assembler_real_time;
	global_output1 = output;
	document.getElementById("outputITP2T").innerHTML=assembler_real_time;
	document.getElementById("outputITP2").innerHTML=output;
	document.getElementById("outputITP2R").innerHTML=Math.ceil(output);
}
function littlescript1() {
	document.getElementById("goal").value = global_output1;
}

function myFunction3() {
	const reactor_number = document.getElementById("reactor_number").value;
	const heat_exchangers = reactor_number * 4;
	const steam_turbines = heat_exchangers * 1.71821305833;
	const power_generated = steam_turbines * 5.8;
	const heat_exchangers2 = document.getElementById("heat_exchagers").value;
	const steam_turbines2 = heat_exchangers2 * 103.0927835 / 60;
	document.getElementById("outputHE3").innerHTML=heat_exchangers;
	document.getElementById("outputST3").innerHTML=steam_turbines;
	document.getElementById("outputSTE3").innerHTML=power_generated;
	document.getElementById("outputST3.5").innerHTML=steam_turbines2;
}

function myFunction05() {
	const selectedSpeed = document.getElementById("assemblerSpeeds").value;
	document.getElementById("craft_speed").value = selectedSpeed;
}

function myFunction052() {
	const selectedSpeed = document.getElementById("assemblerSpeeds2").value;
	document.getElementById("assembler_speed").value = selectedSpeed;
}

function myFunctionNOTE() {
	const input = document.getElementById("noteIn").value;
	let newElement = document.createElement("p");
	newElement.innerHTML = input;
	document.getElementById("notes").appendChild(newElement);
}