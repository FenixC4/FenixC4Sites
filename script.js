﻿var w1n = [];
var sum1 = 0;
var w2n = [];
var sum2 = 0;
var w3n = [];
var sum3 = 0;
var w4n = [];
var sum4 = 0;
var w5n = [];
var sum5 = 0;

function sum(input){
             
	if (toString.call(input) !== "[object Array]")
		return false;
		
		var total =  0;
		for(var i=0;i<input.length;i++) {
			if(isNaN(input[i])){
				continue; }
				total += Number(input[i]); }
				return total; }

function myFunction() {
	const number = document.getElementById("waga1").value;
	w1n.push(number);
	const sun = sum(w1n);
	sum1 = sun;
}

function myFunction1() {	
	const number = document.getElementById("waga2").value;
	w2n.push(number);
	const sun = sum(w2n);
	sum2 = sun;
}

function myFunction2() {
	const number = document.getElementById("waga3").value;
	w3n.push(number);
	const sun = sum(w3n);
	sum3 = sun;
}

function myFunction3() {
	const number = document.getElementById("waga4").value;
	w4n.push(number);
	const sun = sum(w4n);
	sum4 = sun;
}

function myFunction4() {
	const number = document.getElementById("waga5").value;
	w5n.push(number);
	const sun = sum(w5n);
	sum5 = sun;
}

function myFunction5() {
	const srednia = (sum1*1+sum2*2+sum3*3+sum4*4+sum5*5)/(w1n.length*1+w2n.length*2+w3n.length*3+w4n.length*4+w5n.length*5);
	document.getElementById("output").innerHTML = srednia;
}