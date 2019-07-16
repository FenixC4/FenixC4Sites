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
    const custom = document.getElementById("custom-input-1").value / document.getElementById("custom-input-2").value;
    const sof = 299792458;
    const output = Math.round((sof/wavelength)/1000000);
    const output2 = (sof/wavelength)/1000000;
    const output3 = Math.round(output2*0.5);
    const output4 = output2*0.5;
    const output5 = Math.round(output2*0.25);
    const output6 = output2*0.25;
    const output7 = Math.round(output2*custom);
    const output8 = output2*custom;
    document.getElementById("W-OUT").innerHTML=output+" m";
    document.getElementById("W-OUT-O").innerHTML=output2+" m";
    document.getElementById("W-OUT-0.5").innerHTML=output3+" m";
    document.getElementById("W-OUT-0.5-O").innerHTML=output4+" m";
    document.getElementById("W-OUT-0.25").innerHTML=output5+" m";
    document.getElementById("W-OUT-0.25-O").innerHTML=output6+" m";
    document.getElementById("W-OUT-C").innerHTML=output7+" m";
    document.getElementById("W-OUT-C-O").innerHTML=output8+" m";
}

function myFunction2() {
    const antennalength = document.getElementById("A-IN").value;
    const custom = document.getElementById("custom-input-1").value / document.getElementById("custom-input-2").value;
    const sof = 299792458;
    const output = Math.round((sof/antennalength)/1000000);
    const output2 = (sof/antennalength)/1000000;
    const output3 = Math.round(output2*0.5);
    const output4 = output2*0.5;
    const output5 = Math.round(output2*0.25);
    const output6 = output2*0.25;
    const output7 = Math.round(output2*custom);
    const output8 = output2*custom;
    document.getElementById("A-OUT").innerHTML=output+" MHz";
    document.getElementById("A-OUT-O").innerHTML=output2+" MHz";
    document.getElementById("A-OUT-0.5").innerHTML=output3+" MHz";
    document.getElementById("A-OUT-0.5-O").innerHTML=output4+" MHz";
    document.getElementById("A-OUT-0.25").innerHTML=output5+" MHz";
    document.getElementById("A-OUT-0.25-O").innerHTML=output6+" MHz";
    document.getElementById("A-OUT-C").innerHTML=output7+" MHz";
    document.getElementById("A-OUT-C-O").innerHTML=output8+" MHz";
}