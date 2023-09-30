let img = document.querySelectorAll(".container");
let repl = document.getElementsByTagName("img");
for (let i = 0; i < img.length; i++) {
    img[i].style.backgroundColor="green";
    img[i].style.color="blue";
}
setTimeout(timeHide,3000);
function timeHide(){
for (let j = 0;j < repl.length; j++) { 
    repl[j].src="/image/closed.jpeg";  
}
}    
            
    