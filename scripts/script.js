let status = true;

document.getElementById("r0c0").onclick = function () {
    alert("You just click and about to change the layout of this element");
    if (status) {
        document.getElementById("r0c0").style.background = 'yellow';
        status=false;
    } 
    else {
        status = true;
        document.getElementById("r0c0").style.background = 'skyblue';
    }
    ;
};

document.getElementById("r0c1").onclick = function () {
    let title= prompt("Hello, you are about to change the content of this element, what is the new title?");
    document.getElementById("r0c1").innerHTML = title;
};

document.getElementById("r0c2").onclick = function () {
   alert(w3);
};

document.getElementById("r0c3").onclick = function () {
   alert(w4);
};

document.getElementById("r0c4").onclick = function () {
   alert(w5);
};

document.getElementById("r1c0").onclick = function () {
   alert(w6);
};

document.getElementById("r1c1").onclick = function () {
   alert(w7);
};

document.getElementById("r1c2").onclick = function () {
   alert(w8);
};

document.getElementById("r1c3").onclick = function () {
   alert(w9);
};

document.getElementById("r1c4").onclick = function () {
   alert(w10);
};


document.getElementById("r2c0").onclick = function () {
   alert(w11);
};

document.getElementById("r2c1").onclick = function () {
   alert(w12);
};

document.getElementById("r2c2").onclick = function () {
   alert(w13);
};

document.getElementById("r2c3").onclick = function () {
   alert(w14);
};
