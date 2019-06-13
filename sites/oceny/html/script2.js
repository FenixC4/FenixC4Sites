var w1n = [];
var sum1 = 0;
var w2n = [];
var sum2 = 0;
var w3n = [];
var sum3 = 0;
var w4n = [];
var sum4 = 0;
var w5n = [];
var sum5 = 0;

document.getElementById("add1").addEventListener("click", function() {myFunction("1")});
document.getElementById("add1+").addEventListener("click", function() {myFunction("1+")});
document.getElementById("add2-").addEventListener("click", function() {myFunction("2-")});
document.getElementById("add2").addEventListener("click", function() {myFunction("2")});
document.getElementById("add2+").addEventListener("click", function() {myFunction("2+")});
document.getElementById("add3-").addEventListener("click", function() {myFunction("3-")});
document.getElementById("add3").addEventListener("click", function() {myFunction("3")});
document.getElementById("add3+").addEventListener("click", function() {myFunction("3+")});
document.getElementById("add4-").addEventListener("click", function() {myFunction("4-")});
document.getElementById("add4").addEventListener("click", function() {myFunction("4")});
document.getElementById("add4+").addEventListener("click", function() {myFunction("4+")});
document.getElementById("add5-").addEventListener("click", function() {myFunction("5-")});
document.getElementById("add5").addEventListener("click", function() {myFunction("5")});
document.getElementById("add5+").addEventListener("click", function() {myFunction("5+")});
document.getElementById("add6-").addEventListener("click", function() {myFunction("6-")});
document.getElementById("add6").addEventListener("click", function() {myFunction("6")});
document.getElementById("submit").addEventListener("click", myFunction5);

function sum(input){
             
	// if (toString.call(input) !== "[object Array]")
	// return false;
		
		var total =  0;
		for(var i=0;i<input.length;i++) {
			if(isNaN(input[i])){
				continue; }
				total += Number(input[i]); }
				return total; }

function myFunction(num) {
    var number;
    if(num=="1") {
        var number = 1;
    }
    else if(num=="1+") {
        var number= 1.5;
    }
    else if(num=="2-") {
        var number= 1.75;
    }
    else if(num=="2") {
        var number= 2;
    }
    else if(num=="2+") {
        var number= 2.5;
    }
    else if(num=="3-") {
        var number= 2.75;
    }
    else if(num=="3") {
        var number= 3;
    }
    else if(num=="3+") {
        var number= 3.5;
    }
    else if(num=="4-") {
        var number= 3.75;
    }
    else if(num=="4") {
        var number= 4;
    }
    else if(num=="4+") {
        var number= 4.5;
    }
    else if(num=="5-") {
        var number= 4.75;
    }
    else if(num=="5") {
        var number= 5;
    }
    else if(num=="5+") {
        var number= 5.5;
    }
    else if(num=="6-") {
        var number= 5.75;
    }
    else if(num=="6") {
        var number= 6;
    };
    const waga = document.getElementById("waga").value;
    if(waga==1) {
        w1n.push(number);
        const sun = sum(w1n);
        sum1 = sun;
        document.getElementById("i1").innerHTML="["+w1n+"]";
    }
    else if(waga==2) {
        w2n.push(number);
        const sun = sum(w2n);
        sum2 = sun;
        document.getElementById("i2").innerHTML="["+w2n+"]";
    }
    else if(waga==3) {
        w3n.push(number);
        const sun = sum(w3n);
        sum3 = sun;
        document.getElementById("i3").innerHTML="["+w3n+"]";
    }
    else if(waga==4) {
        w4n.push(number);
        const sun = sum(w4n);
        sum4 = sun;
        document.getElementById("i4").innerHTML="["+w4n+"]";
    }
    else if(waga==5) {
        w5n.push(number);
        const sun = sum(w5n);
        sum5 = sun;
        document.getElementById("i5").innerHTML="["+w5n+"]";
    };
}

function myFunction5() {
	const srednia = (sum1*1+sum2*2+sum3*3+sum4*4+sum5*5)/(w1n.length*1+w2n.length*2+w3n.length*3+w4n.length*4+w5n.length*5);
	document.getElementById("output").innerHTML = srednia;
	document.getElementById("output2").innerHTML = Math.round(srednia*100)/100;
}