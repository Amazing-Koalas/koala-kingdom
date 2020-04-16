import * as PIXI from "pixi.js";

export class DisplayObject extends PIXI.DisplayObject {}
export class Sprite extends PIXI.Sprite {}
export type GameObject = DisplayObject | Sprite;

/**
 * 
 */
export interface Component<T extends GameObject> {
    mount: () => T;
    unmount: () => void;
    render: (gob: T) => void;
}

// const newRootContainer = <Context>(...components: Array<Component>): Component => {
//     const gobs = components.map(cmp => ({ component: cmp, gob: cmp.mount() }));

//     return {
//         mount: () => {
//             const root = new PIXI.Container();
//             gobs.forEach(({ component, gob }) => {
//                 root.addChild(gob)
//             });
//             return root;
//         },

//         unmount: () => {
//         },

//         render: (gob: GameObject) => {
//             gobs.forEach(({ component, gob}) => {
//                 component.render(gob),
//             });
//         }
//     };
// }