var timer = 60;
var score = 0;



function countScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    var rn1 =  Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = rn1;
}

function makeBubble(){
    var clutter = "";

    for (var i = 1; i <= 168; i++){
        var rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter; 
}

function runTimer(){
    var timer2 = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timer2);
        }
    },1000);
}


document.querySelector("#pbtm")
.addEventListener("click", function(dets) {
    dets.target.textContent
})


runTimer();
makeBubble();
getNewHit();
// countScore();