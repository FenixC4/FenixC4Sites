function myFunction() {
    const V = document.getElementById("V").value;
    const RPM = document.getElementById("RPM").value;
    const D = document.getElementById("D").value;
    const PI = Math.PI;
    const pow = Math.pow(10, -5);
    const output = RPM/((V*(1/60))/(PI*(D*2.54*pow)));

    document.getElementById("output").innerHTML = output;
};