import * as PIXI from "pixi.js";
import { GameContainer, noop, GameComponent, RenderFn } from "../framework";
import { Textures, Scene } from "../constants";
import { GameState } from "../state";
import { Menu_Button } from "../components/MenuButtons";
import { backgroundSprite } from "../components/Background";

const render: RenderFn<GameState> = (container: PIXI.Container, state) => {
  const { world } = state;
  const resource = PIXI.Loader.shared.resources[Textures.MenuIdle];

  container.x = Scene.Width / 2 - container.width / 2;
  container.y = Scene.Height / 2 - container.height / 2;
};

const titleText = (text: string) => {
  const style = new PIXI.TextStyle({
    align: "center",
    dropShadow: true,
    dropShadowAlpha: 0.6,
    dropShadowAngle: 0.5,
    dropShadowBlur: 12,
    dropShadowColor: "#343a74",
    dropShadowDistance: 12,
    fill: ["#13b3ff", "#0058b0", "#004080"],
    fontFamily: "Impact",
    fontSize: 58,
    fontStyle: "oblique",
    fontVariant: "small-caps",
    letterSpacing: 10,
    miterLimit: 15,
    stroke: "#4e4e4e",
    wordWrap: true,
  });


  let title = new PIXI.Text(text, style);
  title.x = Scene.Width / 2;
  title.y = Scene.Height / 2 - title.height - 30;
  title.anchor.set(0.5);
  return title;
};
/**
 * Creates Menu.
 *
 */

export const Menu: GameComponent<GameState> = (state) => {
  let x = Scene.Width / 2;
  let y = Scene.Height / 2.3;
  backgroundSprite.scale.x = 3.5;//1.25
  console.log(Scene.Height / backgroundSprite.height);
  backgroundSprite.scale.y = 1.75; //0.56
  backgroundSprite.tilePosition.x = 0;
  backgroundSprite.tilePosition.y = 0;
  const { world } = state;

  const resource = PIXI.Loader.shared.resources[Textures.MenuIdle];
  const texture = resource.textures!["menu_button_idle0.png"];

  const title = titleText("Koala Kingdom");
  GameContainer.addChild(title);

  let buttonContainer: PIXI.Container = new PIXI.Container();

  console.log("Menu Creation");
  const start = new Menu_Button(x, y, "START");
  const instructions = new Menu_Button(x, y + 50, "INSTRUCTIONS");
  const hello = new Menu_Button(x, y + 100, "HELLO");
  buttonContainer.addChild(start);
  buttonContainer.addChild(instructions);
  buttonContainer.addChild(hello);

  start.on("click", (_onclick) => {
    buttonContainer.visible = false;
    GameContainer.children[4].visible = true;
  });

  return {
    displayObject: buttonContainer,
    render: noop,
  };
};
