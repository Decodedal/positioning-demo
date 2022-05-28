let circle = document.querySelector(".All")
let c2 = document.querySelector(".c2")
let c3 = document.querySelector(".c3")
let c4 = document.querySelector(".c4")
let c5 = document.querySelector(".c5")
let c6 = document.querySelector(".c6")
let c7 = document.querySelector(".c7")

let i1 = document.querySelector(".i1")
let i2 = document.querySelector(".i2")
let i3 = document.querySelector(".i3")
let i4 = document.querySelector(".i4")
let score = 0; 
let bugs = 0;
let playAgain = document.querySelector("#again");
let scoreNow  = document.querySelector("#score");
let lifes = 5 
let lifeLeft = document.querySelector("#life") ;


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
}

circle.addEventListener("click",function(){
    console.log("hi")
})
const onMouseMove = (e) =>{
    circle.style.left = e.pageX + 'px';
    circle.style.top = e.pageY + 'px';
    c2.style.left = e.pageX + 'px';
    c2.style.top = e.pageY + 'px';
    c3.style.left = e.pageX + 'px';
    c3.style.top = e.pageY + 'px';
    c4.style.left = e.pageX + 'px';
    c4.style.top = e.pageY + 'px';
    c5.style.left = e.pageX + 'px';
    c5.style.top = e.pageY + 'px';
    c6.style.left = e.pageX + 'px';
    c6.style.top = e.pageY + 'px';
    c7.style.left = e.pageX + 'px';
    c7.style.top = e.pageY + 'px';
  }
  document.addEventListener('mousemove', onMouseMove);

  let group = document.querySelector(".All")
  

var btns = document.querySelectorAll('.insect');
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("mouseover", function (event) {
		event.target.style.opacity = "0";
    event.target.style.transform = "rotate(360deg)";
    event.target.style.width = "0";
    document.querySelector("#score").innerHTML =  score += 50;
    document.querySelector("#bugs").innerHTML = bugs +=1;
    reveal();
    // grow();
    console.log(score);
	}, false);
}
var bird = document.querySelectorAll(".bird");
for (var i = 0; i < bird.length; i++) {
	bird[i].addEventListener("mouseover", function (){
    lifeLeft.innerHTML = lifes -= 1;
    if (lifes <= 0){
        document.querySelector(".gameover").style.display = "flex";
        document.querySelector("#highscore").innerHTML = "HighScore: "+ score;
    }    
}
    )
   
}

playAgain.addEventListener("click",function(){
    for (var i = 0; i < btns.length; i++){
        let posA = getRandomInt(10,90);
        let posB = getRandomInt(10,90);
        let birA = getRandomInt(10,90);
        let birB = getRandomInt(10,90);
        btns[i].style.width = "50px";
        btns[i].style.opacity = "1";
        btns[i].style.transform = "rotate(0deg)"
        btns[i].style.top = posA + "%" 
        btns[i].style.left = posB + "%" 
        bird[i].style.top = birA +"%"
        bird[i].style.left = birB + "%"
        console.log(posA , posB)
    }
}
)

function reveal(){
 if(score >= 200){
    c4.style.opacity = "1";
}if(score>= 600){
    c5.style.opacity = "1";
}if(score >= 1000){
    c6.style.opacity = "1";
}if (score >= 2000){
    c7.style.opacity ="1";
}
}

let over = document.querySelector("#over")
over.addEventListener("click",function(){
    // document.querySelector(".gameover").style.display = "none"
    window.location.reload();

})