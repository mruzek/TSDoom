import {DoomObject} from "./object";

const RESX = 640;
const RESY = 480;
let offsetX = 0;
let offsetY = 0;
let angle = 0;

const rotationSpeed = 12;
const speed = 20;

const canvas = <HTMLCanvasElement> document.getElementById("screen");
const ctx = canvas.getContext("2d");
canvas.width = RESX;
canvas.height = RESY;

document.onkeydown = checkKey;
function checkKey(e: any) {

    e = e || window.event;

    if (e.keyCode == '81') { // Q
        strafeLeft();
    }
    if (e.keyCode == '69') { // E
        strafeRight()
    }
    if (e.keyCode == '87') { // W
        up()
    }
    if (e.keyCode == '83') { // S
        down()
    }
    if (e.keyCode == '65') { // A
        rotateLeft()
    }
    if (e.keyCode == '68') { // D
        rotateRight()
    }
    if (e.keyCode == '70') { // F
        stateLog();
    }
}

function toRadians (angle: number) {
    return angle * (Math.PI / 180);
}

function up() {
    offsetX = offsetX + (speed * Math.sin(toRadians(angle)));
    offsetY = offsetY + (speed * Math.cos(toRadians(angle)));
}

function down() {
    offsetX = offsetX - (speed * Math.sin(toRadians(angle)));
    offsetY = offsetY - (speed * Math.cos(toRadians(angle)));
}

function strafeLeft() {
    offsetX = offsetX + (speed * Math.cos(toRadians(angle)));
    offsetY = offsetY - (speed * Math.sin(toRadians(angle)));
}

function strafeRight() {
    offsetX = offsetX - (speed * Math.cos(toRadians(angle)));
    offsetY = offsetY + (speed * Math.sin(toRadians(angle)));
}

function rotateLeft() {
    if((angle + rotationSpeed) > 360) {
        angle = 360 - angle + rotationSpeed
    } else {
        angle = angle + rotationSpeed
    }
}

function rotateRight() {
    if((angle - rotationSpeed) < 0) {
        angle = (360 + angle - rotationSpeed)
    } else{
        angle = angle - rotationSpeed
    }
}

function stateLog() {
    console.log(
        "offsetX", offsetX,
        "offsetY", offsetY,
        "angle", angle
    )
}

function clear() {
    ctx.fillStyle = "#000";
    // ctx.fillRect(0, 0, RESX, RESY);
    ctx.fillRect(-10, -10, 1000, 1000);
}

let You = new DoomObject(30, "#874600");
You.x = 200;
You.y = 100;

let Fat = new DoomObject(60, "#ede300");
Fat.x = -100;
Fat.y = -100;

let Me = new DoomObject(10, "#0a0087");
Me.x = RESX / 2;
Me.y = RESY / 2;

export function eachFrame() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    clear();
    // what should be static here
    Me.draw();
    // ---
    ctx.translate(RESX/2, RESY/2);
    ctx.rotate(angle * Math.PI / 180);
    ctx.translate(-RESX/2, -RESY/2);
    ctx.transform(1,0,0,1,offsetX , offsetY);
    // what should be dynamic here
    You.draw();
    Fat.draw();

    // ---
}

setInterval(eachFrame, 20);