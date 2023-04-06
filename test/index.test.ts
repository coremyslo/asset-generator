import { AssetGenerator } from "../src";
test("font-face", async () => {
    const assetGenerator = new AssetGenerator({
        assets: [
            "./not/existing/file.text",
            "./templates/test.txt",
        ],
    });
    await assetGenerator.read();

    assetGenerator.generate({
        title: "hello",
        value: 10,
    });

    expect(assetGenerator.assets).toEqual([
        "./not/existing/file.text",
        "hello, 10/2 = 10\n",
    ]);
});
