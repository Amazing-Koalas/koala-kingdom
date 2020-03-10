import * as PIXI from "pixi.js";
import { GameComponent, RenderFn } from "../framework";
import { GameState } from "../state";
import { CharacterMode, Textures } from "../constants";

const CharacterTextures = {
    [CharacterMode.Idle]: "idle",
    [CharacterMode.RunningVertical]: "running",
    [CharacterMode.RunningHorizontal]: "running",
    //[CharacterMode.RunningWest]: "running",
    //[CharacterMode.RunningSouth]: "running",
    [CharacterMode.Falling]: "falling",
    [CharacterMode.Jumping]: "jumping",
};

//@ts-ignore this is correct. Don't know why typescript is complaining.
const render: RenderFn<GameState> = (sprite: PIXI.AnimatedSprite, state) => {
    const { world } = state;
    const resource = PIXI.Loader.shared.resources[Textures.Character];
    sprite.scale.x = world.character.direction
        ? Math.abs(sprite.scale.x) * world.character.direction
        : sprite.scale.x;
    
    sprite.x += world.character.x;
    sprite.y += world.character.y;

    resource.spritesheet!.animations; // what? Why is this here
    const currentAnimation = CharacterTextures[world.character.mode];
    const currentTexture = resource.spritesheet!.animations[currentAnimation];

    if (sprite.textures !== currentTexture) {
        sprite.textures = currentTexture;
        sprite.play();
    }
};

export const Character: GameComponent<GameState> = state => {
    const { world } = state;
    const resource = PIXI.Loader.shared.resources[Textures.Character];
    const sprite = new PIXI.AnimatedSprite(
        resource.spritesheet!.animations.idle
        // resource.spritesheet!.animations.north.crusader_run
    );
    sprite.anchor = new PIXI.Point(0.5, 0.5);
    sprite.x = world.character.x;
    sprite.y = world.character.y;
    sprite.scale = new PIXI.Point(1.5, 1.5);
    sprite.play();
    sprite.animationSpeed = 0.1;
    return {
        displayObject: sprite,
        render,
    };
};
