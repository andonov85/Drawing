/*jslint devel: true */
/*jslint es6 */
'use strict';

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

ctx.fillStyle = '#6B5B95'; // Pantone color of the year 2018
move();
let y = 1;
async function move() {
    while (true) {
        for (let i = 0, x = 0; i < 800; i += 1, x += y) {
            ctx.fillRect(i, 180, x, x);
            if (x >= 50) {
                y = -1;
            } else if (x <= -50) {
                y = 1;
            }
            await sleep(10);
            ctx.clearRect(0, 0, 800, 600);
        }
    }
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}