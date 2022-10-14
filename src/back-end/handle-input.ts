import {Key} from "@nut-tree/nut-js"

enum EventType {type = 'type', press = 'press', release = 'release'}

interface IEvent {
    key: Key
    type: EventType
    delay: number
}

function parseEventKey(pressedKey: string): Key {
    if (!pressedKey.length) return null;

    const pressedKeyLower = pressedKey.toLowerCase();

    for (let key in Key) {
        if(pressedKeyLower === key.toLowerCase()) {
            // @ts-ignore
            return Key[key];
        }
    }

    console.log('noKeyFound')
    return null
}

function parseEventType(str: string): EventType {
    if (!str) return EventType.type;
    const strCased = str.toLowerCase();

    for (let key in EventType) {
        if(strCased === key) return EventType[<EventType>key];
    }

    return EventType.type;
}

function parseEventDelay(str: string | undefined): number {
    const delay = Number(str)

    return isNaN(delay) ? 60 + Math.floor(Math.random() * 20) : delay;
}

function strToEvent(str: string): IEvent {
    const strArr = str.trim().split(' ');

    const ret = {
        key: parseEventKey(strArr[0]),
        type: parseEventType(strArr[1]),
        delay: parseEventDelay(strArr[2])
    }

    console.log(ret) // todo remove

    return ret;
}

function stringToEvents(str: string): Array<IEvent> {
    return str
        .split('\n')
        .map(strToEvent)
        .filter(event => event.key !== null);
}

async function handleEvent(input: IEvent) {
    return
}

async function handleInput(input: string) {
    return stringToEvents(input).forEach(handleEvent);
}

export { handleInput }

// todo remove
(
    function(){
    const test = `
    p press 1000
    a type
    p release
    `
        handleInput(test) // todo remove
    }()
);
