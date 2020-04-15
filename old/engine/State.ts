type Req<T> = { request: T };
type Res<T> = { response: T };
type Err = { error: string };

export type ThunkAction<ReqKind, ResKind, ErrKind, _Req, _Res> =
     | ({ kind: ReqKind } & Req<_Req>)
     | ({ kind: ResKind } & Res<_Res>)
     | ({ kind: ErrKind } & Err);

export interface Action {
     kind: string;
     [key: string]: any
}

export type BaseAction =
     | ResizeGameAction
     | FreezeGameAction

export type ActionKind = BaseAction["kind"];

export type ResizeGameAction = {
     kind: "RESIZE_GAME",
     width: number,
     height: number
}

export const resize = (width: number, height: number): ResizeGameAction => ({
     kind: "RESIZE_GAME",
     width,
     height,
})

export type BaseDispatch = {
     resize: (width: number, height: number) => Action;
}

export type FreezeGameAction = {
     kind: "FREEZE"
}

export const freeze = (): Action => ({ kind: "FREEZE" });

export type Dispatch<Action> = (action: Action) => Action;

// export type EngineEvents =
export type BaseState = {
     global: {
          width: number;
          height: number;
     }
}

export class Store<State extends BaseState> {
     private state: State;
     private subs: Map<ActionKind, Array<(event: Action) => void>>;

     constructor(initialState: State) {
          this.state = initialState
          this.subs = new Map();
     }

     public subscribe(event: ActionKind, cb: (ev: Event)) {
          const eventContainer = this.subs.get(event);
          if (!this.subs.has(event)) {
               this.subs.set(event)
               this.subs.set()
               eventContainer?.push(event);
          }
     }

     public unSubscribe() {
     }

     public dispatch(event: Event) {
          this.subs.forEach((dispatch) => {
               dispatch(event)
          })
     }
}

export default Events
