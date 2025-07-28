gsap.from(".nav-item",{
    y:-10,
    duration:0.3,
    // delay:0.5,
    opacity:0,
    stagger:0.1
})


gsap.from(".welcoming",{
    x:-50,
    duration:1,
    opacity:0.3
})

gsap.from(".sec-1-left",{
    x:-100,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:".sec-1-left",
        scroll:"body",
        start:"200",
        end:"-30%",
        scrub:2,
    }
})

gsap.from(".sec-1-img",{
    y:-100,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"sec-1-img",
        scroll:"body",
        start:"200",
        end:"-30%",
        scrub:2
    }
})

gsap.from(".opening",{
    y:70,
    opacity:0,
    scrollTrigger:{
        trigger:".opening",
        scroll:"body",
        start:"600",
        end:"-120%",
        scrub:2,
    }
})

gsap.from(".days",{
    x:-70,
    opacity:0,
    scrollTrigger:{
        trigger:".opening",
        scroll:"body",
        start:"600",
        end:"-120%",
        scrub:2,
    }
})
gsap.from(".time", {
    y:50,
    opacity:0,
    scrollTrigger:{
        trigger:".opening",
        scroll:"body",
        start:"600",
        end:"-120%",
        scrub:2,
    }
})

gsap.from(".sec-2-right",{
    x:200,
    opacity:0,
    scrollTrigger:{
        trigger:".sec-2-right",
        scroll:"body",
        scrub:2,
        start:"1000",
        end:"5%",
    }
})
gsap.from(".deals-hov",{
    x:-200,
    opacity:0,
    scrollTrigger:{
        trigger:".deals-hov",
        scroll:"body",
        end:"-50%",
        scrub:2
    }
})

gsap.from(".chefs",{
    y:-200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".chefs",
        scroll:"body",
        scrub:2,
    }
})

gsap.from("#menu-banner",{
    x:-400,
    opacity:0,
    scrollTrigger:{
        trigger:"#menu-banner",
        scroll:"body",
        scrub:true,
    }
})

gsap.from("#section-6",{
    opacity:0,
    y:100,
    scrollTrigger:{
        trigger:"#section-6",
        scroll:"body",
        start:"top 80%",
        end:"top 20%",
        scrub:true
    }
})

gsap.from('#section-7',{
    opacity:0,
    x:-200,
    scrollTrigger:{
        trigger:"#section-7",
        scroll:"body",
        start:"top 80%",
        end: "top 20%",
        scrub:true   
    }
})

