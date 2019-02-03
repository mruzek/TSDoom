import {FOV, RESX, RESY} from '../globals';
import {Wall} from "../object";
import {toRadians} from "../utils";

let fov1: Wall = new Wall(
    0,
    RESY - ((RESX / 2) / Math.tan(toRadians(FOV/2))),
    RESX / 2,
    RESY,
    5,
    '#666'
);

let fov2: Wall = new Wall(
    RESX / 2,
    RESY,
    RESX,
    RESY - ((RESX / 2) / Math.tan(toRadians(FOV/2))),
    1,
    '#666'
);

let horizon: Wall = new Wall(
    0,
    RESY / 2,
    RESX,
    RESY / 2,
    1,
    '#ccc'
);

export let fovPlane = [
    fov1, fov2, horizon
];
