import { KeyboardState } from "../../framework";
import { GameState } from "../../state";
import {
  World,
  CardinalDirection,
  CharacterMode,
  Scene,
} from "../../constants";

const getCharacterMoveDirection = (
  keyboard: KeyboardState,
  prevDirection: number
) => {
  if (keyboard.ArrowRight) {
    return CardinalDirection.East;
  } else if (keyboard.ArrowLeft) {
    return CardinalDirection.West;
  } else if (keyboard.ArrowUp) {
    return CardinalDirection.North;
  } else if (keyboard.ArrowDown) {
    return CardinalDirection.South;
  }
  return prevDirection;
};

const isCharacterMovingX = (keyboard: KeyboardState) =>
  keyboard.ArrowLeft || keyboard.ArrowRight;

const isCharacterMovingY = (keyboard: KeyboardState) =>
  keyboard.ArrowUp || keyboard.ArrowDown;

const getCharacterMode = (movingX: boolean, movingY: boolean, direction) => {
  if (movingX) {
    return CharacterMode.RunSide;
  } else if (movingY) {
    if (direction === CardinalDirection.South) {
      return CharacterMode.RunUp;
    } else {
      return CharacterMode.RunDown;
    }
  } else if (direction === CardinalDirection.South) {
    return CharacterMode.IdleFront;
  } else if (direction === CardinalDirection.North) {
    return CharacterMode.IdleBack;
  }
  return CharacterMode.IdleSide;
};

const getCharacterV = (keyboard: KeyboardState, speed: number) => {
  const velocities = {
    vX: 0,
    vY: 0,
  };
  if (keyboard.ArrowUp) {
    velocities.vY -= 1 * speed;
  }
  if (keyboard.ArrowDown) {
    velocities.vY += 1 * speed;
  }
  if (keyboard.ArrowLeft) {
    velocities.vX -= 1 * speed;
  }
  if (keyboard.ArrowRight) {
    velocities.vX += 1 * speed;
  }
  return velocities;
};

const getCharacterSpeed = (keyboard: KeyboardState, prevSpeed: number) =>{
    if(keyboard.ShiftLeft){
        return 4;
    }
    return 1;
}

export const calculateCharacterState = (
  { world }: GameState,
  keyboard: KeyboardState
) => {
  const movingX = isCharacterMovingX(keyboard);
  const movingY = isCharacterMovingY(keyboard);
  const direction = getCharacterMoveDirection(
    keyboard,
    world.character.direction
  );
  const speed = getCharacterSpeed(keyboard, world.character.speed);
  const mode = getCharacterMode(movingX, movingY, direction);
  const v = getCharacterV(keyboard, speed);
  return {
    direction,
    vX: v.vX,
    vY: v.vY,
    mode,
    speed,
    x: world.character.x + v.vX,
    y: world.character.y + v.vY,
  };
};
