"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AssetGenerator_assets;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetGenerator = void 0;
const fs_1 = require("fs");
class AssetGenerator {
    constructor(options = {}) {
        this.options = {
            assets: [],
        };
        this.assets = [];
        _AssetGenerator_assets.set(this, []);
        this.options = Object.assign(Object.assign({}, this.options), options);
    }
    read() {
        return __awaiter(this, void 0, void 0, function* () {
            __classPrivateFieldSet(this, _AssetGenerator_assets, yield Promise.all(this.options.assets.map((asset) => __awaiter(this, void 0, void 0, function* () {
                try {
                    return yield fs_1.promises.readFile(asset, "utf8");
                }
                catch (e) {
                    return asset;
                }
            }))), "f");
        });
    }
    generate(state = {}) {
        this.assets = __classPrivateFieldGet(this, _AssetGenerator_assets, "f").map(asset => {
            // eslint-disable-next-line no-new-func
            const parse = new Function("state", `return \`${asset}\`;`);
            return parse(state);
        });
    }
}
exports.AssetGenerator = AssetGenerator;
_AssetGenerator_assets = new WeakMap();
