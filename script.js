(function() {
    'use strict';
    const images = ['images/star3.png', 'images/flower.png'];
    const banners = ['images/courage3.png', 'images/beauty.png'];
    const h1 = document.querySelector('h1');
    const image = document.querySelector('#image');
    const banner = document.querySelector('#banner');
    let counter = 0;

    moveHeaderIn();

    function moveHeaderIn(){
        h1.style.transform = 'scale(.3)';
        setTimeout(function(){
            h1.style.transform = 'scale(.5)';
            setTimeout(function(){
                h1.style.transform = 'scale(.7)';
                setTimeout(function(){
                    h1.style.transform = 'scale(1)';
                    setTimeout(moveImageIn, 250);
                }, 250);
            }, 250);
        }, 250);
    }

    function moveImageIn(){
        image.style.transform = 'scale(.1) rotate(36deg)';
        image.style.left = '49vw';
        setTimeout(function(){
            image.style.transform = 'scale(.3) rotate(72deg)';
            image.style.left = '39vw';
            setTimeout(function(){
                image.style.transform = 'scale(.5) rotate(108deg)';
                image.style.left = '29vw';
                setTimeout(function(){
                    image.style.transform = 'scale(.7) rotate(144deg)';
                    image.style.left = '19vw';
                    setTimeout(function(){
                        image.style.transform = 'scale(1) rotate(180deg)';
                        image.style.left = '0vw';
                        setTimeout(moveBanner, 250)
                    }, 250)
                }, 250)
            }, 250)
        }, 250)
    }

    function moveBanner(){
        banner.style.transform = 'scale(.3)';
        setTimeout(function(){
            banner.style.transform = 'scale(.7)';
            setTimeout(function(){
                banner.style.transform = 'scale(1)';
                setTimeout(function(){
                    banner.style.transform = 'scale(1)';
                    setTimeout(function(){
                        banner.style.transform = 'scale(1)';
                        setTimeout(function(){
                            banner.style.transform = 'scale(.7)';
                            setTimeout(function(){
                                banner.style.transform = 'scale(.3)';
                                setTimeout(function(){
                                    banner.style.transform = 'scale(0)';
                                    moveImageOut();
                                }, 250)
                            }, 250)
                        }, 250)
                    }, 700)
                }, 250)
            }, 250)
        }, 250)
    }

    function moveImageOut(){
        image.style.transform = 'scale(.7) rotate(120deg)';
        image.style.left = '-10vw';
        setTimeout(function(){
            image.style.transform = 'scale(.5) rotate(140deg)';
            image.style.left = '-20vw';
            setTimeout(function(){
                image.style.transform = 'scale(.3) rotate(160deg)';
                image.style.left = '-30vw';
                setTimeout(function(){
                    image.style.transform = 'scale(.1) rotate(180deg)';
                    image.style.left = '-45vw';
                    setTimeout(function(){
                        image.style.transform = 'scale(0) rotate(200deg)';
                        image.style.left = '-50vw';
                        moveHeaderOut();
                    }, 250)
                }, 250)
            }, 250)
        }, 250)
    }

    function moveHeaderOut(){
        h1.style.transform = 'scale(.7)';
        setTimeout(function(){
            h1.style.transform = 'scale(.5)';
            setTimeout(function(){
                h1.style.transform = 'scale(.3)';
                setTimeout(function(){
                    h1.style.transform = 'scale(0)';
                    setTimeout(changeImage, 250);
                }, 250);
            }, 250);
        }, 250);
    }

    function changeImage() {
        counter < images.length - 1 ? counter++ : counter = 0;
        image.src = images[counter];
        banner.src = banners[counter];
        moveHeaderIn();
    }
})();

    // This is a fix for height on iOS
    // const appHeight = () => {
    //     const doc = document.documentElement;
    //     doc.style.setProperty('--app-height', `${window.innerHeight}px`);
    // }
    // window.addEventListener('resize', appHeight);
    // appHeight();

