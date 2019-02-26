import {Drawable, Wall, Izo, DoomObject, Creature} from './object';
import {CTX, RESX, RESY, ROTATIONX, ROTATIONY, SPEED, ROTATIONSPEED} from './globals';
import {map0, Me} from './maps/map0';
import {stateLog, toRadians} from "./utils";
import {fovPlane} from "./maps/fovPlane";

// app state
export let offsetX = 0;
export let offsetY = 0;
export let angle = 0;
//

document.onkeydown = checkKey;
function checkKey(e: any) {
    e = e || window.event;
    // Q
    if (e.keyCode == '81') {
        rotateLeft();
    }
    // E
    if (e.keyCode == '69') {
        rotateRight()
    }
    // W
    if (e.keyCode == '87') {
        up()
    }
    // S
    if (e.keyCode == '83') {
        down()
    }
    // A
    if (e.keyCode == '65') {
        strafeLeft()
    }
    // D
    if (e.keyCode == '68') {
        strafeRight()
    }
    // F
    if (e.keyCode == '70') {
        stateLog();
    }
}

export let Player = new Creature(10,'#0fff00', 10);
Player.x = 100;
Player.y = 100;

function up() {
    Player.y = Player.y - Player.speed;
    // offsetX = offsetX + (SPEED * Math.sin(toRadians(angle)));
    // offsetY = offsetY + (SPEED * Math.cos(toRadians(angle)));
}

function down() {
    Player.y = Player.y + Player.speed;
    // offsetX = offsetX - (SPEED * Math.sin(toRadians(angle)));
    // offsetY = offsetY - (SPEED * Math.cos(toRadians(angle)));
}

function strafeLeft() {
    Player.x = Player.x - Player.speed;
    // offsetX = offsetX + (SPEED * Math.cos(toRadians(angle)));
    // offsetY = offsetY - (SPEED * Math.sin(toRadians(angle)));
}

function strafeRight() {
    Player.x = Player.x + Player.speed;
    // offsetX = offsetX - (SPEED * Math.cos(toRadians(angle)));
    // offsetY = offsetY + (SPEED * Math.sin(toRadians(angle)));
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

export function eachFrame() {
    clear(CTX);
    Player.draw(CTX);
    // drawPov(CTX, ...map0);
    // draw2D(CTX2, ...map0);
    // drawIzo(CTX3, ...map0);
    //
    // drawStatics(CTX, Me);
    // drawStatics(CTX2, Me, ...fovPlane);
    // drawStatics(CTX3, Me);
}

function drawStatics(ctx: CanvasRenderingContext2D, ...drawables: Drawable[]) {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    drawables.map(d => d.draw(ctx))
}

function draw2D(ctx: CanvasRenderingContext2D, ...drawables: Wall[]) {
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    ctx.translate(ROTATIONX, ROTATIONY); // TODO: handle canvas translation within draw function
    ctx.rotate(angle * Math.PI / 180);
    ctx.translate(-ROTATIONX, -ROTATIONY);
    ctx.transform(1,0,0,1,offsetX , offsetY);

    drawables.map(d => d.draw2D(ctx))
}

function drawIzo(ctx: CanvasRenderingContext2D, ...drawables: Wall[]) {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.translate(ROTATIONX, ROTATIONY);
    ctx.rotate(angle * Math.PI / 180);
    ctx.translate(-ROTATIONX, -ROTATIONY);
    ctx.transform(1,0,0,1,offsetX , offsetY);
    drawables.map(d => new Izo(d).draw(ctx))
}

function drawPov(ctx: CanvasRenderingContext2D, ...drawables: Wall[]) {
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    //offset x transformation

    //offset y transformation

    drawables.map(d => d.draw3d(ctx))
}

function clear(...ctxs: CanvasRenderingContext2D[]) {
    ctxs.map(ctx => {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, RESX, RESY);
    })
}

