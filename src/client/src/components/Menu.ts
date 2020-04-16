
import * as PIXI from "pixi.js";
import { noop, GameComponent, RenderFn } from "../framework";
import { Textures, Scene } from "../constants";
import { GameState } from "../state";
import { Menu_Button } from "../components/MenuButtons";


const render: RenderFn<GameState> = (sprite: PIXI.Sprite, state) => {
  const { world } = state;
  const resource = PIXI.Loader.shared.resources[Textures.MenuIdle];

  sprite.x = Scene.Width / 2 - sprite.width / 2;//world.character.vX;
  sprite.y = Scene.Height / 2 - sprite.height / 2;//world.character.vY;
};
/**
 * Creates Menu.
 *
 */

export const Menu: GameComponent<GameState> = state => {
  const { world } = state;
  /*const resource = PIXI.Loader.shared.resources[Textures.MenuIdle];
  const container = new PIXI.Container();
  
  const start = new Menu_Button(container, -500, this.game.config.height * 0.55, "PLAY");

  container.addChild(start);
  */
 const resource = PIXI.Loader.shared.resources[Textures.MenuIdle];
 const texture = resource.textures!["menu_button_idle0.png"];

 const button = new PIXI.Sprite(texture);

 button.x = Scene.Width / 2;
 button.y = Scene.Height / 2;
 button.scale = new PIXI.Point(2, 2);
 button.anchor = new PIXI.Point(0.5, 0.5);

  return {
    displayObject: button,
    render: noop
  };
};

