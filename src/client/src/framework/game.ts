import * as PIXI from "pixi.js";
import { Loader } from "pixi.js";
import "pixi-sound";
import { Sounds } from "../constants";
export interface AppConfig {
  view: HTMLCanvasElement;
  width: number;
  height: number;
}

//export type RenderFn<T> = (displayObject: PIXI.DisplayObject, state: T) => void;
export type RenderFn<T> = (displayObject: PIXI.DisplayObject, state: T) => void;

export const GameContainer = new PIXI.Container();

export type GameComponent<T> = (
  state: T
) => {
  displayObject: PIXI.DisplayObject;
  render: RenderFn<T>;
};

/**
 * Initializes game components.
 *
 * @param app instance of Pixi Application
 * @param components array of game components
 * @param state game state
 */
export const initializeComponents = <T>(
  app: PIXI.Application,
  components: GameComponent<T>[],
  state: T
) => {
  //const container = new PIXI.Container();
  components.forEach((component) => {
    const cmp = component(state);
    cmp.displayObject.name = component.name;
    GameContainer.addChild(cmp.displayObject);
    app.ticker.add(() => {
      cmp.render(cmp.displayObject, state);
    });
  });

  return () => {
    app.stage.addChild(GameContainer);
    app.renderer.render(app.stage);
  };
};

/**
 * Gets canvas element from DOM.
 * Throws error in case it cannot be found.
 *
 * @param id id of canvas element
 */
export const getCanvasEl = (id: string) => {
  const canvas = document.getElementById(id) as HTMLCanvasElement | null;
  if (!canvas) {
    throw new Error(`Canvas with specified id ${id} not found.`);
  }
  return canvas;
};

/**
 * Gets instance of PIXI Application.
 *
 * @param config initial config
 */
export const createPixiApp = (config: AppConfig) => {
  return new PIXI.Application(config);
};

/**
 * Promisified version of PIXI Loader.
 * Loads all required assets.
 *
 * @param textures map of textures to their paths
 */
export const loadPixiAssets = (textures: { [key: string]: string }) => {
  return new Promise((resolve) => {
    Loader.shared.add(
      Object.keys(textures).map((key: keyof typeof textures) => textures[key])
    );
    Loader.shared.load(resolve);
  });
};
/*
export const loadPixiSounds = (sounds: { [key: string]: string }) => {
  
  
    Object.keys(sounds).forEach((value: string) => {
      Loader.shared.add(value, sounds[value]).load()  
      Sound.Sound.from({
        url: sounds[value],
        preload: true,
        volume: 0.05,
        //loop: true
      });
      
    });
    PIXI.Loader.shared.load();
  
  //console.log(PIXI.Loader.)
  //PIXI.Loader.shared.add(Object.keys(sounds).map((key: keyof typeof sounds) => sounds[key]));
  //sounds. PIXI.Loader.shared.load(function(loader, audio))
};*/

export const preloadSounds = () => {
  Loader.shared.add(
    Object.keys(Sounds).map((key: keyof typeof Sounds) => Sounds[key])
    );
    /*
  for (let sound in Sounds) {
    Loader.shared.add(Sounds[sound], Sounds[sound]);
  }*/

  Loader.shared.load(function (_loader, resources) {
    for (let sound in Sounds) {
      const snd = resources[sound].sound;
      snd.preload = true;
    }
  });

  console.log(Loader.shared.resources);
  /*
  Loader.shared.add('MenuMusic', 'assets/audio/Title.mp3');
  Loader.shared.add('MenuSelect', 'assets/audio/menu_select.mp3');
  Loader.shared.add('MenuSwitch', 'assets/audio/menu_switch.mp3');
  Loader.shared.add('WorldTrack', 'assets/audio/Forest Drama.mp3');
*/
};
