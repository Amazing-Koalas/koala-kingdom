import {
  getCanvasEl,
  createPixiApp,
  loadPixiAssets,
  initializeComponents,
  GameContainer,
} from "./framework";
import { Scene, Textures, Sounds } from "./constants";
import { Character } from "./components/Character";
import { Background } from "./components/Background";
import { State } from "./components/State";
import { Menu } from "./components/Menu";
import { initState } from "./state";

const initGame = async () => {
  const [_] = await Promise.all([loadPixiAssets(Textures)]);
  //const [] = await Promise.all([loadPixiSounds(Sounds)]);
  //const [] = await Promise.all([loadPixiSounds(Sounds)]);

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
    [Background, Menu, State, Character],
    initState({})
  );

  initializer();

  GameContainer.getChildByName("Character").visible = false;
  //console.log(GameContainer.children);
};

initGame();
