
var a = Math.floor(Math.random() * 6)+1;
var rimg1  = "images/dice" + a + ".png";

var b = Math.floor(Math.random() * 6)+1;
var rimg2  = "images/dice" + b + ".png";

document.querySelectorAll("img")[0].setAttribute("src" , rimg1 );

document.querySelectorAll("img")[1].setAttribute("src" , rimg2 ); 

if(a>b){
    document.querySelector("h1").innerHTML = "Player 1 Won !";
}else{
    document.querySelector("h1").innerHTML = "Player 2 Won !";
}
