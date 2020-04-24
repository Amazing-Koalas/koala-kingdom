import * as PIXI from "pixi.js";
import { noop, GameComponent, RenderFn } from "../framework";
import { Textures, Scene } from "../constants";
import { GameState } from "../state";
import { Menu_Button } from "../components/MenuButtons";

const render: RenderFn<GameState> = (container: PIXI.Container, state) => {
  const { world } = state;
  const resource = PIXI.Loader.shared.resources[Textures.MenuIdle];

    container.x = Scene.Width / 2 - container.width / 2;
    container.y = Scene.Height / 2 - container.height / 2;
}
/**
 * Creates Menu.
 *
 */

export const Menu: GameComponent<GameState> = (state) => {
  const { world } = state;
  /*const resource = PIXI.Loader.shared.resources[Textures.MenuIdle];
  const container = new PIXI.Container();
  
  const start = new Menu_Button(container, -500, this.game.config.height * 0.55, "PLAY");

  container.addChild(start);
  */
  const resource = PIXI.Loader.shared.resources[Textures.MenuIdle];
  const texture = resource.textures!["menu_button_idle0.png"];

  let buttonArray: PIXI.Sprite[] = new Array(3);
  let buttonContainer: PIXI.Container = new PIXI.Container();

  for (var i = 0; i < 3; i++) {
    const button = new PIXI.Sprite(texture);

    button.x = Scene.Width / 2;
    button.y = Scene.Height / 2.75 + i * 80;
    button.scale = new PIXI.Point(3, 3);
    button.anchor.set(0.5);
    buttonArray[i] = button;
    buttonContainer.addChild(button);
  }

  return {
    displayObject: buttonContainer,
    render: noop,
  };
};
