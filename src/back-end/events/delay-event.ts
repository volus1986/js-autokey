import { IEventHandler } from "./i-event-handler";

export class DelayEvent implements IEventHandler {
    delay: number;

    constructor(delay: string) {
        this.delay = Number(delay)
    }

    async handleEvent(): Promise<any> {
        return new Promise(resolve => setTimeout(resolve, this.delay))
    }

    isCompiledSuccess(): boolean {
        return !Number.isNaN(this.delay);
    }
}