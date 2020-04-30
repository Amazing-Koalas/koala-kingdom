import * as PIXI from "pixi.js";
import { Textures, Scene, World } from "../constants";
import { GameComponent, noop, RenderFn } from "../framework";
import { GameState } from "../state";
//import { TilingSprite } from "@pixi/sprite-tiling";

const render: RenderFn<GameState> = (sprite: PIXI.TilingSprite, state) => {
    const { world } = state;
    sprite.tilePosition.x -= world.character.vX;
    sprite.tilePosition.y -= world.character.vY;
};

export let backgroundSprite: PIXI.TilingSprite;

/**
 * Creates background sprite.
 */
export const Background: GameComponent<GameState> = () => {
    const resource = PIXI.Loader.shared.resources[Textures.Background];
    const texture = resource.textures!["terrain.png"];
    const { width, height } = texture;
    backgroundSprite = new PIXI.TilingSprite(
        texture,
        texture.baseTexture.width,
        texture.baseTexture.height
    );
    backgroundSprite.scale.x = Scene.Width / width;
    backgroundSprite.scale.y = Scene.Height / height;
    backgroundSprite.tilePosition.x = 0;
    backgroundSprite.tilePosition.y = 0;
    return {
        displayObject: backgroundSprite,
        render, //: noop,
    };
};
