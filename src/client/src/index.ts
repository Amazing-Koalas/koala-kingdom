////////////////////////////////////////
/// Sketch
////////////////////////////////////////
import { App } from "./App";
import * as Util from "./framework/utils";
import { Engine, TextureLoader } from "./framework";
import { rootReducer, initState, GameState, Action, globalStore } from "./state";
import { Textures } from "./constants";
import { Character } from "./components/Character";
import { Store, StoreArgs } from "./framework/Store";

const main = async () => {
    const canvasEl = Util.getCanvasEl("game");
    // canvasEl.height = Scene.Height;
    // canvasEl.width = Scene.Width;

    const store = new Store({
        reducer: rootReducer,
        initState: initState
    } as StoreArgs<GameState, Action> // FIXME: work around for now
    );
    const loader = await TextureLoader.loadAssets( { textureMap: Textures });
    const character = new Character({ store, loader });
    // const [store, loader] = await Promise.all([
    //     // new Promise(resolve => new Store<State>({ initialState: initialState() })),
    //     new Promise(res => res("Ok")),
    //     TextureLoader.loadAssets(Textures),
    // ]);

    // loader.getResource("Character");
    // loader.getResource("a");

    const app = new App({ store });

    const engine = new Engine({
        components: [character],
        canvas: canvasEl,
        // textureMap: Textures,
        // game: app
    });

    engine.run(app).then(() => {
        console.log("launching client");
    });
};

main();
