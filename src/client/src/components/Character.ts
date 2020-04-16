import * as PIXI from "pixi.js";
import { Component, GameObject, TextureLoader, Sprite } from "../framework";
import { GameState, Action, Character as State } from "../state";
import { CharacterMode, Textures, Scene } from "../constants";
import { Store, UnsubscribeFn } from "../framework/Store";

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

export type CharacterArgs = {
    store: Store<GameState, Action>,
    loader: TextureLoader<keyof typeof Textures>,
}
export class Character implements Component<Sprite> {
    private store: Store<GameState, Action>;
    private unsubscribe: UnsubscribeFn;
    private loader: TextureLoader<keyof typeof Textures>;
    private data: State = {
        mode: CharacterMode.Idle,
        speed: 0,
        direction: "north",
        x: 0,
        y: 0,
        vX: 0,
        vY: 0,
    };

    constructor(args: CharacterArgs) {
        this.store = args.store;
        this.loader = args.loader;
    }

    mount(): Sprite {
        this.unsubscribe = this.store.subscribe((state: GameState) => {
            this.data = { ...state.world.character };
        });

        return new Sprite();
    }

    unmount(): void {
        this.unsubscribe();
    }

    render(sprite: Sprite): void {
        const { direction, x, vX, y, vY, mode } = this.data;
        // const resource =  this.loader.resources[Textures.Character];
        const resource = this.loader.getResource("Character");
        const texture = resource.spritesheet.animations[CharacterTextureMap[mode]];
        // sprite.scale.x = Math.abs(sprite.scale.x) * direction;

        // sprite.x = Scene.Width / 2 - sprite.width / 2;//world.character.vX;
        // sprite.y = Scene.Height / 2 - sprite.height / 2;//world.character.vY;
        sprite.x = Math.abs(x + xY);
        sprite.y = Math.abs(y + vY);

        resource.spritesheet!.animations;
        const currentAnimation = CharacterTextures[world.character.mode];
        const currentTextures = resource.spritesheet!.animations[currentAnimation];

        sprite.texture = currentTextures;
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
