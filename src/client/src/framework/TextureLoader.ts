import * as PIXI from "pixi.js";

export type TextureMap<T extends string> = Record<T, string>;

export type TextureLoaderArgs<T extends string> = {
    textureMap: TextureMap<T>,
    onComplete?: () => void,
    onError?: () => void,
    onLoad?: () => void,
    onProgress?: () => void,
    onStart?: () => void,
}
export class TextureLoader<T extends string> {
    private loader: Promise<PIXI.Loader>
    public readonly textureMap: Readonly<TextureMap<T>>;

    // public static async loadAssets<T extends string>(textureMap: TextureMap<T>): Promise<TextureLoader<T>> {
    //     return new Promise(resolve => {
    //         const loader = new TextureLoader();
    //         loader._loadAssets(textureMap)
    //             .then(() => resolve(loader));
    //     });
    // }

    public constructor(args: TextureLoaderArgs<T>) {
        this.textureMap = args.textureMap;
        this.loader = new Promise(resolve => {
            const loader = new PIXI.Loader();
            loader.onComplete = args.onComplete;
            loader.onError = args.onError;
            loader.onLoad = args.onLoad;
            loader.onProgress = args.onProgress;
            loader.onStart = args.onStart;
            loader.add(
                Object.keys(this.textureMap).map(
                    key => {
                        return this.textureMap[key];
                    }
                )
            );
            resolve(loader);
        });
    }

    public async getResource(textureKey: T): Promise<PIXI.LoaderResource> {
        const loader = await this.loader;
        const resource = loader.resources[textureKey];
        return resource;
    }

    // private async _loadAssets(textureMap: TextureMap<T>): Promise<TextureLoader<T>> {
    //     return new Promise(resolve => {
    //         this.textureMap = textureMap;
    //         for (const key in textureMap) {
    //             this.loader.add(key, textureMap[key]);
    //         }
    //         // this.add(Object.keys(textureMap).map(
    //         //     (key: T) => textureMap[key]
    //         // ));

    //         this.load((loader, resources) => {
    //             resolve(this);
    //         });
    //     });
    // }


    // private async load(
    // // cb?: (loader: PIXI.Loader, resources: Partial<Record<string, PIXI.LoaderResource>>
    // ): Promise<this> {
    //     return new Promise(resolve => {
    //         if (!this.isLoaded) {
    //             this.loader.load((loader, resources) => {
    //                 resolve(this);
    //             });
    //         } else {
    //             resolve(this);
    //         }
    //     });
    // }
    // public async load(textures: Array<T>) {
    //     return new Promise(resolve => {
    //         PIXI.Loader.shared.add(
    //             Object.keys(textures).map(
    //                 (key) => {
    //                     return textures[key];
    //                 }
    //             )
    //         );
    //         PIXI.Loader.shared.load(resolve);
    //     });
    // }

    // getResource(texture: T): PIXI.IResourceDictionary {
    //     const value: string = this.textureMap[texture];
    //     this.
    //     return this.resources[value];
    // }
}

// const T = {
//     a: "assets/a.json",
//     b: "assets/b.json",
// };
// const loader = TextureLoader.loadAssets(T);
// loader.then(l => l.getResource(""));