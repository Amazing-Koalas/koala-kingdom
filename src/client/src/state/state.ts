import { Store } from "../framework/Store";
import { Action, rootReducer } from ".";
import { Scene, CharacterMode, CardinalDirection } from "../constants";

interface WorldObject {
    x: number;
    y: number;
    vX: number;
    vY: number;
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

// export type initStateArgs = {}
export const initState: GameState = {
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
};


export const getStore = (): Store<GameState, Action> => {
    return new Store<GameState, Action>({
        reducer: rootReducer,
        initState: initState,
    });
};

export const store = getStore();

export default store;
