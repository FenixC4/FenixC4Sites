const body = document.getElementById("body");
const dots = document.getElementsByClassName("dot");

const width = window.screen.width;
const height = window.screen.height;

body.style.width=width+"px";
body.style.height=height+"px";

dots[1].style.top=(height-100)+"px";
dots[2].style.top=(height/2-50)+"px";
dots[2].style.left=(width/2-50)+"px";
dots[3].style.left=(width-100)+"px";
dots[4].style.top=(height-100)+"px";
dots[4].style.left=(width-100)+"px";