import { Store, StoreArgs } from "../framework/Store";
import { Action, rootReducer } from ".";
import { Scene, CharacterMode, CardinalDirection } from "../constants";

export interface WorldObject {
    x: number;
    y: number;
    vX: number;
    vY: number;
}

export type Direction = "north" | "south" | "east" | "west";

export type CharacterMode = "Jumping" | "RunningVertical" | "RunningHorizontal" | "Falling" | "Idle"
export interface Character extends WorldObject {
    mode: CharacterMode;
    speed: number;
    direction: Direction;
}

export interface GameState {
    nickname: string,

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
            direction: "east",
            mode: CharacterMode.Idle
        }
    }
};

export const getStore = (): Store<GameState, Action> => {
    return new Store<GameState, Action>({
        reducer: rootReducer,
        initState,
    } as StoreArgs<GameState, Action>);
};

export const globalStore = getStore();
globalStore.dispatch({ type: "ATTACK", emit: false, damage: 5, direction: "north" });

export default globalStore;
