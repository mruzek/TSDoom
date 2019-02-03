export const RESX: number = 640;
export const RESY: number = 480;
export const FOV: number = 90;
export const FPS: number = 50;
export const ROTATIONSPEED: number = 12;
export const SPEED: number = 20;

export const ROTATIONX: number = RESX/2;
export const ROTATIONY: number = RESY;

export const CANVAS = <HTMLCanvasElement> document.getElementById('screen');
CANVAS.width = RESX;
CANVAS.height = RESY;
export const CTX = CANVAS.getContext('2d');

export const CANVAS2 = <HTMLCanvasElement> document.getElementById('screen2');
CANVAS2.width = RESX;
CANVAS2.height = RESY;
export const CTX2 = CANVAS2.getContext('2d');

export const CANVAS3 = <HTMLCanvasElement> document.getElementById('screen3');
CANVAS3.width = RESX;
CANVAS3.height = RESY;
export const CTX3 = CANVAS3.getContext('2d');




