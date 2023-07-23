gsap.from("#page2 h1", {
    opacity: 0,
    // rotate: 5,
    y: 100,
    // stagger: 0.5,
    duration:0.2,
    scrollTrigger: {
      trigger: "#page2 h1",
      scroller: "#main",
        // markers:true,
      start: "top 65%",
      end: "top 70%",
      scrub: 4
  
    }
  })
  
  gsap.from("#page3 h1", {
    opacity: 0,
    // rotate: 5,
    y: 100,
    // stagger: 0.5,
    duration:0.2,
    scrollTrigger: {
      trigger: "#page3 h1",
      scroller: "#main",
        // markers:true,
      start: "top 80%",
      end: "top 85%",
      scrub: 4
  
    }
  })

  gsap.from("#page4 h1", {
    opacity: 0,
    // rotate: 5,
    y: 100,
    // stagger: 0.5,
    duration:0.2,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "#main",
        // markers:true,
      start: "top 80%",
      end: "top 85%",
      scrub: 4
  
    }
  })

  gsap.from("#page6 h1", {
    opacity: 0,
    // rotate: 5,
    y: 100,
    // stagger: 0.5,
    duration:0.2,
    scrollTrigger: {
      trigger: "#page6 h1",
      scroller: "#main",
        // markers:true,
      start: "top 80%",
      end: "top 85%",
      scrub: 4
  
    }
  })


  gsap.from("#page8 h1", {
    opacity: 0,
    // rotate: 5,
    y: 100,
    // stagger: 0.5,
    duration:0.2,
    scrollTrigger: {
      trigger: "#page8 h1",
      scroller: "#main",
        // markers:true,
      start: "top 80%",
      end: "top 85%",
      scrub: 4
  
    }
  })










var cursor = document.querySelector("#cursor")
document.addEventListener("mousemove", function (dets) {
  cursor.style.left = `${dets.x + 10}px`
  cursor.style.top = `${dets.y + 10}px`
})


var all = document.querySelectorAll(".box")
all.forEach(function(e){

  e.addEventListener("mouseenter",function(){
    document.querySelector("#cursor").innerHTML = "View"
    document.querySelector("#cursor").style.scale = 3.5
    document.querySelector("#cursor").style.backgroundColor = "#fff"
    document.querySelector("#cursor").style.borderColor = "#fff"
  })
  e.addEventListener("mouseleave",function(){
    document.querySelector("#cursor").innerHTML = ""
    document.querySelector("#cursor").style.scale = 1
    document.querySelector("#cursor").style.backgroundColor = "transparent"
    document.querySelector("#cursor").style.borderColor = "#e1e1e1"
  })

})



  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
