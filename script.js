

const logoButton = document.querySelector('.logoButton');

a=255;
b=255;
c=255;
while(a>65 && b>0 && c>175) {
    
    a-=3;
    b-=5;
    c-=1;



    colour = "("+ a +"," + b + "," + c + ")";
    text="rgb"+colour;
    logoButton.style.color = text;
    // console.log(text);


}

