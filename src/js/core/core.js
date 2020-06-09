/*
|--------------------------------------------------------------------------
| App
|--------------------------------------------------------------------------
*/

// Import objects

const anime = require('animejs');
import smoothScroll from '../modules/smoothScroll'

function core(){

    function init(){
        smoothScroll()
    }

    return {
        init
    }
}

export default core