import { Reducer } from "../framework/Store";
import { Action, GameState, initState} from ".";

export const rootReducer: Reducer<GameState, Action> = (state: GameState = initState, action: Action): GameState => {
    switch (action.type) {
    case "ATTACK":
        switch (action.direction) {
        case "north":
            break;
        default:
            break;
        }
        break;
    case "MOVE":
        break;
    case "START_GAME":
    default:
        return state;
    }
    return state;
};
