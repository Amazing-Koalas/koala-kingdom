import * as PIXI from "pixi.js";
import { GameComponent, RenderFn } from "../framework";
import { GameState } from "../state";
import {
  CharacterMode,
  Textures,
  Scene,
  CardinalDirection,
} from "../constants";

const CharacterTextures = {
  [CharacterMode.IdleFront]: "idle_front",
  [CharacterMode.IdleBack]: "idle_back",
  [CharacterMode.IdleSide]: "idle_side",
  [CharacterMode.RunDown]: "back_run",
  [CharacterMode.RunUp]: "front_run",
  [CharacterMode.RunSide]: "side_run",
};

//@ts-ignore this is correct. Don't know why typescript is complaining.
const render: RenderFn<GameState> = (sprite: PIXI.AnimatedSprite, state) => {
  const { world } = state;
  const resource = PIXI.Loader.shared.resources[Textures.Character];
  if (
    world.character.direction === CardinalDirection.East ||
    world.character.direction === CardinalDirection.West
  ) {
    sprite.scale.x = Math.abs(sprite.scale.x) * world.character.direction;
  }

  if(world.character.speed > 0.75){
    sprite.animationSpeed = 0.2;
  }else sprite.animationSpeed = 0.125;

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

export const Character: GameComponent<GameState> = (state) => {
  const { world } = state;
  const resource = PIXI.Loader.shared.resources[Textures.Character];
  const sprite = new PIXI.AnimatedSprite(
    resource.spritesheet!.animations.idle_side
  );
  sprite.x = Scene.Width / 2; //world.character.x;
  sprite.y = Scene.Height / 2 - sprite.height / 2 + 4; //world.character.y;
  sprite.scale = new PIXI.Point(1.5, 1.5);
  sprite.anchor = new PIXI.Point(0.5);
  sprite.play();
  sprite.animationSpeed = 0.125;
  return {
    displayObject: sprite,
    render,
  };
};
