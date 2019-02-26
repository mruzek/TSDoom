export const RESX: number = 800;
export const RESY: number = 600;
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
