import {
    getCanvasEl,
    createPixiApp,
    loadPixiAssets,
    initializeComponents,
} from "./framework";
import { Scene, Textures, World } from "./constants";
import { Character } from "./components/Character";
import { Background } from "./components/Background";
import { State } from "./components/State";
import { Menu } from "./components/Menu";
import { initState } from "./state";


const initGame = async () => {

    const [_, level] = await Promise.all([loadPixiAssets(Textures)]);
    document.getElementById('startScreen').style.display = 'none';

    const canvasEl = getCanvasEl("game");
    canvasEl.height = Scene.Height;
    canvasEl.width = Scene.Width;

    const pixiApp = createPixiApp({
        view: canvasEl,
        width: Scene.Width,
        height: Scene.Height,
    });


    const initializer = initializeComponents(
        pixiApp,
        [State, Background, Character],
        initState({})
    );

    const startGame  = initializeComponents(pixiApp,[Background, Menu],initState({}));
    
    //initializer();
    startGame();
    //pixiApp.stage.children[0].visible = false;

};

let btn = document.getElementById("startBtn");
btn.onclick = function(){initGame()};
//initGame();
