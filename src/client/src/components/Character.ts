import * as PIXI from "pixi.js";
import { Component, GameObject } from "../framework";
import { GameState } from "../state";
import { CharacterMode, Textures, Scene } from "../constants";
import { Store } from '../framework/Store';

export interface CharacterState {
    name: string,
}

export interface CharacterDispatch {
    attack: () => void;
    move: (direction: string) => void;
}

export const CharacterTextureMap = {
    "Character": "assets/character/adventurer.json"
};

export class Character implements Component {
    private store: Store<GameState>
    constructor(store: Store<GameState, Action>) {
        this.store = store;
    }

    mount(): GameObject {
        // store.register("");
        throw new Error("Method not implemented.");

        doAFter30Seconds(this.distpach(attack({dmg: 5 })))

        this.store.watch("USER.X_POSTION", this.update)
        return new PIXI.Sprite()
    }

    unmount(): void {
        // this.store.unregister(this, 'user')
        throw new Error("Method not implemented.");
    }

    render(gob: GameObject): void {
        const sprite = gob;

        const { world } = state;
        const resource = ctx.loader.resources[Textures.Character];
        sprite.scale.x = Math.abs(sprite.scale.x) * world.character.direction;

        sprite.x = Scene.Width / 2 - sprite.width / 2;//world.character.vX;
        sprite.y = Scene.Height / 2 - sprite.height / 2;//world.character.vY;

    resource.spritesheet!.animations;
    const currentAnimation = CharacterTextures[world.character.mode];
    const currentTextures = resource.spritesheet!.animations[currentAnimation];

    if (sprite.textures !== currentTextures) {
        sprite.textures = currentTextures;
        sprite.play();
    }
    throw new Error("Method not implemented.");
    }
}

// const CharacterTextures = {
//     [CharacterMode.Idle]: "idle",
//     [CharacterMode.RunningVertical]: "running",
//     [CharacterMode.RunningHorizontal]: "running",
//     //[CharacterMode.RunningDiagonal]: "running",
//     //[CharacterMode.RunningWest]: "running",
//     //[CharacterMode.RunningSouth]: "running",
//     [CharacterMode.Falling]: "falling",
//     [CharacterMode.Jumping]: "jumping",
// };

// //@ts-ignore this is correct. Don't know why typescript is complaining.
// const render: RenderFn<GameState> = (sprite: PIXI.AnimatedSprite, state) => {
//     const { world } = state;
//     const resource = PIXI.Loader.shared.resources[Textures.Character];
//     sprite.scale.x = Math.abs(sprite.scale.x) * world.character.direction;

//     sprite.x = Scene.Width / 2 - sprite.width / 2;//world.character.vX;
//     sprite.y = Scene.Height / 2 - sprite.height / 2;//world.character.vY;

//     resource.spritesheet!.animations;
//     const currentAnimation = CharacterTextures[world.character.mode];
//     const currentTextures = resource.spritesheet!.animations[currentAnimation];

//     if (sprite.textures !== currentTextures) {
//         sprite.textures = currentTextures;
//         sprite.play();
//     }
// };

// export const Character: GameComponent<GameState> = state => {
//     const { world } = state;
//     const resource = PIXI.Loader.shared.resources[Textures.Character];
//     const sprite = new PIXI.AnimatedSprite(
//         resource.spritesheet!.animations.idle
//     );
//     sprite.x = Scene.Width / 2; //world.character.x;
//     sprite.y = Scene.Height / 2 - sprite.height / 2;//world.character.y;
//     sprite.scale = new PIXI.Point(1.5, 1.5);
//     sprite.anchor = new PIXI.Point(0.5);
//     sprite.play();
//     sprite.animationSpeed = 0.2;
//     return {
//         displayObject: sprite,
//         render,
//     };
// };
