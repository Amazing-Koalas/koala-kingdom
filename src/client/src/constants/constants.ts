export enum CardinalDirection {
    North,
    NorthEast,
    East,
    SouthEast,
    South,
    SouthWest,
    West,
    NorthWest,
}

export enum CharacterMode {
    Jumping,
    RunningNorth,
    RunningNorthEast,
    RunningEast,
    RunningSouthEast,
    RunningSouth,
    RunningSouthWest,
    RunningWest,
    RunningNorthWest,
    Falling,
    Idle,
}

export const Scene = {
    Width: 1280,
    Height: 578,
};

export const Textures = {
    CharacterRunNorth: "assets/character/run/north.json",
                CharacterRunNorthEast: "assets/character/run/north_east.json",
                CharacterRunEast: "assets/character/run/east.json",
                CharacterRunSouthEast: "assets/character/run/south_east.json",
                CharacterRunSouth: "assets/character/run/south.json",
                CharacterRunSouthWest: "assets/character/run/south_west.json",
                CharacterRunWest: "assets/character/run/west.json",
                CharacterRunNorthWest: "assets/character/run/north_west.json",
        },
    },
};

export const KeyCodes = {
    Space: "Space",
    ArrowUp: "ArrowUp",
    ArrowDown: "ArrowDown",
    ArrowLeft: "ArrowLeft",
    ArrowRight: "ArrowRight",
};

export const World = {
    Character: {
        Speed: 2,
        Direction: CardinalDirection.South,
    },
};
