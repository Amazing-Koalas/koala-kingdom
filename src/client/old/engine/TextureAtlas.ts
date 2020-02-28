import * as PIXI from "pixi.js";

const enum AnimationName {
    HERO_IDLE = "Hero-idle",
    FLOOR_IDLE = "Floor-idle",
    WALL_IDLE = "Wall_idle",
    GOLD_IDLE = "Gold-idle",
    MONSTER_IDLE = "Monster-idle",
    TORCH_IDLE = "Torch-idle",
    CHEST_IDLE = "Chest-idle",
    CHEST_IDLE2 = "Chest-idle2",
    DOOR_IDLE = "Door-idle",
    DOOR_IDLE2 = "Door-idle2",
    DUMMY_IDLE = "Dummy-idle",  // animation if it cannot be loaded
}

type AnimationToTextureMap = Map<AnimationName, string>;
const animationToTextureMap: AnimationToTextureMap = new Map();
animationToTextureMap
    .set(AnimationName.HERO_IDLE, "sprite350")
    .set(AnimationName.FLOOR_IDLE, "sprite210")
    .set(AnimationName.WALL_IDLE, "sprite170")
    .set(AnimationName.GOLD_IDLE, "sprite250")
    .set(AnimationName.MONSTER_IDLE, "sprite378")
    .set(AnimationName.TORCH_IDLE, "sprite247")
    .set(AnimationName.CHEST_IDLE, "sprite244")
    .set(AnimationName.CHEST_IDLE2, "sprite245")
    .set(AnimationName.DOOR_IDLE, "sprite161")
    .set(AnimationName.DOOR_IDLE2, "sprite163");

// {
//     Textures.HERO_IDLE: "sprite350",
// };

export class TextureAtlas {
  private static atlas: PIXI.ITextureDictionary; // PIXI.

  static init(loader: PIXI.Loader) {
    const spritesheet: string = "public/assets/spritesheet.json";
    loader.add(spritesheet);
    this.atlas = loader.resources[spritesheet]?.textures?;
  }

  static getSpriteTexture(animationName: AnimationName): PIXI.Texture {
    const file = animationToTextureMap.get(animationName) || <string> animationToTextureMap.get(AnimationName.DUMMY_IDLE);
    return this.atlas[file];
  }
}

export default TextureAtlas;
