const body = document.getElementById("body");
const dots = document.getElementsByClassName("dot");
const inputEl = document.getElementById("to_remove");
const buttony = document.getElementById("to_remove_2");

const width = window.screen.width;
const height = window.screen.height;

body.style.width=width+"px";
body.style.height=height+"px";

function sizeer(hun) {
    dots[1].style.top=(height-hun)+"px";
    dots[2].style.top=(height/2-(hun/2))+"px";
    dots[2].style.left=(width/2-(hun/2))+"px";
    dots[3].style.left=(width-hun)+"px";
    dots[4].style.top=(height-hun)+"px";
    dots[4].style.left=(width-hun)+"px";
};

sizeer(100);

inputEl.style.top=(height/2-25+100)+"px";
inputEl.style.left=(width/2-250/2)+"px";
buttony.style.top=(height/2-25+250)+"px";
buttony.style.left=(width/2-250/2)+"px";

function myFunction() {
    var size = inputEl.value;
    Array.from(dots).forEach(element => {
        element.style.width = size+"px";
        element.style.height = size+"px";
        var hun = hun+size;
    });
    sizeer(size);
};