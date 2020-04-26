import * as PIXI from "pixi.js";
import * as SOUND from "pixi-sound";
import { noop, GameComponent, RenderFn, loadPixiAssets } from "../framework";
import { Sounds, Scene } from "../constants";
import { GameState } from "../state";
import { Menu_Button } from "../components/MenuButtons";
import { backgroundSprite } from "../components/Background";

const render: RenderFn<GameState> = (container: PIXI.Container, state) => {
  container.x = Scene.Width / 2 - container.width / 2;
  container.y = Scene.Height / 2 - container.height / 2;
};

export const menuContainer: PIXI.Container = new PIXI.Container();
export const buttonContainer: PIXI.Container = new PIXI.Container();
export const helpContainer: PIXI.Container = new PIXI.Container();
export const creditsContainer: PIXI.Container = new PIXI.Container();

const setupContainers = () => {
  const style = new PIXI.TextStyle({
    align: "center",
    dropShadow: true,
    dropShadowAngle: 0.4,
    dropShadowBlur: 7,
    dropShadowColor: "#3e4a86",
    dropShadowDistance: 6,
    fill: ["#6f92a4", "black"],
    fillGradientStops: [0],
    fontFamily: "Courier New",
    fontSize: 37,
    fontVariant: "small-caps",
    fontWeight: "bold",
    letterSpacing: 5,
    miterLimit: 15,
    strokeThickness: 2,
  });
  const helpText = new PIXI.Text(
    "Controls\nMove: Arrows\nSprint: Left Shift\nMenu: Esc",
    style
  );
  helpText.anchor.set(0.5);
  helpContainer.addChild(helpText);
  helpText.x = Scene.Width / 2;
  helpText.y = Scene.Height / 2;
  helpContainer.visible = false;

  const creditsText = new PIXI.Text(
    "Jemal Abdullahi\nDave Tran\nJared Rickert\nMichael Harrison",
    style
  );
  creditsText.anchor.set(0.5);
  creditsText.x = Scene.Width / 2;
  creditsText.y = Scene.Height / 2;
  creditsContainer.addChild(creditsText);
  creditsContainer.visible = false;

  helpContainer.name = "helpContainer";
  creditsContainer.name = "creditsContainer";
  menuContainer.addChild(helpContainer, creditsContainer);
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
  
  SOUND.default.Sound.from({
    url: "assets/audio/menu_music.wav",
    preload: true,
    loaded: function(_err, sound) {
      sound.play();
    },
    volume: 0.1
  });
  let x = Scene.Width / 2;
  let y = Scene.Height / 2.3;
  backgroundSprite.scale.x = 3.5;
  backgroundSprite.scale.y = 1.75;
  backgroundSprite.tilePosition.x = 650;
  backgroundSprite.tilePosition.y = 600;

  const title = titleText("Koala Kingdom");
  title.name = "title";
  menuContainer.addChild(title);

  const start = new Menu_Button(x, y, "START");
  const help = new Menu_Button(x, y + 50, "HELP");
  const credits = new Menu_Button(x, y + 100, "CREDITS");

  buttonContainer.addChild(start);
  buttonContainer.addChild(help);
  buttonContainer.addChild(credits);

  buttonContainer.name = "buttonContainer";
  menuContainer.addChild(buttonContainer);

  setupContainers();

  return {
    displayObject: menuContainer,
    render: noop,
  };
};
