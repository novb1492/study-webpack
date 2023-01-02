import hello from './hello.js';
import world from './world.js';
import css from './test.css';
import * as math from "./index2";
document.getElementById('text').innerText=hello+','+world;
console.log(math.sum(1,2));
// webpack에서 파일을 실행하면 webpack은 전역 범위를 어지럽히지 않으려고 하므로 이 기능은 기본적으로 전역적으로 사용할 수 없습니다.
// JS 파일 범위 밖에서 함수에 액세스할 수 있게 하려면 전역 범위에 넣어야 합니다.
window.abc=(params)=> {
    alert(params);
    console.log(math.sum(10,21));
}


