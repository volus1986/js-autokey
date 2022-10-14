import {IEventHandler} from "./i-event-handler";
import {Key, keyboard, KeyboardClass} from "@nut-tree/nut-js";

export const KeyAction = {
    press: 'press',
    release: 'release',
    type: 'type',
}

export class KeyboardEvent implements IEventHandler {
    keyInputted: string;
    actionInputted: string;
    keyCode: number | null;
    action: string | null;
    delay: number

    constructor(key: string, action: string, delayAfter?: string) {
        this.keyInputted = key;
        this.actionInputted = action
        // @ts-ignore
        this.keyCode = Key[key] || null;
        // @ts-ignore
        this.action = KeyAction[action];
        this.delay = Number(delayAfter) || 0

        this.init()
    }

    isCompiledSuccess(): boolean {
        return this.keyCode !== null && !!this.action
    }

    init() {
        switch (this.action) {
            case KeyAction.press:
                this.handleEvent = this.handleKeyPressEvent
                break
            case KeyAction.release:
                this.handleEvent = this.handleKeyReleaseEvent
                break
            case KeyAction.type:
                this.handleEvent = this.handleKeyTypeEvent
                break
            default:
                this.handleEvent = this.handleIncorrectAction
        }
    }

    toString() {
        console.log(`key event: key: ${this.keyInputted} | actionInputted: ${this.actionInputted} | keyCode: ${this.keyCode}| action: ${this.action} | delay: ${this.delay}`)
    }

    async handleIncorrectAction(): Promise<any> {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                this.toString();
                resolve()
            }, 0);
        })
    }

    async handleAfterClick(keyboardClass: KeyboardClass): Promise<KeyboardClass> {
        if (this.delay) {
            await new Promise(resolve => setTimeout(resolve, this.delay))
        }

        return keyboardClass;
    }

    async handleKeyPressEvent(): Promise<KeyboardClass> {
        return keyboard.pressKey(this.keyCode)
            .then((res) => this.handleAfterClick(res));
    }

    async handleKeyReleaseEvent(): Promise<any> {
        return keyboard.releaseKey(this.keyCode)
            .then((res) => this.handleAfterClick(res));
    }

    async handleKeyTypeEvent(): Promise<any> {
        return keyboard.type(this.keyCode)
            .then((res) => this.handleAfterClick(res));
    }

    async handleEvent(): Promise<any> {}
}