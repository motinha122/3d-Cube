let $ = (w) => document.querySelector(w);
let print = (p) => console.log(p);

//$("#cube").classList.add("rotatingAnimation");

function changeSide(X,Y){
    $("#cube").style.transform = "rotateY("+X+"deg) rotateX("+Y+"deg)";
} 

