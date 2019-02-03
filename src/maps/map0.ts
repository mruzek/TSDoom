import {RESX, RESY, ROTATIONX, ROTATIONY} from '../globals';
import {DoomObject, Wall} from '../object';

export let Me = new DoomObject(10, '#0a0087');
Me.x = ROTATIONX;
Me.y = ROTATIONY;

let You = new DoomObject(30, '#874600');
You.x = 200;
You.y = 100;

let Fat = new DoomObject(60, '#ede300');
Fat.x = -100;
Fat.y = -100;

let firstWall = new Wall(
    RESX/2 - 100,
    RESY,
    RESX/2 - 100,
    RESY - 400,
    400,
    '#FFF'
);
let secondWall = new Wall(
    RESX/2 + 100 - 40,
    RESY,
    RESX/2 + 100 - 40,
    RESY - 400,
    400,
    '#4dffa1'
);

let smallWallHeight = 200;
let smallWallColor = '#1bff00';
let smallWall1 = new Wall(50, 50, 150, 50, smallWallHeight, smallWallColor);
let smallWall2 = new Wall(150, 50, 150, 150, smallWallHeight, smallWallColor);
let smallWall3 = new Wall(150, 150, 50, 150, smallWallHeight, smallWallColor);
let smallWall4 = new Wall(50, 150, 50, 50, smallWallHeight, smallWallColor);

let triangHeight = 80;
let triangColor = '#FF45E7';
let triangA = new Wall(500, 400, 530, 370, triangHeight, triangColor);
let triangB = new Wall(530, 370, 520, 350, triangHeight, triangColor);
let triangC = new Wall(520, 350, 500, 400, triangHeight, triangColor);

let tallWall = new Wall(550, 10, 500, 40, 600, '#f34332');

export let map0: Wall[] = [
    firstWall, secondWall,
    smallWall1, smallWall2, smallWall3, smallWall4,
    triangA, triangB, triangC,
    tallWall
];
