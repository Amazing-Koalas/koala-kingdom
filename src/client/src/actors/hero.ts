import { Actor } from "../engine/Actor";
import { Events } from "../state";
import { ResizeGameAction } from "../engine/State";

type ConnectedState = {
    heroX: number;
    heroY: number;
}

type ConnectedDispatch = {
    attack: () => void;
    move: (direction: string) => void;
}

export class Hero extends Actor<ConnectedState, ConnectedDispatch> {
    onInitialize() {
        this.on("", (ev: ResizeGameAction) => {
        })
    }

    connectState = ({
        heroX,
        heroY,
    })

    conectDispatch = ({
        attack: () => {},
        move: (direction: string) => {
        }
    })
}

export default Hero; 