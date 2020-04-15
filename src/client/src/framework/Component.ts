import * as PIXI from "pixi.js";

export type GameObject = PIXI.DisplayObject | PIXI.Sprite;

/**
 * 
 * 
 */
export interface Component {
    mount: () => GameObject;
    unmount: () => void;
    render: (gob: GameObject) => void;
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