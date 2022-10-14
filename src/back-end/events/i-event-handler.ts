export enum EventTypes {
    keyboard= 'keyboard',
    delay= 'delay'
}

export interface IEvent {
    handler: EventTypes,
    command: string,
    params: string[],
}

export interface IEventHandler {
    handleEvent(event: IEvent): Promise<any>;
}
