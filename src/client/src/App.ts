import * as PIXI from "pixi.js";

import { Game, GameArgs } from "./framework";
import { TextureLoader } from "./framework/TextureLoader";
import { Component } from './framework/Component';

const textureMap = {
    Character: "assets/character/adventurer.json",
};

interface AppArgs extends GameArgs {
    store: Store<State>
}

export class App implements Component {
    character: CharacterData;
    constructor(args: AppArgs) {
        this.character = new Character(args.store);
        // const loader = TextureLoader.loadAssets(textureMap);
        // const rootContainer = new PIXI.Container();
        // super(args);
    }

    public mount(): PIXI.DisplayObject {
        const rootContainer = new PIXI.Container();
        rootContainer.addChild(this.character.mount());
        throw new Error("Method not implemented.");
    }

    public unmount(): void {
        throw new Error("Method not implemented.");
    }

    public render(sprite: PIXI.DisplayObject): void {
        throw new Error("Method not implemented.");
    }
}