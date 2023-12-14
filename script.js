

const logoButton = document.querySelector('.logoButton');

fade("rgb(85,0,170)","40%");
var word;

logoButton.addEventListener("mouseover",function(){
    // const rect = logoButton.getBoundingClientRect();
    // const x = rect.left + window.scrollX;
    // const y = rect.top + window.scrollY;

    lines = document.querySelector(".body .lines");
    X_px = x + "px";
    Y_px = y + "px";
    word = "translate(" + X_px + "," + Y_px + ")";

    lines.style.transform = word;
    lines.style.transform = "rotate(10deg)";

});

console.log(word);


function fade(COLOUR, OPACITY) {

    logoButton.style.color = COLOUR;
    logoButton.style.opacity = OPACITY;
}

