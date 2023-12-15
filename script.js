

const logoButton = document.querySelector('.logoButton');

fade("#092635","60%");

const SHAPE_TO_MOVE = document.querySelector('.body .circleSpin');
const rect = logoButton.getBoundingClientRect();
const x = rect.left;
const y = rect.top;

z = "translate(" + x + "px" +","+ y +"px)";

SHAPE_TO_MOVE.style.left = x;
SHAPE_TO_MOVE.style.top = y;


logoButton.addEventListener("mouseover",function(){

    
    
    SHAPE_TO_MOVE.style.animation = "4s ease-in-out 0s infinite fade, 5s linear infinite lineAnimate";

    logoButton.style.animation = "2s ease-in 0s infinite reverse forwards pulse";
    
    
});

logoButton.addEventListener("mouseleave",function() {

    SHAPE_TO_MOVE.style.removeProperty("animation");
    logoButton.style.removeProperty("animation");
});


// const navigation = document.querySelector(".container");
// const button = document.querySelector(".buttons");
// button.addEventListener("onclick",function(){
    
//     const navigationHeight = navigation.offsetHeight;
//     document.documentElement.style.setProperty(
//         "--scroll-padding",
//          navigationHeight + "px"
//     )
// });



function fade(COLOUR, OPACITY) {

    logoButton.style.color = COLOUR;
    logoButton.style.opacity = OPACITY;
}
function BlendIn() {
    container = document.querySelector('.container');
    container.style.animation = "3s ease-in 0s forwards altFade";

}
