// classes
class RandomMaxMin{
    constructor(max, min){
        this.max = max
        this.min = min
    }
}
let ran = new RandomMaxMin(100, 1)

// end of classes

// auto create canvas with 'canvas' as tag
canv = document.createElement('canvas')
canv.id = 'canvas'
document.body.appendChild(canv)

const cl = console.log; // log a command in the conole
const listen = addEventListener; // listen for an event
const canvas = document.getElementById('canvas'); // for ctx
const ctx = canvas.getContext('2d'); // for ctx
const bgc = document.body.style.backgroundColor; // change document background colour
const timeout = setTimeout; // create a timeout for an amount of time
const height = window.innerHeight; // the height of the document
const width = window.innerWidth; // the width of the document
const interval = setInterval; // create an interval
const doc = document;
let rand;
function random(max, min){
    rand = Math.floor(Math.random() * (max - min + 1)) + min
}
// generate random number and control the maximum and minimum by typing 'random(1 // min, 10 // max)'


// delete if you are not using ctx movement, remember to delete 'player()' from the animation frame
// how to use:
// 1) create function inside your main.js
// 2) type 'requestAnimationFrame('Name of function')'
// 3) then call that function aswel as 'player()'
// charactor movement
let x = 100;
let y = 100;
let vxl = 0;
let vxr = 0;
let vy = 0;


function player(){
    ctx.clearRect(0, 0, width, height);
    x += vxl
    x += vxr
    y += vy
    ctx.fillRect(x, y, 50, 50)
}

listen("keydown", function(e) {
    if (e.key == 'w') vy = -5;
    if (e.key == 's') vy = 5;
    if (e.key == 'd') vxr = 5;
    if (e.key == 'a') vxl = -5;
})

listen("keyup", function (e) {
    if (e.key == 'w') vy = 0;
    if (e.key == 's') vy = 0;
    if (e.key == 'd') vxr = 0;
    if (e.key == 'a') vxl = 0;
})
// end of charactor movement




cl("autoComp.js Loaded Succesfully")

