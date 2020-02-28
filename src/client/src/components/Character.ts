import * as PIXI from "pixi.js";
import { GameComponent, RenderFn } from "../framework";
import { GameState } from "../state";
import { CharacterMode } from "../constants";

const CharacterTextures = {
    [CharacterMode.RunningNorth]: "north/crusader_run",
    [CharacterMode.RunningNorthEast]: "north_east/crusader_run",
    [CharacterMode.RunningEast]: "east/crusader_run",
    [CharacterMode.RunningSouthEast]: "south_east/crusader_run",
    [CharacterMode.RunningSouth]: "south/crusader_run",
    [CharacterMode.RunningSouthWest]: "south_west/crusader_run",
    [CharacterMode.RunningWest]: "west/crusader_run",
    [CharacterMode.RunningNorthWest]: "north_west/crusader_run",
};

const render: RenderFn<GameState> = (sprite: PIXI.AnimatedSprite, state) => {
};

export const Character: GameComponent<GameState> = state => {
    const { world } = state;
    const resource = PIXI.Loader.shared.resources["./assets/sprites.json"];
    const sprite = new PIXI.AnimatedSprite(
        resource.spritesheet!.animations.
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
