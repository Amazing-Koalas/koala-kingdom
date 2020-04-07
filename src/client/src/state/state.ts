import { Scene, CharacterMode, CardinalDirection } from "../constants";
import { Character } from "../components/Character";
import { Background } from "../components/Background";

interface WorldObject {
    x: number;
    y: number;
    vX: number;
    vY: number;
}

interface InitProps {
}

interface Character extends WorldObject {
    mode: CharacterMode;
    speed: number;
    direction: number;
}

export interface GameState {
    world: {
        character: Character;
    };
}

export const initState = ({}: InitProps): GameState => ({
    world: {
        character: {
            x: Scene.Width / 2,
            y: Scene.Height / 2,
            vX: 0,
            vY: 0,
            speed: 2,
            direction: CardinalDirection.East,
            mode: CharacterMode.Idle
        }
    }
});
