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
        if(direction === CardinalDirection.South){
            return CharacterMode.RunUp;
        }else{
            return CharacterMode.RunDown;
        }
    }
    return CharacterMode.Idle;
};

const getCharacterV = (keyboard: KeyboardState) => {
    const velocities = {
        vX: 0,
        vY: 0,
    };
    if (keyboard.ArrowUp) {
        velocities.vY -= 2 * World.Character.Speed;
    }
    if (keyboard.ArrowDown) {
        velocities.vY += 2 * World.Character.Speed;
    }
    if (keyboard.ArrowLeft) {
        velocities.vX -= 2 * World.Character.Speed;
    }
    if (keyboard.ArrowRight) {
        velocities.vX += 2 * World.Character.Speed;
    }
    return velocities;
};

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
    const mode = getCharacterMode(movingX, movingY, direction);
    const v = getCharacterV(keyboard);
    return {
        direction,
        vX: v.vX,
        vY: v.vY,
        mode,
        speed: world.character.speed,
        x: world.character.x + v.vX,
        y: world.character.y + v.vY,
    };
};
