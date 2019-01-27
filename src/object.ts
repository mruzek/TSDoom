import {CTX, RESY} from "./globals";
import {angle, toRadians} from "./core"; //TODO: fix circular dependency

export interface Drawable {
    draw(): void
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

    public draw(): void {
        CTX.fillStyle = this.color;
        CTX.fillRect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
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


    public draw(): void {
        let x1Izo: number = this.x1 - this.height * Math.sin(toRadians(angle));
        let y1Izo: number =  this.y1 - this.height * Math.cos(toRadians(angle));
        let x2Izo: number = this.x2 - this.height * Math.sin(toRadians(angle));
        let y2Izo: number = this.y2 - this.height * Math.cos(toRadians(angle));

        CTX.strokeStyle = this.color;
        CTX.beginPath();
        // line coordinates
        CTX.moveTo(this.x1, this.y1);
        CTX.lineTo(this.x2, this.y2);

        CTX.lineTo(x2Izo, y2Izo);
        CTX.lineTo(x1Izo, y1Izo);
        CTX.lineTo(this.x1, this.y1);
        CTX.stroke();

    }

}