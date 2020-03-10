export enum CharacterMode {
    Jumping,
    RunningVertical,
    RunningHorizontal,
    Falling,
    Idle,
}

export const CardinalDirection = {
    North: 1,
    East: 1,
    South: -1,
    West: -1,
}
export const Scene = {
    Width: 1280,
    Height: 578,
};

export const Textures = {
    Character: "assets/character/adventurer.json",
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
