//hello testing push
import {
    getCanvasEl,
    createPixiApp,
    loadPixiAssets,
    initializeComponents,
} from "./framework";
import { Scene, Textures, World } from "./constants";
import { Character } from "./components/Character";
import {Background} from "./components/Background";
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

    const [_, level] = await Promise.all([loadPixiAssets(Textures)]);

    const initializer = initializeComponents(
        pixiApp,
        [State, Background, Character],
        initState({})
    );

    initializer();

};

initGame();
