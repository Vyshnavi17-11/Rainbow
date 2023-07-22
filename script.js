const button = document.querySelector("button");
const body = document.querySelector("body");
const colors =["violet","indigo","blue","green","yellow","orange","red"];
body.style.backgroundColor="black";
document.addEventListener("click",function(){
    const colorindex= parseInt(Math.random()*colors.length);
    body.style.backgroundColor=colors[colorindex];


})