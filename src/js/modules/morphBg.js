/*
|--------------------------------------------------------------------------
| Morh Backgrounds
|--------------------------------------------------------------------------
*/

import anime from 'animejs';
import Scroll from 'scrollmonitor'


function morphBg(){

    function init(){
        animation()
        initialPosition()
    }

    function initialPosition(){
        const elm = document.querySelector('h1').getBoundingClientRect();
        const svg = document.querySelector('.morph-wrap')
        const top = elm.top
        const left = elm.left

        svg.style.top = `${top - 20}px`
        svg.style.left = `${left + 20}px`
    }

    function animation(){
        anime({
            targets: '.polymorph',
            points: [
              { value: '0.000 0.000, 191.500 10.500, 203.000 57.000, 5.000 51.500, 0.000 0.000' },
              { value: '0.000 0.000, 191.500 10.500, 203.000 57.000, 5.000 51.500, 0.000 0.000' },
              { value: '0.000 0.000, 191.500 10.500, 203.000 57.000, 5.000 51.500, 0.000 0.000' }
            ],
            easing: 'easeOutQuad',
            duration: 2000,
            loop: true
          });
    }

    return init()
}

export default morphBg