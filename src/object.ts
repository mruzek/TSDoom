import {RESX, RESY} from './globals';
import {angle} from './core';
import {toRadians} from "./utils"; //TODO: fix circular dependency

export interface Drawable {
    draw(ctx: CanvasRenderingContext2D): void
}

export class DoomObject implements Drawable{
    constructor(size: number, color: string) {
        this.size = size;
        this.color = color;
    }

    x: number;

    y: number;

    size: number;

    color: string;

    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
    }
}

export class Wall implements Drawable{

    constructor(x1: number, y1: number, x2: number, y2: number, height : number, color: string) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.color = color;
        this.height = height;
    }

    x1: number;
    y1: number;

    x2: number;
    y2: number;

    height:number = RESY;

    color: string;

    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.stroke();
    }

    // TODO: either use separate method or decorator to adjus draw functionality
    draw3d(ctx: CanvasRenderingContext2D): void {

        // ctx.beginPath();
        //ctx.moveTo(this.x1, this.y1);
        //ctx.lineTo(this.x2, this.y2);

        //fps view
        ctx.strokeStyle = this.color;


        let x1_3D: number = (RESX / 2) - ((RESY/2) / ((RESY - this.y1) / (RESX/2 - this.x1)));
        let y1_3D: number = RESY / 2;
        let x2_3D: number = (RESX / 2) - ((RESY/2) / ((RESY - this.y2) / (RESX/2 - this.x2)));
        let y2_3D: number = RESY / 2;

        ctx.beginPath();
        ctx.lineTo(x1_3D, y1_3D);
        ctx.lineTo(x2_3D, y2_3D);
        ctx.stroke();
    }
}


// drawable decorators
export class Izo extends Wall{
    constructor(wall: Wall) {
        super(wall.x1, wall.y1, wall.x2, wall.y2, wall.height, wall.color)
    }

    draw(ctx: CanvasRenderingContext2D): void {
        super.draw(ctx);

        let x1Izo: number = this.x1 - this.height * Math.sin(toRadians(angle));
        let y1Izo: number =  this.y1 - this.height * Math.cos(toRadians(angle));
        let x2Izo: number = this.x2 - this.height * Math.sin(toRadians(angle));
        let y2Izo: number = this.y2 - this.height * Math.cos(toRadians(angle));

        ctx.beginPath();
        ctx.lineTo(this.x2, this.y2);
        ctx.lineTo(x2Izo, y2Izo);
        ctx.lineTo(x1Izo, y1Izo);
        ctx.lineTo(this.x1, this.y1);
        ctx.stroke();
    }
}
