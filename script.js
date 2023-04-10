(function () {
    'use strict';
    const images = ['images/star3.png', 'images/flower.png'];
    const banners = ['images/courage3.png', 'images/beauty.png'];
    const header = document.querySelector('header');
    const image = document.querySelector('#image');
    const banner = document.querySelector('#banner')
    let counter = 0;

    setInterval(changeImage, 4000);

    header.className = 'fadeIn';

    function changeImage() {
        console.log('changeImage called')
        header.className = 'fadeOut';
        image.style.animation = 'spinOut 1s forwards';
        banner.style.animation = 'scaleDown 1s forwards';
        
        setTimeout(function(){
            
            counter < images.length - 1 ? counter++ : counter = 0;
            image.src = images[counter];
            banner.src = banners[counter];
            header.className = 'fadeIn';

            setTimeout(function(){
                image.style.animation = 'spinIn 1s forwards';
                
                setTimeout(function(){
                    banner.style.animation = 'scaleUp .5s forwards';
                }, 500);
            }, 250);
        },1000)
    }

    // This is a fix for height on iOS
    // const appHeight = () => {
    //     const doc = document.documentElement;
    //     doc.style.setProperty('--app-height', `${window.innerHeight}px`);
    // }
    // window.addEventListener('resize', appHeight);
    // appHeight();
    
})()