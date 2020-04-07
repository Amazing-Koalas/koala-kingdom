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

/**
 * Creates background sprite.
 */
export const Background: GameComponent<GameState> = () => {
    const resource = PIXI.Loader.shared.resources[Textures.Background];
    const texture = resource.textures!["Background0.png"];
    const { width, height } = texture;
    const sprite = new PIXI.TilingSprite(
        texture,
        texture.baseTexture.width,
        texture.baseTexture.height
    ); //new PIXI.Sprite(texture);
    sprite.scale.x = Scene.Width / width * 3;
    sprite.scale.y = Scene.Height / height;
    //sprite.width = Scene.Width;
    //sprite.height = Scene.Height;
    sprite.tilePosition.x = 0;
    sprite.tilePosition.y = 0;
    return {
        displayObject: sprite,
        render, //: noop,
    };
};
