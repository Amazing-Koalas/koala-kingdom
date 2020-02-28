import PIXI from "pixi.js";

import Game from "./Game";
import TextureAtlas from "./render/TextureAtlas";

import "./style.css";

const canvasID = "game-canvas";

const loader = new PIXI.Loader();

const setup = () => {
    TextureAtlas.init(loader);
    const game = new Game(canvasID);
    game.start();
};

window.onload = () => {
  loader.add("public/assets/sprites.json").load(setup);
};
