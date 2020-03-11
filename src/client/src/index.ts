//hello testing push
import {
    getCanvasEl,
    createPixiApp,
    loadPixiAssets,
    initializeComponents,
} from "./framework";
import { Scene, Textures } from "./constants";
import { State } from "./components/State";
import { initState } from "./state";
import { Character } from "./components/Character";

const initGame = async () => {
    const canvasEl = getCanvasEl("game");
    canvasEl.height = Scene.Height;
    canvasEl.width = Scene.Width;

    const pixiApp = createPixiApp({
        view: canvasEl,
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const [_, level] = await Promise.all([
        loadPixiAssets(Textures),
        // import("./assets/character/adventurer.json"),
    ]);

    const initializer = initializeComponents(
        pixiApp,
        [State, Character],
        initState({})
    );

    initializer();
};

initGame();
