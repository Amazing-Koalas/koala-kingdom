import * as PIXI from "pixi.js";
import { GameContainer, noop, GameComponent, RenderFn } from "../framework";
import { Textures, Scene } from "../constants";
import { GameState } from "../state";
import { Menu_Button } from "../components/MenuButtons";

const render: RenderFn<GameState> = (container: PIXI.Container, state) => {
  const { world } = state;
  const resource = PIXI.Loader.shared.resources[Textures.MenuIdle];

  container.x = Scene.Width / 2 - container.width / 2;
  container.y = Scene.Height / 2 - container.height / 2;
};
/**
 * Creates Menu.
 *
 */

export const Menu: GameComponent<GameState> = (state) => {
  const { world } = state;

  const resource = PIXI.Loader.shared.resources[Textures.MenuIdle];
  const texture = resource.textures!["menu_button_idle0.png"];

  let buttonContainer: PIXI.Container = new PIXI.Container();

  let x = Scene.Width / 2;
  let y = Scene.Height / 2.3;
  console.log("Menu Creation");
  const start = new Menu_Button(x, y, "START");
  const instructions = new Menu_Button(x, y + 50, "INSTRUCTIONS");
  const hello = new Menu_Button(x, y + 100, "HELLO");
  buttonContainer.addChild(start);
  buttonContainer.addChild(instructions);
  buttonContainer.addChild(hello);

  start.on("click", (_onclick) => {
    buttonContainer.visible = false;
    GameContainer.children[3].visible = true;
  });

  return {
    displayObject: buttonContainer,
    render: noop,
  };
};
