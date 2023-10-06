let btn = document.getElementById("btn");
let img = document.querySelectorAll(".container");
let repl = document.getElementsByTagName("img");
let originalSrc = [];

for (let j = 0; j < repl.length; j++) {
    originalSrc.push(repl[j].src);
}

shuffleArray(originalSrc); 
for (let i = 0; i < img.length; i++) {
    img[i].style.backgroundColor = "green";
    img[i].style.color = "blue";
}

timeHide();
clickImg(); 

btn.addEventListener("click", function () {
    shuffleArray(originalSrc);

    for (let j = 0; j < repl.length; j++) {
        repl[j].src = originalSrc[j];
    }
    setTimeout(timeHide, 3000);
});

function timeHide() {
    for (let j = 0; j < repl.length; j++) {
        repl[j].src = "/Cards/image/closed.jpeg";
    }
}

function clickImg() {
    for (let j = 0; j < repl.length; j++) {
        repl[j].addEventListener("click", function () {
            repl[j].src = originalSrc[j];
        });
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
