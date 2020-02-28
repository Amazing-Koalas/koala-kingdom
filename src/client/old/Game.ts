import Renderer from "./render/Render";
import Hud from "./ui/Hud";

export class Game {
  // Rendering
  public readonly render: Renderer;

  // public stateClient
  // loader

  // HUD and minimap
  hud: Hud;
  // minimap: Minimap;
  // characterUI: CharacterUI;

  constructor(canvasID: string) {
    this.render = new Renderer(canvasID);
    this.hud = new Hud();

    this.render.addHud(this.hud);

    this.setupEvents();
  }

  private setupEvents() {
    window.addEventListener("keydown", (event: KeyboardEvent) => {});
  }

  public start() {
    this.render.enable();
  }
}

export default Game;
