import * as PIXI from "pixi.js";
import { GameComponent, RenderFn } from "../framework";
import { GameState } from "../state";
import { CharacterMode, Textures } from "../constants";

const CharacterTextures = {
    [CharacterMode.Idle]: "idle",
    [CharacterMode.RunningVertical]: "running",
    [CharacterMode.RunningHorizontal]: "running",
    //[CharacterMode.RunningDiagonal]: "running",
    //[CharacterMode.RunningWest]: "running",
    //[CharacterMode.RunningSouth]: "running",
    [CharacterMode.Falling]: "falling",
    [CharacterMode.Jumping]: "jumping",
};

//@ts-ignore this is correct. Don't know why typescript is complaining.
const render: RenderFn<GameState> = (sprite: PIXI.AnimatedSprite, state) => {
    const { world } = state;
    const resource = PIXI.Loader.shared.resources[Textures.Character];
    sprite.scale.x = Math.abs(sprite.scale.x) * world.character.direction;

    sprite.x += world.character.vX;
    sprite.y += world.character.vY;

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
    sprite.x = world.character.x;
    sprite.y = world.character.y;
    sprite.scale = new PIXI.Point(1.5, 1.5);
    sprite.anchor = new PIXI.Point(0.5, 0.5);
    sprite.play();
    sprite.animationSpeed = 0.2;
    return {
        displayObject: sprite,
        render,
    };
};
