import {angle, offsetX, offsetY, Player} from "./core";

export function toRadians (angle: number) {
    return angle * (Math.PI / 180);
}


export function stateLog() {
    console.log(
        'Player.x', Player.x,
        'Player.y', Player.y,
        'offsetX', offsetX,
        'offsetY', offsetY,
        'angle', angle
    )
}