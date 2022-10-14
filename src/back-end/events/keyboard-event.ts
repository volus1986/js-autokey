import { IEventHandler } from "./i-event-handler";
import {Key} from "@nut-tree/nut-js";

export const KeyAction = {
    press: 'press',
    release: 'release',
    type: 'type',
}

export class KeyboardEvent implements IEventHandler {
    keyCode: number | null;
    action: string;
    key: string;

    constructor(key: string, action: string) {
        // @ts-ignore
        this.keyCode = Key[key] || null;
        this.key = key;
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

    async handleIncorrectAction(): Promise<any> {
            return setTimeout(() => {
                console.error(`key event: key: ${this.key} | action: ${this.action} | code: ${this.keyCode}`)
            }, 1000)
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