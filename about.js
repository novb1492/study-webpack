import hello from './hello.js';
import world from './world.js';
import * as math from "./index2";
document.getElementById('text').innerText=world+','+hello;
export function abc(params) {
    alert(params);
    console.log(math.sum(13,21));

}