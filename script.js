gsap.from("#down",{
    y: -100,
    x:-50,
    rotation:-30,
    opacity:0,
    duration:1,
})
gsap.from("#up",{
    x:60,
    y:95,
    rotation:-30,

    opacity:0,
    duration:1,
})
var tl = gsap.timeline({
    
})
tl
.from("#page3 h2",{
    
    // strokeDashoffset:0,
    y:40,
    opacity:0,
    duration:1,
    delay: 3,
    
    
})
.from("#page3 h1",{
    
    // strokeDashoffset:0,
    y:40,
    opacity:0,

    duration:1,
    // delay: 5,
    
    
})
.to("#curve",{  
    // scrollTrigger:{
    //     trigger: "#page3 h2",
    //     scrub:1,
    //     start: "top top",
    //     scroller: ".full",
    //     end: "bottom 80%",
    //     markers: true,
    // },
    strokeDashoffset:0,
    duration:.5,
    // delay: 5,
    
    
})


// var over =0
// var l = document.querySelectorAll(".l")
// document.querySelector(".menu").addEventListener("mouseover",function(){
//     if(over===0){
//         for (var index = 0; index < l.length; index++) {
//             l[index].style.transform="rotate(180)"
//         }
//         over =1
//     }
//     else{
//         l.style.transform="rotate(0)"
//         over =0
//     }
// })



var flag = 0
var menudiv = document.querySelector("#menudiv")
var l2 = document.querySelector("#l2")
var l1 = document.querySelector("#l1")
document.querySelector(".menu").addEventListener("click",function(){
    if(flag===0){
        document.querySelector(".l").style.position="absolute"
       l2.style.transform="rotate(135deg)"
        l1.style.transform="rotate(-135deg)"
        

        menudiv.style.display="block"
        menudiv.style.opacity="1"

        
        flag=1
    }
    else{
        document.querySelector(".l").style.position="inherit"
       l2.style.transform="rotate(0deg)"
        l1.style.transform="rotate(0deg)"
        menudiv.style.opacity="0"

        menudiv.style.display="none"

        
        flag=0;
    }



})





var h1 = document.querySelectorAll(".h1");
document.querySelector(".illustrations").addEventListener("mouseover", function(dets){
    var index;
    // console.log(dets.target.className)
    
    if(dets.target.className === "a"){
        for (index = 0; index < h1.length; ++index) {
            h1[index].style.fontSize = "180px";}
        // document.querySelector(".h1").style.fontSize ="180px"
    }
    else{
        for (index = 0; index < h1.length; ++index) {
            h1[index].style.fontSize = "150px";}
        // document.querySelector(".h1").style.fontSize ="150px"
    }
})

$(document).ready(function() {
    $(".letters").lettering();
    });
  var letter = document.querySelectorAll(".letter");

  
  document.querySelector("#ek").addEventListener("mouseover", function(dets){
      var span =document.querySelectorAll("#ek span");
      var ek =document.querySelectorAll("#ek span");

      // console.log(dets.target.className)
      
      for (let index = 0; index < ek.length; index++) {
        
        

        span[index].style.transform="rotate(20deg)";
        span[index].style.transitionDelay = `${index*150}ms`
          
      }
    
})
document.querySelector("#ek").addEventListener("mouseleave", function(dets){
  var span =document.querySelectorAll("#ek span");
  var ek =document.querySelectorAll("#ek span");

  // console.log(dets.target.className)
  
  for (let index = 0; index < ek.length; index++) {
   
    span[index].style.color="black";

    span[index].style.transform="rotate(0deg)";
      
  }

})

document.querySelector("#do").addEventListener("mouseover", function(dets){
    var span =document.querySelectorAll("#do span");
    var doo =document.querySelectorAll("#do span");

    // console.log(dets.target.className)
    
    for (let index = 0; index < doo.length; index++) {
     
      span[index].style.transitionDelay = `${index*150}ms`

      span[index].style.transform="rotate(20deg)";
        
    }
  
})

document.querySelector("#do").addEventListener("mouseleave", function(dets){
    var span =document.querySelectorAll("#do span");
    var doo =document.querySelectorAll("#do span");

    // console.log(dets.target.className)
    
    for (let index = 0; index < doo.length; index++) {
     
      span[index].style.transitionDelay = `${index*150}ms`
      span[index].style.transform="rotate(0deg)";
        
    }
  
})
document.querySelector("#teen").addEventListener("mouseover", function(dets){
    var span =document.querySelectorAll("#teen span");
    var teen =document.querySelectorAll("#teen span");
    
    // console.log(dets.target.className)
    
    for (let index = 0; index < teen.length; index++) {
        
      span[index].style.transitionDelay = `${index*150}ms`
        
        span[index].style.transform="rotate(20deg)";
        
    }
    
})
document.querySelector("#teen").addEventListener("mouseleave", function(dets){
  var span =document.querySelectorAll("#teen span");
  var teen =document.querySelectorAll("#teen span");
  
  // console.log(dets.target.className)
  
  for (let index = 0; index < teen.length; index++) {
      
    span[index].style.transitionDelay = `${index*150}ms`
      
      span[index].style.transform="rotate(0deg)";
      
  }
  
})
document.querySelector("#chaar").addEventListener("mouseover", function(dets){
   
    
    var span =document.querySelectorAll("#chaar span");
    var chaar =document.querySelectorAll("#chaar span");

    // console.log(dets.target.className)
    
    for (let index = 0; index < chaar.length; index++) {
     
      span[index].style.transitionDelay = `${index*150}ms`

      span[index].style.transform="rotate(20deg)";
        
    }
  
})
document.querySelector("#chaar").addEventListener("mouseleave", function(dets){
   
    
  var span =document.querySelectorAll("#chaar span");
  var chaar =document.querySelectorAll("#chaar span");

  // console.log(dets.target.className)
  
  for (let index = 0; index < chaar.length; index++) {
   
    
    span[index].style.transitionDelay = `${index*150}ms`
    span[index].style.transform="rotate(0deg)";
      
  }

})



const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});
