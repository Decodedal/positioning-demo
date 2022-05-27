let circle = document.querySelector(".All")
let c2 = document.querySelector(".c2")
let c3 = document.querySelector(".c3")
let c4 = document.querySelector(".c4")
let c5 = document.querySelector(".c5")
let c6 = document.querySelector(".c6")
let c7 = document.querySelector(".c7")

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

  let group = document.querySelector("circles")

//   group.addEventListener("click",function(){
//       console.log("hi");
//       if{}
//   })
