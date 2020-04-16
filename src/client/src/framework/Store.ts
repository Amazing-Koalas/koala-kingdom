import * as Redux from "redux";

/**
 * An *action* is a plain object that represents an intention to change the
 * state. Actions are the only way to get data into the store. Any data,
 * whether from UI events, network callbacks, or other sources such as
 * WebSockets needs to eventually be dispatched as actions.
 *
 * Actions must have a `type` field that indicates the type of action being
 * performed. Types can be defined as constants and imported from another
 * module. It's better to use strings for `type` than Symbols because strings
 * are serializable.
 *
 * Actions may have a payload field that houses the data associated with the
 * action.
 *
 * Other than `type`, the structure of an action object is really up to you.
 * If you're interested, check out Flux Standard Action for recommendations on
 * how actions should be constructed.
 * 
 * @template T the type of the action's `type` tag.
 */
export interface BaseAction<T> extends Redux.Action<T> {
    emit: true | false;
}

/**
 * A *reducer* (also called a *reducing function*) is a function that accepts
 * an accumulation and a value and returns a new accumulation. They are used
 * to reduce a collection of values down to a single value
 *
 * Reducers are not unique to Redux—they are a fundamental concept in
 * functional programming.  Even most non-functional languages, like
 * JavaScript, have a built-in API for reducing. In JavaScript, it's
 * `Array.prototype.reduce()`.
 *
 * In Redux, the accumulated value is the state object, and the values being
 * accumulated are actions. Reducers calculate a new state given the previous
 * state and an action. They must be *pure functions*—functions that return
 * the exact same output for given inputs. They should also be free of
 * side-effects. This is what enables exciting features like hot reloading and
 * time travel.
 *
 * Reducers are the most important concept in Redux.
 *
 * *Do not put API calls into reducers.*
 *
 * @template S The type of state consumed and produced by this reducer.
 * @template A The type of actions the reducer can potentially respond to.
 */
export interface Reducer<S, A extends BaseAction<A["type"]>> extends Redux.Reducer<S, A> {}

export type StoreArgs<S, A extends BaseAction<A["type"]>> =
    & A
    & { reducer: Reducer<S, A>; initState: S; };

export type SubscribeFn<S> = (state: S) => void
export type UnsubscribeFn = () => void;

/**
 * A store is an object that holds the application's state tree.
 * There should only be a single store in a Redux app, as the composition
 * happens on the reducer level.
 *
 * @template S The type of state held by this store.
 * @template A the type of actions which may be dispatched by this store.
 */
export class Store<S, A extends BaseAction<A["type"]>> {
    private store: Redux.Store<S, A>;
    private subId: number = 0;
    // private subs: Map<Object, (state: S) => void>;
    private subs: Map<number, [boolean, SubscribeFn<S>]> = new Map();
    constructor(args: StoreArgs<S, A>) {
        const is = args.initState as Redux.PreloadedState<S>; // TODO: lazy escape hatch. Need to wrap this some how.
        this.store = Redux.createStore(args.reducer, is);
        this.store.subscribe(this.subHandler);
    }

    private subHandler() {
        const state = this.getState();
        this.subs.forEach(([marked, cb], key) => {
            if (marked) {
                delete this.subs[key];
            }
            cb(state);
        });
    }

    public getState(): S {
        return this.store.getState();
    }

    public subscribe(cb: SubscribeFn<S>): UnsubscribeFn {
        const id = this.subId++;
        this.subs[id] = [true, cb];
        return () => {
            this.subs[id][0] = false;
            delete this.subs[id];
        };
    }

    public dispatch(action: A) {
        this.store.dispatch(action);
    }
}
