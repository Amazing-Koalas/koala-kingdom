//hello testing push
import {
    getCanvasEl,
    createPixiApp,
    loadPixiAssets,
    initializeComponents,
} from "./framework";
import { Scene, Textures } from "./constants";
import { Character } from "./components/Character";
import { State } from "./components/State";
import { initState } from "./state";

const initGame = async () => {
    const canvasEl = getCanvasEl("game");
    canvasEl.height = Scene.Height;
    canvasEl.width = Scene.Width;

    const pixiApp = createPixiApp({
        view: canvasEl,
        width: Scene.Width,
        height: Scene.Height,
    });

    const [_, level] = await Promise.all([
        loadPixiAssets(Textures),
        //import("./assets/levels/level1.json")
    ]);

    const initializer = initializeComponents(
        pixiApp,
        [State, Character],
        initState({})
    );

    initializer();
};

initGame();
