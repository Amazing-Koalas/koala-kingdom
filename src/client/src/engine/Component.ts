import { GameEngine } from "./GameEngine";
import { Dispatch, Action, ActionKind, BaseState, BaseDispatch, BaseAction } from "./State";

export interface Component<ConnectedState = {}, ConnectedDispatch = {}> {
    onInitialize: <State extends BaseState>(state: State) => ConnectedState & ConnectedDispatch;
    render(ctx: CanvasRenderingContext2D): void;
}

export abstract class BaseComponent<ConnectedState = {}, ConnectedDispatch = {}> {
    private engine?: GameEngine;
    private state?: ConnectedState;
    private dispatch?: ConnectedDispatch;

    public render(ctx: CanvasRenderingContext2D): void {
    }

    public connectState(state: ConnectedState & BaseState): ConnectedState {
        return ({ ...state })
    }

    public connectDispatch(dispatchers: ConnectedDispatch): ConnectedDispatch {
    }

    public abstract onInitialize<State extends BaseState>(state: State): ConnectedState & ConnectedDispatch {
    }

    // protected setState(state: ConnectedState) {
    // }

    // protected dispatch(action: Action extends BaseAction) {
    // }

    protected subscribe<Action extends BaseAction>(kind: Action["kind"], dispatch: (action: Action) => void) {
        // this.engine.state.subscribe(event, cb)
        // cb({}, {}, event);
    }

    public __init(engine: GameEngine) {
        this.engine = engine;
        this.setState(this.onInitialize(engine.store.getState()))
        this.props
    }
}