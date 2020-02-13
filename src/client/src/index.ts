// import PIXI from "pixi.js";
import "./style.css"
import { Game } from "./Game";

const canvasID = "game-canvas"

const setup = () => {
}

window.onload = () => {
    const game = new Game(canvasID)
}