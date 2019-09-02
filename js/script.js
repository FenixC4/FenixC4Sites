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
    const link = document.getElementById("popup").value;
    window.open(link,'_blank','height=500,width=500');
};