export enum EventTypes {
    keyboard= 'keyboard',
    delay= 'delay'
}

export interface IEvent {
    type: EventTypes,
    command: string,
    params: string[],
}

export interface IEventHandler {
    isCompiledSuccess(): boolean;
    handleEvent(): Promise<any>;
}
