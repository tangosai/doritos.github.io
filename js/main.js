gsap.registerPlugin(ScrollTrigger);
gsap.to('.one',1.5,{
    delay:0.2,
    left:'-100%',
    ease:Expo.easeInOut
})
gsap.to('.two',1.5,{
    delay:0.4,
    left:'-100%',
    ease:Expo.easeInOut
})
gsap.to('.three',1.5,{
    delay:0.6,
    left:'-100%',
    ease:Expo.easeInOut
})
gsap.from('.logo',1,{
    delay:1.2,
    opacity:0,
    y:-20,
    ease:Expo.easeInOut
})
TweenMax.staggerFrom('.menu ul li',1,{
    delay:1.6,
    opacity:0,
    y:-20,
    ease:Expo.easeInOut
},0.08)


gsap.from('.content h1',1,{
    delay:1.8,
    opacity:0,
    y:"100%",
    ease:Expo.easeInOut
})
gsap.from('.content h2',1,{
    delay:2,
    opacity:0,
    y:"100%",
    ease:Expo.easeInOut
})
gsap.from('.content p',1,{
    delay:2.2,
    opacity:0,
    y:"100%",
    ease:Expo.easeInOut
})
gsap.from('.content strong',1,{
    delay:2.4,
    opacity:0,
    y:"100%",
    ease:Expo.easeInOut
})
gsap.from('.backdrop',2,{
    delay:2,
    opacity:0,
    y:"100%",
    ease:Expo.easeInOut
})
gsap.from('.doritos',2,{
    delay:2.4,
    opacity:0,
    y:"-100%",
    ease:Expo.easeInOut
})
gsap.from('.chips',2,{
    delay:2.6,
    opacity:0,
    x:"100%",
    ease:Expo.easeInOut
})
gsap.from('.ketchup',2,{
    delay:2.8,
    opacity:0,
    y:"100%",
    ease:Expo.easeInOut
})

gsap.from('.chilli',2,{
    delay:2.8,
    opacity:0,
    y:"100%",
    ease:Expo.easeInOut
})


gsap.timeline({
    scrollTrigger:{
        trigger:".box",
        start:"center center",
//        markers:true,
        scrub:true,
        pin:true,
    }
})
.from(".text1",10,{x:innerWidth * 1})
.from(".text2",10 ,{x:innerWidth * -1})
.from(".text3",10 ,{x:innerWidth * 1})
.from(".chips_1",10 ,{x:innerWidth * 1,rotate: 360})
.from(".ketchup_1",10 ,{y:innerWidth * 1})
.from(".chilli_1",10 ,{y:innerWidth * 1})
.from(".doritos_1",10 ,{y:innerHeight * 1,rotate: 360})








































