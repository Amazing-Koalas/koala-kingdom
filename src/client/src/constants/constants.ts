export enum CharacterMode {
  RunUp,
  RunDown,
  RunSide,
  IdleFront,
  IdleBack,
  IdleSide,
}

export const KeyCodes = {
  Space: "Space",
  ArrowUp: "ArrowUp",
  ArrowDown: "ArrowDown",
  ArrowLeft: "ArrowLeft",
  ArrowRight: "ArrowRight",
  ShiftLeft: "ShiftLeft",
  Escape: "Escape",
};

export const CardinalDirection = {
  North: 10,
  East: 1,
  South: -10,
  West: -1,
};
export const Scene = {
  Width: 1280,
  Height: 578,
};

export const Textures = {
  Character: "assets/character/hero.json",
  Background: "assets/background/terrain.json",
  MenuIdle: "assets/menu/menu_button_idle.json",
  MenuFocus: "assets/menu/menu_button_focus.json",
};

export const Sounds = {
  MenuMusic: "assets/audio/menu_music.wav",
  MenuSelect: "assests/audio/menu_select.mp3",
  MenuSwitch: "assests/audio/menu_switch.mp3",
  WorldTrack: "assests/audio/Forest Drama.mp3",
};

export const World = {
  Character: {
    Speed: 1,
    //Direction: CardinalDirection.South,
  },
};
