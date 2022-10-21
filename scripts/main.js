import { getFish } from './database.js'
import { fishListOne } from './FishList.js'

/*Uncaught TypeError: Cannot set properties of null (setting 'innerHTML')
    at main.js:6:29
(anonymous) @ main.js:6*/ 

/*I don't know how to use querySelector, it's letting me use H3 as a parameter,
but I can't figure out how to get the content to appear in the right place. */


const parentHTMLElement = document.querySelector(".about_fish")
parentHTMLElement.innerHTML = fishListOne();

