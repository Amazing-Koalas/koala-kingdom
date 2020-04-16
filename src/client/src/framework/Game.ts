import * as PIXI from "pixi.js";
import { Component, GameObject }  from "./Component";

export type GameArgs = {
    canvasEl: HTMLCanvasElement,
    width: number,
    height: number,
}

export class Game extends Component<GameOject> {
    private app: PIXI.Application;
    private args: GameArgs;
    private components: Array<Component<GameObject>> = [];

    constructor(args: GameArgs) {
        this.args = args;
    }

    public loadTextures() {

    }

    public rootComponent() {
    }

    protected addComponent(component: Component<GameObject>) {
        this.components.push(component);
    }

    public launch() {
    }
}
