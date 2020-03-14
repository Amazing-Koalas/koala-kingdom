import { KeyCodes } from "../constants";

export interface KeyboardState {
    Space: boolean;
    ArrowRight: boolean;
    ArrowLeft: boolean;
    ArrowUp: boolean;
    ArrowDown: boolean;
}

declare const BetterObject: {
    keys<T extends {}>(object: T): (keyof T)[];
};

const initKeyboardState = () => {
    const keyboard: KeyboardState = {
        Space: false,
        ArrowRight: false,
        ArrowLeft: false,
        ArrowUp: false,
        ArrowDown: false,
    };

    Object.keys(KeyCodes).forEach((code: keyof typeof KeyCodes) => {
        document.addEventListener("keyup", (e: KeyboardEvent) => {
            if (e.code === code) {
                keyboard[code] = false;
            }
        });
        document.addEventListener("keydown", (e: KeyboardEvent) => {
            if (e.code === code) {
                keyboard[code] = true;
            }
        });
    });

    return () => keyboard;
};

export const getKeyboardState = initKeyboardState();
