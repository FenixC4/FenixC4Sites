const dot1 = document.getElementById("dot1");
const dot2 = document.getElementById("dot2");
const dot3 = document.getElementById("dot3");
const dot4 = document.getElementById("dot4");
const dot5 = document.getElementById("dot5");
const testdot = document.getElementById("testdot");

const width = window.screen.width;
const height = window.screen.height;

var pos2 = [height-100,-100-5];
var pos3 = [(height/2)-50,(width/2)-260];
var pos4 = [0,width-412];
var pos5 = [height-100,width-516];
var test = [height/2,(width/2)-600+50+30]

dot2.style.top = pos2[0]+"px";
dot2.style.left = pos2[1]+"px";
dot3.style.top = pos3[0]+"px";
dot3.style.left = pos3[1]+"px";
dot4.style.top = pos4[0]+"px";
dot4.style.left = pos4[1]+"px";
dot5.style.top = pos5[0]+"px";
dot5.style.left = pos5[1]+"px";

testdot.style.top = test[0]+"px";
testdot.style.left = test[1]+"px";