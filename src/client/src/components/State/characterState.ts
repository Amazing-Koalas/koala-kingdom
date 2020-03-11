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

/*const isCharacterJumping = (jump: number) => {
  return jump > 0;
};*/

const getCharacterMode = (movingX: boolean, movingY: boolean) => {
    if (movingX) {
        return CharacterMode.RunningHorizontal;
    } else if (movingY) {
        return CharacterMode.RunningVertical;
    }
    return CharacterMode.Idle;
};

/*const getCharacterJump = (
  keyboard: KeyboardState,
  prevJump: number,
  onTheGround: boolean
) => {
  if (keyboard.Space && onTheGround) {
    return World.Character.JumpSpeed;
  } else if (prevJump > 0 && prevJump < World.Character.JumpThreshold) {
    return World.Character.JumpThreshold - prevJump < World.Character.JumpSpeed
      ? World.Character.JumpThreshold
      : prevJump + World.Character.JumpSpeed;
  }
  return 0;
};*/

const getCharacterVy = (movingY: boolean, moveDirection: number) => {
    /*if (jumping) {
    return -World.Character.JumpSpeed;
  }*/
    return movingY ? moveDirection * World.Character.Speed : 0;
};

const getCharacterVx = (movingX: boolean, moveDirection: number) => {
    return movingX ? moveDirection * World.Character.Speed : 0;
};

const getCharacterV = (keyboard: KeyboardState) => {
    const velocities = {
        vX: 0,
        vY: 0,
    };
    if (keyboard.ArrowUp) {
        velocities.vY -= 5;
    }
    if (keyboard.ArrowDown) {
        velocities.vY += 5;
    }
    if (keyboard.ArrowLeft) {
        velocities.vX -= 5;
    }
    if (keyboard.ArrowRight) {
        velocities.vX += 5;
    }
    return velocities;
};

/*const isOnTheGround = (prevY: number) => {
  return prevY >= Scene.Height / 2;
};*/

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
    //const onTheGround = isOnTheGround(world.character.y);
    //const jump = getCharacterJump(keyboard, world.character.jump, onTheGround);
    //const jumping = isCharacterJumping(jump);
    const vY = getCharacterVy(movingY, direction);
    const vX = getCharacterVx(movingX, direction);
    const mode = getCharacterMode(movingX, movingY);
    const v = getCharacterV(keyboard);
    /*if (v.vX !== 0 || v.vY !== 0) {
        console.log(
            "X: ",
            world.character.x,
            " Y: ",
            world.character.y,
            "\nVx: ",
            v.vX,
            " Vy: ",
            v.vY
        );
    }*/
    return {
        direction,
        vX: v.vX,
        vY: v.vY,
        mode,
        //jump,
        x: world.character.x + v.vX,
        y: world.character.y + v.vY,
    };
};
