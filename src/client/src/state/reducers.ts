import { Reducer } from "../framework/Store";
import { Action, GameState, initState} from ".";

export const rootReducer: Reducer<GameState, Action> = (state: GameState = initState, action: Action): GameState => {
    switch (action.type) {
    case "ATTACK":
        switch (action.payload.direction) {
        case "north":
            break;
        default:
            break;
        }
        break;
    default:
        return state;
    }
    return state;
};
