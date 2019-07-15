document.getElementById("CPL").addEventListener("click", choosePL);
document.getElementById("CEN").addEventListener("click", chooseEN);

function choosePL() {
    document.getElementById("chooser").style.display="none";
    document.getElementById("PL").style.display="block";
    document.getElementById("EN").innerHTML="";
};
function chooseEN() {
    document.getElementById("chooser").style.display="none";
    document.getElementById("EN").style.display="block";
    document.getElementById("PL").innerHTML="";
};

function myFunction() {
    const wavelength = document.getElementById("W-IN").value;
    const sof = 299792458;
    const output = Math.round((sof/wavelength)/1000000);
    const output2 = (sof/wavelength)/1000000;
    document.getElementById("W-OUT").innerHTML=output+" m";
    document.getElementById("W-OUT-O").innerHTML=output2+" m";
}

function myFunction2() {
    const antennalength = document.getElementById("A-IN").value;
    const sof = 299792458;
    const output = Math.round((sof/antennalength)/1000000);
    const output2 = (sof/antennalength)/1000000;
    document.getElementById("A-OUT").innerHTML=output+" MHz";
    document.getElementById("A-OUT-O").innerHTML=output2+" MHz";
}