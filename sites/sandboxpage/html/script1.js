function myFunction() {
	const input1 = document.getElementById("FInput").value;
	const input2 = document.getElementById("SInput").value;
	let newElement = document.createElement("div");
	newElement.id="added";
	document.getElementById("MBox").appendChild(newElement);
	let newElement1 = document.createElement("p");
	newElement1.className="sub_added";
	newElement1.innerHTML=input1;
	// newElement1.addEventListener("click", function(){newElement1.style.color="white"; newElement2.style.color="black"});
	newElement.appendChild(newElement1);
	let newElement2 = document.createElement("p");
	newElement2.className="sub_added2";
	newElement2.innerHTML=input2;
	// newElement2.style.color="white";
	// newElement2.addEventListener("click", function(){newElement2.style.color="white"; newElement1.style.color="black"});
	newElement.appendChild(newElement2);
}

function myFunction2() {
	const input1 = document.getElementById("FInput").value;
	const input2 = document.getElementById("SInput").value;
	let newElement = document.createElement("div");
	newElement.id="added";
	document.getElementById("MBox").appendChild(newElement);
	let newElement1 = document.createElement("p");
	newElement1.className="sub_added";
	newElement1.innerHTML=input1;
	newElement.appendChild(newElement1);
	let newElement2 = document.createElement("input");
	newElement2.type="text";
	newElement2.id="TInput";
	newElement2.className="in2";
	newElement2.addEventListener("change", function() {myFunction25(newElement2,newElement,input2)});
	newElement.appendChild(newElement2);
	
	function myFunction25(input3,bg,input2) {
	const input3V = input3.value;
	if(input3V==input2) {
		bg.style.backgroundColor="lime";
		input3.style.backgroundColor="lime";
		console.log("yes");
	}
	else {
		bg.style.backgroundColor="red";
		input3.style.backgroundColor="red";
		console.log("no");
	};
	};
}