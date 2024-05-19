
function refresh(){
    gsap.from('.logo',{
        x:-100,
        opacity:0,
        duration:1,
        delay:0.1
    },"start")
    gsap.from('.nav-items > h3',{
        y:-100,
        stagger:0.3,
        duration:0.6
    },"start")
    gsap.from('.menu',{
        x:100,
        stagger:0.3,
        duration:1.1
    },"start")
}

refresh()

var page3 = gsap.timeline({
    scrollTrigger:{
        trigger:".page3",
        start:"0% 100%",
        end:"60% 38%",
        // markers:true,
        scrub:true
    }
})

var page = gsap.timeline({
    scrollTrigger:{
        trigger:".page2",
        start:"0% 100%",
        end:"80% 80%",
        // markers:true,
        scrub:1
    }
})

page.to(".cocacola",{
    y:890,
    x:-400,
    rotate:360
},"anim")

page.to(".straw",{
    y:480,
    x:-1000,
    rotate:600,
    filter:"blur(0px)"
},"anim")

page.to("#ice1",{
    y:880,
    x:500,
    opacity:0.7
},"anim")

page.from(".item2",{
    y:50,
    opacity:0,
    duration:0.2
})

page3.to(".cocacola",{
    y:1870,
    x:25,
    scale:0.85,
    duration:0.8,
    delay:0.2,
},"card")

page3.to(".straw",{
    display:"none",
    opacity:0
},"card")

page3.from(".card1",{
    x:-500,
    duration:0.8,
    delay:0.2,
    opacity:0
},"card")

page3.from(".card2",{
    y:100,
    duration:0.8,
    delay:0.2,
    opacity:0
},"card")

page3.from(".card3",{
    x:500,
    duration:0.8,
    delay:0.2,
    opacity:0
},"card")














// --------------menubar
var tl = gsap.timeline()

    tl.to('.nav-items2',{
        right:"0%",
        duration:0.5,
    })

    tl.from('.nav-items2 > i',{
        scale:0.2,
        duration:0.3,
        ease: "bounce.out",
    })
    
    tl.from('.nav-items2 > h3',{
        y:100,
        opacity:0,
        color:"#fff",
        duration:0.2,
        stagger:0.2,
    })


    tl.pause();

document.querySelector('.menu').addEventListener('click',()=>{
    tl.play();
    
})
document.querySelector('#close').addEventListener('click',()=>{
    tl.reverse();
})


