function myFunction() {
    if (event.key=="Enter") {
        const input = document.getElementById("haksy_input");
        if(input.value=="PYRA") {
            document.location.href="sites/eastereggpage/html/index.html";
        };
        if(input.value=="FACTORIO") {
            document.location.href="sites/FacorioCalc/html/index.html";
        };
    };
};