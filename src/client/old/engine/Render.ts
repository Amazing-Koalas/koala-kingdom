import * as PIXI from "pixi.js";

import Hud from "../ui/Hud";
import Actor from "../Actor";

export class Renderer {
  private running = false;

  private readonly renderer: PIXI.Renderer;
  private readonly stage: PIXI.Container;

  private hudContainer: PIXI.Container;

  constructor(canvasID: string) {
    const canvas = <HTMLCanvasElement>document.getElementById(canvasID);

    this.renderer = PIXI.autoDetectRenderer({
      width: window.innerWidth,
      height: window.innerHeight,
      antialias: true,
      view: canvas,
      backgroundColor: 0x1099bb
    });

    this.stage = new PIXI.Container();

    this.hudContainer = new PIXI.Container();

    const text = new PIXI.Text("Hello World");
    text.x = 50;
    text.y = 100;
    this.stage.addChild(text);

    this.setupEvents();
  }

  private setupEvents() {
    window.addEventListener("resize", () => {
      this.renderer.resize(window.innerWidth, window.innerHeight);
      console.debug("resizing");
    });
  }

  private renderLoop = (tick: number): void => {
    requestAnimationFrame(this.renderLoop);

    if (this.running === true) {
      this.renderer.render(this.stage);
    }
  };

  public enable() {
    this.running = true;
    requestAnimationFrame(this.renderLoop);
  }

  public disable() {
    this.running = false;
  }

  public addHud(hud: Hud) {
    this.hudContainer.addChild(hud.toolbarHUD);
  }

  public addActor(actor: Actor) {}
}

export default Renderer;
