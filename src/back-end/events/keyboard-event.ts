import { IEventHandler } from "./i-event-handler";
import {Key} from "@nut-tree/nut-js";

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

    constructor(key: string, action: string) {
        this.keyInputted = key;
        this.actionInputted = action
        // @ts-ignore
        this.keyCode = Key[key] || null;
        // @ts-ignore
        this.action = KeyAction[action];

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
        console.log(`key event: key: ${this.keyInputted} | actionInputted: ${this.actionInputted} | keyCode: ${this.keyCode}| action: ${this.action}`)
    }

    async handleIncorrectAction(): Promise<any> {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                this.toString();
                resolve()
            }, 0);
        })

    }

    async handleKeyPressEvent(): Promise<any> {
        return this.handleIncorrectAction();
    }

    async handleKeyReleaseEvent(): Promise<any> {
        return this.handleIncorrectAction();
    }

    async handleKeyTypeEvent(): Promise<any> {
        return this.handleIncorrectAction();
    }

    async handleEvent(): Promise<any> {}
}