var pole = [];

function myFunction() {
    if (event.key=="Enter") {
        const input = document.getElementById("input").value;
        let newElement = document.createElement("p");
        newElement.id = input;
        newElement.className = "added";
        newElement.innerHTML = input;
        document.getElementById("pole").appendChild(newElement);
        pole.push(input);
    }
};

function myFunction2() {
    const randomizer = Math.floor((Math.random() * pole.length));
    console.log(randomizer);
    console.log(pole.length);
    var elements = document.getElementsByClassName("added");
    for(var i=0; i<elements.length;i++) {
        elements[i].style = "background-color:";
    };
    for(var i=0; i<pole.length;i++) {
        if(i==randomizer) {
            document.getElementById(pole[i]).style = "background-color: green;";
        };
    };
}