const SQUARE_COUNT = 30;
const SPEED = 2;
const TIMER_SPEED = 100;
const firstSquare = document.querySelector("#square");
firstSquare.style.left = "225px"; //width/2 - boxwidth/2
firstSquare.style.top = "175px";

firstSquare.addEventListener("click", ()=>{
    alert("Click");
});

let box = document.querySelector("#box");
for(let i = 0; i<SQUARE_COUNT; i++){
    let square = document.createElement("img");
    square.src="laughing_man.jpg";
    square.alt="Catch the laughing man";
    square.className = "square";
    square.style.left = "225px";
    square.style.top = "175px";
    box.appendChild(square);
}

Array.from(box.children).forEach(
    (element) =>{
        let dx = SPEED * (Math.random()*2-1);
        let dy = SPEED * (Math.random()*2-1)
        let x = parseInt(element.style.left);
        let y = parseInt(element.style.top);
        setInterval(()=>{
            x = x+dx;
            y = y+dy;
            element.style.left = x+"px";
            element.style.top = y+"px";
        }, TIMER_SPEED);
    }
);