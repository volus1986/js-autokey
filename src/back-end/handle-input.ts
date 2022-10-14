import {COMMANDS, parseCommandKeyString} from "./events/command";
import {EventTypes, IEvent, IEventHandler} from "./events/i-event-handler";
import {DelayEvent} from "./events/delay-event";
import {KeyboardEvent} from "./events/keyboard-event";
import {Key} from "@nut-tree/nut-js";

function getEventTypeFromCommand(command: string) {
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
        type: getEventTypeFromCommand(cmd)
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

function createEventHandler(event: IEvent): IEventHandler {
    if(event.type === EventTypes.delay) return new DelayEvent(event.params[0]);
    else return new KeyboardEvent(event.command, event.params[0], event.params[1])
}

function convertInputToCommands(input: string): Array<IEventHandler> {

    return stringToEvents(input).map(createEventHandler);
}

export { convertInputToCommands }

// todo remove
(
    async function(){
    const test = `
    p press
    a type
    delay 1000
    p release
    `
        const commands = convertInputToCommands(test) // todo remove
        for (const cmd of commands) {
            if (!cmd.isCompiledSuccess()) {
                console.error('Command not compiled' + JSON.stringify(cmd));

                return;
            }
        }

        for (const cmd of commands) {
            await cmd.handleEvent()
        }
    }()
);


