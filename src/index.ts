import { promises as fsp } from "fs";

export interface Options {
    assets: string[];
}

export class AssetGenerator {
    public options: Options = {
        assets: [],
    };

    public assets: string[] = [];

    #assets: string[] = [];

    public constructor (options: Partial<Options> = {}) {
        this.options = { ...this.options, ...options };
    }

    public async read (): Promise<void> {
        this.#assets = await Promise.all(this.options.assets.map(async asset => {
            try {
                return await fsp.readFile(asset, "utf8");
            } catch (e) {
                return asset;
            }
        }));
    }

    public generate (state: object = {}): void {
        this.assets = this.#assets.map(asset => {
            // eslint-disable-next-line no-new-func
            const parse = new Function("state", `return \`${asset}\`;`);

            return parse(state) as string;
        });
    }
}
