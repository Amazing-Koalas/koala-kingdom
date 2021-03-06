import { Textures, Sounds } from "../constants";
import * as PIXI from "pixi.js";
import * as SOUND from "pixi-sound";

export class Menu_Button extends PIXI.Sprite {
  text: PIXI.Text;
  style: PIXI.TextStyle;
  sound: SOUND.default.Sound;

  constructor(x: number, y: number, text: string) {
    const resource = PIXI.Loader.shared.resources[Textures.MenuIdle];
    const texture = resource.textures!["menu_button_idle0.png"];
    super(texture);
    this.x = x;
    this.y = y;
    this.scale = new PIXI.Point(2.5, 2.5);
    this.anchor.set(0.5);
    this.interactive = true;
    this.buttonMode = true;
    this.setText(text);
    this.accessibleTitle = this.name = text.toLowerCase();
    this.accessible = true;
    //this.accessibleTitle = this.name;
    this.sound = SOUND.default.Sound.from({
      url: "assets/audio/menu_switch.mp3",
      preload: true,
      volume: 0.1,
      //loop: true
    });
    this.on("mouseover", this.focus).on("mouseout", this.idle);
  }

  setText(text: string) {
    this.style = new PIXI.TextStyle({
      fontFamily: "monospace",
      fontStyle: "bold",
      //fill: "#ffbf00",
      align: "center",
    });
    this.text = new PIXI.Text(text, this.style);
    this.idle();
    this.addChild(this.text);
  }

  focus() {
    const resource = PIXI.Loader.shared.resources[Textures.MenuFocus];
    const texture = resource.textures!["menu_button_focus0.png"];
    this.style.fontSize = 14;
    this.text.anchor.set(0.5, 0.4);
    this.texture = texture;
    this.sound.play();
  }

  idle() {
    const resource = PIXI.Loader.shared.resources[Textures.MenuIdle];
    const texture = resource.textures!["menu_button_idle0.png"];
    this.texture = texture;
    this.style.fontSize = 9.5;
    this.text.anchor.set(0.5, 0.5);
  }
}
