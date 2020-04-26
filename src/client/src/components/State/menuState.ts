import { KeyboardState, GameContainer } from "../../framework";
import {
  menuContainer,
  buttonContainer,
  helpContainer,
  creditsContainer,
} from "../Menu";

const escapeHome = (keyboard: KeyboardState) => {
  if (keyboard.Escape) {
    GameContainer.getChildByName("Character").visible = false;
    menuContainer.getChildByName("title").visible = true;
    helpContainer.visible = false;
    creditsContainer.visible = false;
    buttonContainer.visible = true;
  }
};

export const calculateMenuState = (keyboard: KeyboardState) => {
  escapeHome(keyboard);
  buttonContainer.getChildByName("start").on("click", (_onclick) => {
    buttonContainer.visible = false;
    menuContainer.getChildByName("title").visible = false;
    GameContainer.getChildByName("Character").visible = true;
  });
  buttonContainer.getChildByName("help").on("click", (_onclick) => {
    buttonContainer.visible = false;
    helpContainer.visible = true;
  });
  buttonContainer.getChildByName("credits").on("click", (_onclick) => {
    buttonContainer.visible = false;
    creditsContainer.visible = true;
  });
};
