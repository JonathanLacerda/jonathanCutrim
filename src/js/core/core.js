/*
|--------------------------------------------------------------------------
| App
|--------------------------------------------------------------------------
*/

// Import objects

import smoothScroll from '../modules/smoothScroll'
import morphBg from '../modules/morphBg'


function core(){

    function init(){
        morphBg()
    }

    return {
        init
    }
}

export default core