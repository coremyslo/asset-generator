export interface Options {
    assets: string[];
}
export declare class AssetGenerator {
    #private;
    options: Options;
    assets: string[];
    constructor(options?: Partial<Options>);
    read(): Promise<void>;
    generate(state?: object): void;
}
