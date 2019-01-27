const canvas = <HTMLCanvasElement> document.getElementById("screen");
const ctx = canvas.getContext("2d");

export class DoomObject {
    constructor(size: number, color: string) {
        this.size = size;
        this.color = color;
    }

    x: number;

    y: number;

    size: number;

    color: string;

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
    }
}

class Map{


    draw() {

    }
}