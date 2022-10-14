import {parseCommandKeyString, COMMANDS} from "./events/command";
import {EventTypes, IEvent} from "./events/i-event-handler";

function getHandlerFromCommand(command: string) {
    if (command === COMMANDS.delay) return EventTypes.delay;
    else return EventTypes.keyboard;
}

function strToEvent(str: string): IEvent | null {
    const strArr = str.trim()
        .split(' ');

    if(!strArr[0]) return null;

    const cmd = parseCommandKeyString(strArr[0]);
    const params = strArr.splice(1);

    const ret = {
        command: cmd,
        params: params,
        handler: getHandlerFromCommand(cmd)
    }

    console.log(ret)

    return ret;
}

function stringToEvents(str: string): Array<IEvent> {
    return str
        .split('\n')
        .map(strToEvent)
        .filter(event => event !== null);
}

async function createEventHandler(event: IEvent) {
    if(event.handler === E)
}

async function handleInput(input: string) {
    return stringToEvents(input).forEach(createEventHandler);
}

export { handleInput }

// todo remove
(
    function(){
    const test = `
    p press
    a type
    p release
    delay 1000
    `
        handleInput(test) // todo remove
    }()
);


