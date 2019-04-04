document.getElementById("button").addEventListener("mousedown", myFunction);
document.getElementById("button").addEventListener("mouseup", change);

var clicks = 0;

function myFunction() {
    document.getElementById("button").src = "img/button_pressed.png";
    clicks++;
    check();
    console.log(clicks);
};
function change() {
    document.getElementById("button").src = "img/button.png";
};
function check() {
    const textBox = document.getElementById("textBox");
    if(clicks==10) {
        textBox.innerHTML = "";
        let newElement = document.createElement("p");
        newElement.innerHTML = "I co ci to daje ?";
        textBox.appendChild(newElement);
    };
    if(clicks==15) {
        textBox.innerHTML = "";
        let newElement = document.createElement("p");
        newElement.innerHTML = "Wciąż tu jesteś ?";
        textBox.appendChild(newElement);
    };
    if(clicks==20) {
        textBox.innerHTML = "";
        let newElement = document.createElement("p");
        newElement.innerHTML = "Mówiłem ci żeby nie klikać tego przycisku !";
        textBox.appendChild(newElement);
    };
    if(clicks==25) {
        textBox.innerHTML = "";
        let newElement = document.createElement("p");
        newElement.innerHTML = "Przestań, bo będe musiał zrobić coś czego nie chcesz doświadczyć";
        textBox.appendChild(newElement);
    };
    if(clicks==30) {
        textBox.innerHTML = "";
        let newElement = document.createElement("p");
        newElement.innerHTML = "Jesteś pewien ?";
        textBox.appendChild(newElement);
    };
    if(clicks==35) {
        textBox.innerHTML = "";
        let newElement = document.createElement("p");
        newElement.innerHTML = "Ok prosze, jesteś z siebie dumny ?";
        textBox.appendChild(newElement);
        document.getElementById("button").removeEventListener("mousedown", myFunction);
        document.getElementById("button").removeEventListener("mouseup", change);
        document.getElementById("button").src = "img/pyra.png";
        document.getElementById("button").id = "final";
        document.body.style = "background-image: url('pyra.png');";
    };
};