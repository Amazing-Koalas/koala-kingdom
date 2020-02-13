import * as PIXI from "pixi.js";

export class Renderer {
    private running = false;

    private readonly renderer: PIXI.Renderer;
    private readonly stage: PIXI.Container;

    constructor(canvasID: string) {
        const canvas = <HTMLCanvasElement>document.getElementById(canvasID);

        this.renderer = PIXI.autoDetectRenderer({
            width: window.innerWidth,
            height: window.innerHeight,
            view: canvas,
        });

        this.stage = new PIXI.Container();
        this.setupEvents();
    }

    private setupEvents() {
        window.addEventListener("resize", () => {
            this.renderer.resize(window.innerWidth, window.innerHeight);
        })
    }

    private renderLoop = (tick: number): void => {
        console.log(tick);
        requestAnimationFrame(this.renderLoop);

        if (this.running === true) {
            this.renderer.render(this.stage);
        }
    }

    public enable() {
        this.running = true;
        requestAnimationFrame(this.renderLoop);
    }

    public disable() {
        this.running = false;
    }
}
