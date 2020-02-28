import * as PIXI from "pixi.js";

export class Hud {
  private readonly toolbarHUDStart: PIXI.Point = new PIXI.Point(600, 16);

  public readonly toolbarHUD: PIXI.Text;

  constructor() {
    this.toolbarHUD = new PIXI.Text("Example text");
    this.toolbarHUD.position = this.toolbarHUDStart;
  }
}

export default Hud;
