// const {keyboard, Key} = require("@nut-tree/nut-js");
import {keyboard, Key} from "@nut-tree/nut-js"

const keys = Object.keys(Key)

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function calcDelay() {
    return 30 + Math.floor(Math.random() * 20);
}

class KeyboardEvents {
    static async pressKey(key: Key) {
        return keyboard.pressKey(key);
    }

    static async releaseKey(key: Key) {
        return keyboard.releaseKey(key);
    }

    static async typeKey(key: Key, delay: number = calcDelay()){
        if (!key) return;

        await this.pressKey(key)
        await sleep(delay)
        await this.releaseKey(key)
    }

    static async typeKeys(keyList: Array<Key>, delay: number = 70) {
        for (const key of keyList) {
            await this.typeKey(key, delay)
        }
    }
}
//
// module.exports = { KeyboardEvents, Key }
export { KeyboardEvents, Key }