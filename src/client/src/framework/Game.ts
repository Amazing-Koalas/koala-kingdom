import * as PIXI from "pixi.js";

// export interface GameArgs<TM extends TextureMap> {
//     canvasEl: HTMLCanvasElement
//     width: number;
//     height: number;
//     textureMap?: TM;
//     // loader: TextureLoader<TM>
// }
export type GameArgs = {
    canvasEl: HTMLCanvasElement,
    width: number,
    height: number,
}

export class Game {
    private app: PIXI.Application;
    private args: GameArgs;
    // public __internal: GameInternal;
    constructor(args: GameArgs) {
        this.args = args;
    }

    public loadTextures() {

    }

    protected rootComponent() {
    }

    public launch() {
    }

    // public loadAssets(textures) {
    //     return new Promise(resolve => {
    //         PIXI.Loader.shared.add(
    //             Object.keys(textures).map(
    //                 (key: keyof typeof textures) => textures[key]
    //             )
    //         );
    //         PIXI.Loader.shared.load(resolve);
    //     });
    // }
}
