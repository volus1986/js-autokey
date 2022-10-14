import { IEventHandler } from "./i-event-handler";

class Delay implements IEventHandler {
    delay: number;

    constructor(props: string[]) {
        this.delay = Number(props[0]) || 1000
    }

    async handleEvent(): Promise<any> {
        return await new Promise(resolve => setTimeout(resolve, this.delay))
    }
}