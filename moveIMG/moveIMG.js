function arrowUP() {
    var element = document.getElementById("img1");
    element.style.top = parseFloat(element.style.top) - 20 + "px";
}
function arrowDown() {
    var element = document.getElementById("img1");
    element.style.top = parseFloat(element.style.top) + 20 + "px";
}
function arrowLeft() {
    var element = document.getElementById("img1");
    element.style.left = parseFloat(element.style.left) - 20 + "px";
}
function arrowRight() {
    var element = document.getElementById("img1");
    element.style.left = parseFloat(element.style.left) + 20 + "px";
}


function moveIMG(evt) {
    switch (evt.keyCode) {
        case 37:
            arrowLeft();
            break;
        case 39:
            arrowRight();
            break;
        case 38:
            arrowUP();
            break;
        case 40:
            arrowDown();
            break;
    }

}

function doReady() {
    window.addEventListener("keydown",moveIMG);
}

