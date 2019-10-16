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

$.getJSON( "js/dag.json", function( json ) {
    var lysta = json.lysta;
    var date = json.data.date.split(".");
    const today = new Date();
    var dni = Math.floor((today - new Date(date[1]+"."+date[0]+"."+date[2])) / (1000*60*60*24));
    document.getElementById("kiedy").innerHTML=json.data.date+" || "+-dni

    for (var i=0; i<lysta.length; i++) {
        var numero = lysta[i].numer;
        var wisio = lysta[i].wisi;
        var ileo = lysta[i].ile;
        var divo = document.getElementById(numero);
        var imgo = divo.childNodes[3];
        
        if(wisio=="tak") {
            imgo.src="svg/wisi.svg"
        }
        else {
            imgo.src="svg/nie_wisi.svg"
        };

        if(wisio=="tak") {
            divo.childNodes[5].innerHTML="Ile wisi: "+ileo;
        }
        else {
            divo.childNodes[5].innerHTML="Ile wisi: nic"
        }
    };
});