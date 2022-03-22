// To start off
// link 'autoEngine.js' through your html file, make sure it is the first script that loads!!
// there will be instructions on how to use it next to whatever interest you.
// 
// you can also browse around this file to see its capabilities!
// hope this helps.


// to view engine version, type 'EngineVersion()' in the console.



























// classes
class Player{
    constructor(x, y, w, h, c){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
    }
}
let player = new Player(100, 100, 50, 50, "black")


class CalcDistanceX{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}
let pointA = new CalcDistanceX(0, 0)
let pointB = new CalcDistanceX(0, 0)

// end of classes

// auto create canvas with 'canvas' as tag
// if not using canvas, removeCanvas = true
canv = document.createElement('canvas')
canv.id = 'canvas'
document.body.appendChild(canv)



const cl = console.log; // log text in the console
const ce = console.error // log an error
const cw = console.warn // log a warning
const ct = console.trace // trace something
const listen = addEventListener; // listen for an event
const canvas = document.getElementById('canvas'); // for ctx
const ctx = canvas.getContext('2d'); // for ctx
let bgc = 'white'; // change document background colour
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
let hideOverflow = false; // change value to 'true' to hide scroll bars.
let hideOverflowY = false; // change value to 'true' to hide the Y scroll bar.
let hideOverflowX = false; // change value to 'true' to hide the X scroll bar.
// if you individually hide each bar, then you will have to reverse both variable values to show scroll bars.
const anim = requestAnimationFrame;
let mouseX = 0; // Access the mouseX position
let mouseY = 0; // Access the mouseY position
let title = document.title; // change variable value to change document title
let removeCanvas = false; // if true, then the automatic canvas creation will not happen on startUp. Note: value cannot be reversed 
let calcDist = false; // to calculate the DistanceX between point A and B, you must first set 'calcDist = true'-
// then, set 'pointAx.x' to point A 'X', and 'pointBx.x' to point B 'X'.
// then use 'DistanceX' (variable) to see the DistanceX between point A and point B.
//to calculate the DistanceY between point A and B, set 'pointAy.y' to your point A 'Y', then-
// 'pointBy.y' to your point B 'Y'.
// then use 'DistanceY' (variable) to see the DistanceY between point A and point B.
// e.g:
// pointA.x = 20;
// pointB.x = 100; 
// calcDist = true;
// output would be 80px apart from each other on the X Axis

// e.g.
// pointA.y = 50;
// pointB.y = 200;
// calcDist = true;
// calcDist = true;
// output would be 150px apart from each other on the Y Axis
let borderCollision = false;

// How to draw a player
// 1) create function inside your main.js.
// 2) type 'requestAnimationFrame('Name of your function')', or 'anim('Name of function')'.
// 3) then type 'drawPlayer' inside that function.
// 4) Lastly, remember to call your function!



// private variables (not to be changed or used) 
let DistanceX;
let DistanceY;
// end

function borderCol(){
    if (player.x <= canvas.width - canvas.width){
        player.x = canvas.width - canvas.width;
    }
    if (player.x + player.w >= canvas.width){
        player.x = canvas.width - player.w
    }
    if (player.y <= canvas.height - canvas.height){
        player.y = canvas.height - canvas.height;
    }
    if (player.y + player.h >= canvas.height){
        player.y = canvas.height - player.h
    }
}

// how to use:
// 1) create function inside your main.js.
// 2) type 'requestAnimationFrame('Name of function')', or 'anim('Name of function')'.
// 3) then type 'AllowPlayerMovement()' inside that function.
// 4) Lastly, remember to call your function!
// ============
// How to customize character:
// to resize the width and height, simply change the value (in your main.js) of player.w (player width) and/or player.h (player height).
// Default is 50 x 50;
// ============
// player movement
let vxl = 0;
let vxr = 0;
let vy = 0;
function AllowPlayerMovement(){
    ctx.clearRect(0, 0, width, height);
    player.x += vxl
    player.x += vxr
    player.y += vy
    ctx.fillStyle = player.c
    ctx.fillRect(player.x, player.y, player.w, player.h)
}
function drawPlayer(){ // not to be used if you are already using the engine's movement controls
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = player.c
    ctx.fillRect(player.x, player.y, player.w, player.h)

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
listen("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
})
setInterval(function checkOverflowTrueOfFalse() {
    if (hideOverflow){
        document.body.style.overflow = 'hidden';
    }
    if (hideOverflow == false){
        document.body.style.overflow = '';
    }
    if (hideOverflowX){
        document.body.style.overflowX = 'hidden'
    }
    if (hideOverflowX == false && document.body.style.overflow == false){
        document.body.style.overflowX = ''
    }
    if (hideOverflowY){
        document.body.style.overflowY = 'hidden'
    }
    if (hideOverflowY == false && document.body.style.overflow == false){
        document.body.style.overflowY = ''
    }
},50)
interval(function SetDocumentTitle(){
    document.title = title
},50)
interval(function RemoveCanvas(){
    if (removeCanvas){
        canvas.remove()
        removeCanvas = false;
    }   
})
interval(function calculateDistance(){
    if (calcDist){
        calcDist = false;
        DistanceX = pointB.x - pointA.x
        DistanceY = pointB.y - pointA.y
        if (DistanceX < -1){
            DistanceX = pointA.x - pointB.x
        }
        if (DistanceY < -1){
            DistanceY = pointA.y - pointA.y
        }
        console.log("DistanceX From 'pointA.x' (" + pointA.x + ")" + " to 'pointBx.x' (" + pointB.x + ") is: " + DistanceX + "px")
        console.log("===========")
        console.log("DistanceY From 'pointA.y' (" + pointA.y + ")" + " to 'pointB.y' (" + pointB.y + ") is: " + DistanceY + "px")
    }
})
interval(function setBackgroundColor(){
    doc.body.style.backgroundColor = bgc   
})
function EngineVersion(){
    cl('The current Engine version that you have installed is:')
    cl('Version 1.1.0')
}
canvas.width = width;
canvas.height = height;
cl("autoEngine.js Loaded Succesfully")
cl("Built by using autoEngine.js")