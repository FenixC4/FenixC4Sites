document.getElementById("button").addEventListener("mousedown", myFunction);
document.getElementById("button").addEventListener("mouseup", change);

function myFunction() {
    document.getElementById("button").src = "img/button_pressed.png";
};
function change() {
    document.getElementById("button").src = "img/button.png";
    document.location.href = "sites/eastereggpage/html/index.html";
};