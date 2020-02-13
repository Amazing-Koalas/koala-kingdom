import { Component, BaseComponent } from "./Component";
import { GameEngineContext } from "./GameEngine";

export abstract class Scene<ConnectedState = {}, ConnectedDispatch = {}> extends BaseComponent<ConnectedState, ConnectedDispatch> {
    private components: Array<Component>;

    constructor() {
        super();
        this.components = [];
    }

    public add(component: Component) {
        this.components.push(component);
    }

    public render(state: ConnectedState, engine: GameEngineContext) {
        this.components.forEach((component) => component.render(state, engine))
    }
}