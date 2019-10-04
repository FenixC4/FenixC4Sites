const overlay = document.getElementById("overlay");
const passwordinput = document.getElementById("passwordinput");

function passwordcheck() {
    if(event.key=="Enter") {
        if(passwordinput.value=="syfą") {
            overlay.style.display="none";
        }
        else {
            passwordinput.value=""
        }
    }
}

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