function myFunction() {
    if (event.key=="Enter") {
        const input = document.getElementById("haksy_input");
        if(input.value=="PYRA") {
            document.location.href="sites/eastereggpage/html/index.html";
        };
        if(input.value=="FACTORIO") {
            document.location.href="sites/FacorioCalc/html/index.html";
        };
        if(input.value=="FISH") {
            document.location.href="sites/sandboxpage/html/index.html";
        };
        if(input.value=="PLAN") {
            document.location.href="pdf/planlekcji.pdf";
        };
    };
};

function myFunction2() {
    const y = document.getElementById("popupx").value;
    const x = +document.getElementById("popupy").value;
    const link = document.getElementById("popup").value;
    if(x==0|y==0) {
        window.open(link,'_blank','height=500,width=500');
    }
    else {
        const string = "height="+x+",width="+y;
        window.open(link,'_blank',string);
    }
};