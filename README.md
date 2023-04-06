# @coremyslo/asset-generator [![npm](https://img.shields.io/npm/v/@coremyslo/asset-generator)](https://www.npmjs.com/package/@coremyslo/asset-generator) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/coremyslo/asset-generator/blob/main/LICENSE)
This is a package for generating assets based on a template and a given state object.

## Installation

```shell
npm install @coremyslo/asset-generator
```

## Usage
```typescript
import { AssetGenerator } from "@coremyslo/asset-generator";
const generator = new AssetGenerator({
    assets: [
        "path/to/template.txt",
        `${state.title}, 10/2 = ${state.value}`
    ],
});
await generator.read();
generator.generate({
    title: "hello",
    value: 10,
});

console.log(generator.assets);
```

## API
### `class AssetGenerator(options: Partial<Options>)`
### `Options`
* assets: string[]. Path to files or strings containing templates.

### `async read(): Promise<void>`
* Reads the template file(s) specified in the assets option.
### `generate(state: object = {}): void`
* Generates assets based on the given state object.
### `assets: string[]`
* Returns an array of generated assets.
