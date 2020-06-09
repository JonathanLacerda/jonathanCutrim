/*
|--------------------------------------------------------------------------
| Main Component - App
|--------------------------------------------------------------------------
*/

// Import Style/Scripts

import './sass/style.scss';
import initApp from './js/core/core'

const app = initApp();

try{
    app.init()

} catch(error){
    console.log(error)
}

