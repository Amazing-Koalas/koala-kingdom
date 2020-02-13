import { Vector } from "./engine/utility/Vector";

// export enum Events {
// }

export interface GameState {
    heroX: number;
    heroY: number;
}

export const initialState = (): GameState => ({
    heroX: 0,
    heroY: 0,
})
