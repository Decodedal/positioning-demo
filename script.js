let circle = document.querySelector(".cAll")

circle.addEventListener("click",function(){
    console.log("hi")
})
const onMouseMove = (e) =>{
    circle.style.left = e.pageX + 'px';
    circle.style.top = e.pageY + 'px';
  }
  document.addEventListener('mousemove', onMouseMove);