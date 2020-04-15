class StateManager<State, Events> {
    private data: State;
    constructor(state: State) {
        this.data = state
    }

    // dispatch(ev: Events) {
    //     state
    // }
}

export const loadStateFromLocalStorage = <State, Events>(initialState: State): StateManager<State, Events> => {
    const rawData = localStorage.getItem("koala-kingdom") || "{}"
    const data = rawData ? JSON.parse(rawData) : initialState;
    return new StateManager(data);
}