import { KeyboardState, GameContainer } from "../../framework";
import {
  menuContainer,
  buttonContainer,
  helpContainer,
  creditsContainer,
} from "../Menu";
import { Sounds } from "../../constants";
import Sound from "pixi-sound";

const escapeHome = (keyboard: KeyboardState) => {
  if (keyboard.Escape) {
    GameContainer.getChildByName("Character").visible = false;
    menuContainer.getChildByName("title").visible = true;
    helpContainer.visible = false;
    creditsContainer.visible = false;
    buttonContainer.visible = true;
    if (worldMusic.isPlaying) {
      worldMusic.pause();
    }
    scene("");
  }
};

const sound = Sound.Sound.from({
  url: "assets/audio/menu_select.mp3",
  preload: true,
  volume: 0.0005,
  //loop: true
});

const menuMusic = Sound.Sound.from({
  url: "assets/audio/Title.mp3",
  autoPlay: true,
  preload: true,
  volume: 0.1,
  loop: true,
});

const worldMusic = Sound.Sound.from({
  url: "assets/audio/Forest Drama.mp3",
  preload: true,
  volume: 0.0004,
  loop: true,
});

const playMenuMusic = () => {
  if (menuMusic.paused) {
    //menuMusic.paused = false;
    menuMusic.resume();
  }
};
const initiated: boolean = false;
const initMusic = () => {
  if (!initiated) {
    menuMusic.play();
  }
};
const scene = (scene: string) => {
  switch (scene) {
    case "start":
      menuMusic.pause();
      worldMusic.play();
      //menuMusic.paused = true;
      sound.play();
      buttonContainer.visible = false;
      menuContainer.getChildByName("title").visible = false;
      GameContainer.getChildByName("Character").visible = true;
      break;
    case "help":
      //menuMusic.paused =true;
      menuMusic.pause();
      sound.play();
      buttonContainer.visible = false;
      helpContainer.visible = true;
      break;

    case "credits":
      //menuMusic.paused =true;
      menuMusic.pause();
      sound.play();
      buttonContainer.visible = false;
      creditsContainer.visible = true;
      break;
    default:
      playMenuMusic();
      break;
  }
};

export const calculateMenuState = (keyboard: KeyboardState) => {
  //sound;
  initMusic;
  //menuMusic.play();
  if (keyboard.Escape) {
    escapeHome(keyboard);
  }
  buttonContainer.getChildByName("start").on("click", (_onclick) => {
    scene("start");
  });
  buttonContainer.getChildByName("help").on("click", (_onclick) => {
    scene("help");
  });
  buttonContainer.getChildByName("credits").on("click", (_onclick) => {
    scene("credits");
  });
};
