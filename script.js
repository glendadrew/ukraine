(function() {
    'use strict';
    const images = ['images/star3.png', 'images/flower.png'];
    const banners = ['images/courage3.png', 'images/beauty.png'];
    const h1 = document.querySelector('h1');
    const image = document.querySelector('#image');
    const banner = document.querySelector('#banner');
    const headerInScales = [.3, .5, .7, 1];
    const headerOutScales = [.7, .5, .3, 0];
    const lessTime = 250;
    const moreTime = 700;
    const imageInScales = [.1, .3, .5, .7, 1];
    const imageOutScales = [.9, .7, .5, .3, .1, 0];
    const imageInLeft = [49, 39, 29, 19, 0];
    const imageOutLeft = [10, 20, 30, 45, 50, 60];
    const bannerScales = [.3, .7, 1, .7, .3, 0];
    let imageDegrees = 0;
    let counter = 0;

    moveHeaderIn();

    function moveHeaderIn(){
        h1.style.transform = `scale(${headerInScales[counter]})`;
        if (counter < headerInScales.length){
            counter++;
            setTimeout(moveHeaderIn, lessTime);
        } else {
            counter = 0;
            setTimeout(moveImageIn, lessTime);
        }
    }

    function moveImageIn(){
        image.style.transform = `scale(${imageInScales[counter]}) rotate(${imageDegrees}deg)`;
        image.style.left = `${imageInLeft[counter]}vw`;
        if (counter < imageInScales.length){
            counter++;
            imageDegrees += 30;
            setTimeout(moveImageIn, lessTime);
        } else {
            counter = 0;
            imageDegrees += 30;
            setTimeout(moveBanner, lessTime);
        }
    }

    function moveBanner(){
        banner.style.transform = `scale(${bannerScales[counter]})`;
        if (counter < bannerScales.length){
            counter++;
            if (bannerScales[counter - 1] !== 1){
                setTimeout(moveBanner, lessTime);
            } else {
                setTimeout(moveBanner, moreTime);
            }
        } else {
            counter = 0;
            setTimeout(moveImageOut, lessTime);
        }
    }
   
    function moveImageOut(){
        image.style.transform = `scale(${imageOutScales[counter]}) rotate(${imageDegrees}deg)`;
        image.style.left = `-${imageOutLeft[counter]}vw`;
        if (counter < imageOutScales.length){
            counter++;
            imageDegrees += 30;
            setTimeout(moveImageOut, lessTime);
        } else {
            counter = 0;
            imageDegrees += 30;
            setTimeout(moveHeaderOut, lessTime);
        }
    }

    function moveHeaderOut(){
        h1.style.transform = `scale(${headerOutScales[counter]})`;
        if (counter < headerOutScales.length){
            counter++;
            setTimeout(moveHeaderOut, lessTime);
        } else {
            counter = 0;
            setTimeout(changeImage, lessTime);
        }
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