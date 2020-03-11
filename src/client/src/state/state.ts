import { Scene, CharacterMode, CardinalDirection } from "../constants";

interface WorldObject {
    x: number;
    y: number;
    vX: number;
    vY: number;
}

interface InitProps {
    // level: ParsedTile[];
}

interface Character extends WorldObject {
    mode: CharacterMode;
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
            direction: CardinalDirection.East,
            mode: CharacterMode.Idle
        }
    }
});
