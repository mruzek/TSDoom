import {angle, offsetX, offsetY} from "./core";

export function toRadians (angle: number) {
    return angle * (Math.PI / 180);
}


export function stateLog() {
    console.log(
        'offsetX', offsetX,
        'offsetY', offsetY,
        'angle', angle
    )
}