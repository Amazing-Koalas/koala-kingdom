import { Scene, CharacterMode, CardinalDirection } from "../constants";
import { Character } from "../components/Character";
import { Background } from "../components/Background";
import { Menu } from '../components/Menu';

interface WorldObject {
    x: number;
    y: number;
    vX: number;
    vY: number;
}

interface InitProps {
}

interface Character extends WorldObject {
    mode: CharacterMode;
    speed: number;
    direction: number;
}

interface Menu extends WorldObject{
    text: string;
}

export interface GameState {
    world: {
        character: Character;
        menu: Menu;
    };
}

export const initState = (props: InitProps): GameState => ({
    world: {
        character: {
            x: Scene.Width / 2,
            y: Scene.Height / 2,
            vX: 0,
            vY: 0,
            speed: 2,
            direction: CardinalDirection.East,
            mode: CharacterMode.Idle
        },
        menu:{
            x: Scene.Width / 2,
            y: Scene.Height / 2,
            vX: 0,
            vY: 0,
            text: "Start"
        }
    }
});
