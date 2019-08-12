const body = document.getElementById("body");
const dots = document.getElementsByClassName("dot");
const div = document.getElementById("test_div");
const inputEl = document.getElementById("range");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");

const width = window.screen.width;
const height = window.screen.height;
const winWidth = window.innerWidth;
const winHeight = window.innerHeight;

function myFunction2() {
    if(box1.checked==true) {
        body.style.width=width+"px";
        body.style.height=height+"px";
    }
    else if(box2.checked==true) {
        body.style.width=winWidth+"px";
        body.style.height=winHeight+"px";
    }
    else if(box1.checked==false&box2.checked==false) {
        body.style.width=width+"px";
        body.style.height=height+"px";
    };
};

function sizeer(hun) {
    if(box1.checked==true) {
        dots[1].style.top=(height-hun)+"px";
        dots[2].style.top=(height/2-(hun/2))+"px";
        dots[2].style.left=(width/2-(hun/2))+"px";
        dots[3].style.left=(width-hun)+"px";
        dots[4].style.top=(height-hun)+"px";
        dots[4].style.left=(width-hun)+"px";

        div.style.left=(width/2-div.offsetWidth/2)+"px";
        div.style.top=(height/2-div.offsetHeight/2+150)+"px";
    }
    else if (box2.checked==true) {
        dots[1].style.top=(winHeight-hun)+"px";
        dots[2].style.top=(winHeight/2-(hun/2))+"px";
        dots[2].style.left=(winWidth/2-(hun/2))+"px";
        dots[3].style.left=(winWidth-hun)+"px";
        dots[4].style.top=(winHeight-hun)+"px";
        dots[4].style.left=(winWidth-hun)+"px";

        div.style.left=(winWidth/2-div.offsetWidth/2)+"px";
        div.style.top=(winHeight/2-div.offsetHeight/2+150)+"px";
    }
    else if (box1.checked==false&box2.checked==false) {
        dots[1].style.top=(height-hun)+"px";
        dots[2].style.top=(height/2-(hun/2))+"px";
        dots[2].style.left=(width/2-(hun/2))+"px";
        dots[3].style.left=(width-hun)+"px";
        dots[4].style.top=(height-hun)+"px";
        dots[4].style.left=(width-hun)+"px";

        div.style.left=(width/2-div.offsetWidth/2)+"px";
        div.style.top=(height/2-div.offsetHeight/2+150)+"px";
    };
};

sizeer(100);

function myFunction() {
    var size = inputEl.value;
    Array.from(dots).forEach(element => {
        element.style.width = size+"px";
        element.style.height = size+"px";
        var hun = hun+size;
    });
    sizeer(size);
};

function remove(className) {
    const to_remove = document.getElementsByClassName(className);
    Array.from(to_remove).forEach(element => {
        element.style.display = "none";
    })
}