import * as PIXI from "pixi.js";
import { GameComponent, RenderFn } from "../framework";
import { GameState } from "../state";
import { CharacterMode, Textures, Scene } from "../constants";

const CharacterTextures = {
    [CharacterMode.Idle]: "idle",
    [CharacterMode.RunDown]: "back_run", 
    [CharacterMode.RunUp]: "front_run",
    [CharacterMode.RunSide]: "side_run",
};

//@ts-ignore this is correct. Don't know why typescript is complaining.
const render: RenderFn<GameState> = (sprite: PIXI.AnimatedSprite, state) => {
    const { world } = state;
    const resource = PIXI.Loader.shared.resources[Textures.Character];
    sprite.scale.x = Math.abs(sprite.scale.x) * world.character.direction;

    sprite.x = Scene.Width / 2 - sprite.width / 2; //world.character.vX;
    sprite.y = Scene.Height / 2 - sprite.height / 2; //world.character.vY;

    resource.spritesheet!.animations;
    const currentAnimation = CharacterTextures[world.character.mode];
    const currentTextures = resource.spritesheet!.animations[currentAnimation];

    if (sprite.textures !== currentTextures) {
        sprite.textures = currentTextures;
        sprite.play();
    }
};

export const Character: GameComponent<GameState> = state => {
    const { world } = state;
    const resource = PIXI.Loader.shared.resources[Textures.Character];
    const sprite = new PIXI.AnimatedSprite(
        resource.spritesheet!.animations.idle
    );
    sprite.x = Scene.Width / 2; //world.character.x;
    sprite.y = Scene.Height / 2 - sprite.height / 2 + 4;//world.character.y;
    sprite.scale = new PIXI.Point(1.5, 1.5);
    sprite.anchor = new PIXI.Point(0.5);
    sprite.play();
    sprite.animationSpeed = 0.15;
    return {
        displayObject: sprite,
        render,
    };
};
