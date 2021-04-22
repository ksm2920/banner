window.addEventListener('load', function() {
    const tl = new gsap.timeline({ repeat: -1, repeatDelay: 5});
    
    tl.to('#ball', 0.5, { x: 18 }, { x: 0, ease: Bounce.easeOut});
    tl.fromTo('#masks', 1, { y: 0 }, { y: -260})
    tl.fromTo('#bell-mask', 1,  { y: -150 }, { y: 0, ease: Bounce.easeOut});
    tl.to('#user-group', 1.5, {opacity: 1});
    tl.fromTo('#confetti', 1.5, { opacity: 0, y: -150 }, { opacity:1, y: 0, ease: Elastic.easeOut});
    tl.staggerFromTo('#cloud, #moment, #download', 2 , {opacity:0, y:90, ease: Elastic.easeOut.config(1.2, 0.5)}, {opacity:1, y:0, ease: Elastic.easeOut.config(1.2, 0.5)}, 0.03);
    tl.fromTo('#download', 0.3, { scale: 1}, { scale: 1.2, repeat: 3, ease: Power0.easeOut, yoyo:true});
}, false);