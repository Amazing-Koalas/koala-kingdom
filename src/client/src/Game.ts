import { Renderer } from "./Render";

export class Game {
    // Rendering
    private readonly render: Renderer;

    // HUD and minimap
    // hud: Hud;
    // minimap: Minimap;
    // characterUI: CharacterUI;

    constructor(canvasID: string) {
        this.render = new Renderer(canvasID);

        this.setupEvents();
    }

    private setupEvents() {
        window.addEventListener("keydown", (event: KeyboardEvent) => {
        })
    }

    public start() {
        this.render.enable();
    }

    public pause() {
    }
}
