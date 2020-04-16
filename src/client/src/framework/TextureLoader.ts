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
    private loader: PIXI.Loader
    public readonly textureMap: Readonly<Record<T, string>>;

    public static async loadAssets<T extends string>(args: TextureLoaderArgs<T>): Promise<TextureLoader<T>> {
        return new Promise(resolve => {
            const pixiLoader = new PIXI.Loader();
            pixiLoader.onComplete = args.onComplete;
            pixiLoader.onError = args.onError;
            pixiLoader.onLoad = args.onLoad;
            pixiLoader.onProgress = args.onProgress;
            pixiLoader.onStart = args.onStart;
            pixiLoader.add(
                Object.keys(args.textureMap).map(
                    key => {
                        return args.textureMap[key];
                    }
                )
            );
            const loader = new TextureLoader(pixiLoader);
            resolve(loader);
        });
    }

    private constructor(textureMap: TextureMap<T>, loader: PIXI.Loader) {
        this.textureMap = textureMap;
        this.loader = loader;
    }

    public getResource(textureKey: T): PIXI.LoaderResource {
        const resourcePath = this.textureMap[textureKey];
        const resource = this.loader.resources[resourcePath];
        return resource;
    }
}