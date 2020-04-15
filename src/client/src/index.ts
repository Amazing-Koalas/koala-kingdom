//hello testing push
// import {
//     getCanvasEl,
//     createPixiApp,
//     loadPixiAssets,
//     initializeComponents,
// } from "./framework";
// import { Scene, Textures, World } from "./constants";
// import { Character } from "./components/Character";
// import { Background } from "./components/Background";
// import { State } from "./components/State";
// import { initState } from "./state";
// import { App } from "./App";
// import { utils, Renderer } from "pixi.js";

// const initGame = async () => {
//     const canvasEl = getCanvasEl("game");
//     canvasEl.height = Scene.Height;
//     canvasEl.width = Scene.Width;

//     const pixiApp = createPixiApp({
//         view: canvasEl,
//         width: Scene.Width,
//         height: Scene.Height,
//     });

//     const [_, level] = await Promise.all([loadPixiAssets(Textures)]);

//     const initializer = initializeComponents(
//         pixiApp,
//         [State, Background, Character],
//         initState({})
//     );

//     initializer();

// };

// initGame();
////////////////////////////////////////
/// Sketch
////////////////////////////////////////
import { App } from "./App";
import * as Util from "./framework/utils";
import { Engine, TextureLoader } from "./framework";
import { rootReducer, initState, GameState, Action } from "./state";
import { Textures } from "./constants";
import { Character } from "./components/Character";
import { Store } from "./framework/Store";

const main = async () => {
    const canvasEl = Util.getCanvasEl("game");
    // canvasEl.height = Scene.Height;
    // canvasEl.width = Scene.Width;

    const store = new Store<GameState, Action>({ reducer: rootReducer, initState: initState({}) });
    const loader = new TextureLoader(Textures);
    const character = new Character({ store, loader });
    // const [store, loader] = await Promise.all([
    //     // new Promise(resolve => new Store<State>({ initialState: initialState() })),
    //     new Promise(res => res("Ok")),
    //     TextureLoader.loadAssets(Textures),
    // ]);

    // loader.getResource("Character");
    // loader.getResource("a");

    const app = new App({ store });

    const engine = new Engine({
        canvas: canvasEl,
        // textureMap: Textures,
        // game: app
    });

    // engine.loader.getResource("");

    // await Promise.all([
    //     // SharedTextureLoader.load(Textures)
    //     import("./assets/characer/adventurer.json")
    // ]);

    engine.run(app).then(() => {
        console.log("launching client");
    });
};

main();
