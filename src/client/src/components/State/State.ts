import * as PIXI from "pixi.js";
import {
  GameComponent,
  getKeyboardState,
  RenderFn,
  GameContainer,
} from "../../framework";
import { GameState } from "../../state";
import { calculateCharacterState } from "./characterState";
import { calculateMenuState } from "./menuState";
import { World } from "../../constants";

const render: RenderFn<GameState> = (_, state) => {
  const keyboard = getKeyboardState();
  if (GameContainer.getChildByName("Character").visible) {
    state.world.character = calculateCharacterState(state, keyboard);
  }
  calculateMenuState(keyboard);
};

/**
 * Calculates new state on each frame.
 */
export const State: GameComponent<GameState> = () => {
  return {
    displayObject: new PIXI.Sprite(),
    render,
  };
};
