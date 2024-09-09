var crsr = document.querySelector("#cursor")
var crsrBlr = document.querySelector("#cursorBlur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x - 10 + "px"
    crsr.style.top = dets.y - 10 + "px"
    crsrBlr.style.left = dets.x - 100 + "px"
    crsrBlr.style.top = dets.y - 100 + "px"
})

gsap.to("#nav",{
    backgroundColor : "#000",
    duration: 0.5,
    height:"100px",
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        //markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
})
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        //markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
    }

    })