import { Component } from "./Component";
import { Scene } from "./Scene";

// ComponentManager manages component lifetimes.
export class ComponentManager {
    private rootComponents: Map<String,Component>;
    constructor() {
        this.rootComponents = new Map();
    }

    public add(component: Component) {
        // this.rootComponents.push(component);
    }

    public map(fn: (component: Component) => void) {
        // this.rootComponents.map(fn);
    }

    public listScenes(): string[] {
        return [];
    }
}

type GameEngineContextProps {
    running: boolean;
    ctx: CanvasRenderingContext2D;
    canvas: HTMLCanvasElement;
}

export class GameEngineContext<State> {
    private props: GameEngineContextProps;

    constructor(props: GameEngineContextProps) {
        this.props = props;
    }

    public get running() {
        return this.props.running;
    }

    public get ctx(): CanvasRenderingContext2D {
        return this.props.ctx;
    }

    public get canvas(): HTMLCanvasElement {
        return this.props.canvas;
    }

    public clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

type GameEngineProps<State> = {
    canvasID: string;
    loader?: Object;
    scene: Scene<State, {}>;
}


export class GameEngine<State> {
    // private running: boolean;
    public readonly canvasID: string;
    // public readonly ctx: CanvasRenderingContext2D;
    // public readonly canvas; 
    private rootScene: Scene;

    constructor(props: GameEngineProps<State>) {
        this.canvasID = props.canvasID;
        this.rootScene = props.scene;
    }

    public setScene(scene: Scene<State, {}>) {
        this.rootScene = scene
    }

    public async start<State>(state: State): Promise<void> {
        return new Promise((resolve, reject) => {
            const canvas = document.getElementById(this.canvasID) as HTMLCanvasElement;
            const ctx = canvas.getContext("2d");
            if (ctx) {
                const render = this.renderFn(ctx);
                requestAnimationFrame(render)
                resolve();
            } else {
                reject();
            }
        })
    }

    private renderFn(ctx: CanvasRenderingContext2D): FrameRequestCallback {
        const canvas = ctx.canvas;
        const engine = new GameEngineContext({
            running: false,
            ctx,
            canvas,
        })
        const cb = (time: number) => {
            engine.clear()
            this.rootScene.render(state, engine);
            if (engine.running) {
                requestAnimationFrame(cb);
            }
        }
        return cb;
    }
}

export default GameEngine
