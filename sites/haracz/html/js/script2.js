function createOverlay() {
    let newElement = document.createElement("div");
    newElement.id = "overlay";
    document.body.appendChild(newElement);
    let newElement2 = document.createElement("p");
    newElement2.innerHTML = "Wprowadź hasło:";
    newElement.appendChild(newElement2);
    let newElement3 = document.createElement("input");
    newElement3.type = "password";
    newElement3.id = "passwordinput";
    newElement3.onkeydown = function(){if(event.key=='Enter') {passwordcheck()}};
    newElement.appendChild(newElement3);
}

function passwordcheck() {
    const passwordinput = document.getElementById("passwordinput");
    const overlay = document.getElementById("overlay");
    if(event.key=="Enter") {
        if(passwordinput.value=="sasą") {
            overlay.style.display="none";
        }
        else {
            passwordinput.value=""
        }
    }
}

function checkforoverlay() {
    if(document.getElementById("overlay")==null) {
        createOverlay();
        console.log("created")
    };
};

setInterval(checkforoverlay,1000)

$.getJSON("js/dag2.json",
    function (json) {
        const lysta = json.lysta;
        const today = new Date();
        for(var i=0; i<lysta.length; i++) {
            var numer = lysta[i].numer;
            var bn = lysta[i].bn;
            var b1 = lysta[i].b1;
            var date1 = lysta[i].date1.split(".");
            var b2 = lysta[i].b2;
            var date2 = lysta[i].date2.split(".");
            var b3 = lysta[i].b3;
            var date3 = lysta[i].date3.split(".");
            const div = document.getElementById(numer);
            div.childNodes[3].innerHTML="Ilość książek: "+bn+"/3";
            var dni1 = Math.floor((today - new Date(date1[1]+"."+date1[0]+"."+date1[2])) / (1000*60*60*24));
            var dni2 = Math.floor((today - new Date(date2[1]+"."+date2[0]+"."+date2[2])) / (1000*60*60*24));
            var dni3 = Math.floor((today - new Date(date3[1]+"."+date3[0]+"."+date3[2])) / (1000*60*60*24));
            div.childNodes[5].innerHTML="'"+b1+"'"+" || "+dni1+" dni";
            div.childNodes[7].innerHTML="'"+b2+"'"+" || "+dni2+" dni";
            div.childNodes[9].innerHTML="'"+b3+"'"+" || "+dni3+" dni";
            if(isNaN(dni1)) {
                div.childNodes[5].innerHTML=""
            };
            if(isNaN(dni2)) {
                div.childNodes[7].innerHTML=""
            };
            if(isNaN(dni3)) {
                div.childNodes[9].innerHTML=""
            };
        }
    }
);