import * as PIXI from "pixi.js";

import { Component, GameObject } from "./Component";

export type EngineArgs = {
    canvas: HTMLCanvasElement;
}
/**
 * Engine wraps basic things of all things related to a pixi app 
 * 
 * TODO: this documenation sucks!
 */
export class Engine {
    private app: PIXI.Application;
    constructor(args: EngineArgs) {
        this.app = new PIXI.Application({
            view: args.canvas,
        });
    }

    public async run<App extends Component<GameObject>>(app: App): Promise<this> {
        const rootObject = app.mount();
        this.app.ticker.add(() => {
            app.render(rootObject);
        });

        this.app.stage.addChild(rootObject);
        this.app.renderer.render(this.app.stage);

        return this;
    }
}
