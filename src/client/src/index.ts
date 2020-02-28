import {
    getCanvasEl,
    createPixiApp,
    loadPixiAssets,
    initializeComponents,
} from "./framework";
import { Scene, Textures } from "./constants";
import { initState } from "./state";

const initGame = async () => {
    const canvasEl = getCanvasEl("game");
    canvasEl.height = window.innerHeight;
    canvasEl.width = window.innerWidth;

    const pixiApp = createPixiApp({
        view: canvasEl,
        width: Scene.Width,
        height: Scene.Height,
    });

    const [_, level] = await Promise.all([
        loadPixiAssets(Textures),
        import("./assets/sprites.json"),
    ]);

    const initializer = initializeComponents(pixiApp, [], initState({}));

    initializer();
};

initGame();
