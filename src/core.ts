import {Drawable, DoomObject, Wall} from "./object";
import {CTX, RESX, RESY, ROTATIONX, ROTATIONY, SPEED, ROTATIONSPEED} from "./globals";

export let offsetX = 0;
export let offsetY = 0;
export let angle = 0;

let objectPool: Drawable[];

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

export function toRadians (angle: number) {
    return angle * (Math.PI / 180);
}

function up() {
    offsetX = offsetX + (SPEED * Math.sin(toRadians(angle)));
    offsetY = offsetY + (SPEED * Math.cos(toRadians(angle)));
}

function down() {
    offsetX = offsetX - (SPEED * Math.sin(toRadians(angle)));
    offsetY = offsetY - (SPEED * Math.cos(toRadians(angle)));
}

function strafeLeft() {
    offsetX = offsetX + (SPEED * Math.cos(toRadians(angle)));
    offsetY = offsetY - (SPEED * Math.sin(toRadians(angle)));
}

function strafeRight() {
    offsetX = offsetX - (SPEED * Math.cos(toRadians(angle)));
    offsetY = offsetY + (SPEED * Math.sin(toRadians(angle)));
}

function rotateLeft() {
    if((angle + ROTATIONSPEED) > 360) {
        angle = 360 - angle + ROTATIONSPEED
    } else {
        angle = angle + ROTATIONSPEED
    }
}

function rotateRight() {
    if((angle - ROTATIONSPEED) < 0) {
        angle = (360 + angle - ROTATIONSPEED)
    } else{
        angle = angle - ROTATIONSPEED
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
    CTX.fillStyle = "#000";
    CTX.fillRect(0, 0, RESX, RESY);
}

function drawFov() {

}
//-------------------------------------
let Me = new DoomObject(10, "#0a0087");
Me.x = ROTATIONX;
Me.y = ROTATIONY;

let You = new DoomObject(30, "#874600");
You.x = 200;
You.y = 100;

let Fat = new DoomObject(60, "#ede300");
Fat.x = -100;
Fat.y = -100;

let firstWall = new Wall(
    RESX/2 - 100,
    RESY,
    RESX/2 - 100,
    RESY - 400,
    400,
    "#FFF"
);
let secondWall = new Wall(
    RESX/2 + 100,
    RESY,
    RESX/2 + 100,
    RESY - 400,
    400,
    "#4dffa1"
);
let smallWallHeight = 200;
let smallWallColor = "1bff00";
let smallWall1 = new Wall(50, 50, 150, 50, smallWallHeight, smallWallColor);
let smallWall2 = new Wall(150, 50, 150, 150, smallWallHeight, smallWallColor);
let smallWall3 = new Wall(150, 150, 50, 150, smallWallHeight, smallWallColor);
let smallWall4 = new Wall(50, 150, 50, 50, smallWallHeight, smallWallColor);

objectPool = [
    You, Fat, firstWall, secondWall, smallWall1, smallWall2, smallWall3, smallWall4
];

export function eachFrame() {
    CTX.setTransform(1, 0, 0, 1, 0, 0);
    // static assets
    clear();
    Me.draw();

    CTX.translate(ROTATIONX, ROTATIONY);
    CTX.rotate(angle * Math.PI / 180);
    CTX.translate(-ROTATIONX, -ROTATIONY);
    CTX.transform(1,0,0,1,offsetX , offsetY);
    // dynamic assets
    objectPool.map(drawable => drawable.draw())

}

setInterval(eachFrame, 20);