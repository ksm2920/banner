window.addEventListener('load', function() {
    const tl = new gsap.timeline({ repeat: -1, repeatDelay: 3});

    tl.to('#ball', { x: 18 }, { x: 0, ease: Bounce.easeOut, duration: 5 });
    tl.fromTo('#masks', { y: 0 }, { y: -260, duration: 0.5 })
    tl.fromTo('#bell-mask', { y: -150 }, { y: 0, ease: Bounce.easeOut, duration: 1 });
    tl.set('#user-group', {visibility: 'visible'});
    tl.fromTo('#confetti', { y: -150 }, { y:0, ease: Elastic.easeOut, duration: 1 });
    tl.fromTo('#cloud, #moment, #download', {y: 200 }, { y: 0 });
    // tl.fromTo('#download');
}, false);