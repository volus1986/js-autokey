import {Key} from "@nut-tree/nut-js";

export const COMMANDS = {
    ...Key,
    delay: 'delay'
};

export function convertToCommandKey(commandStr: string, commandList: Object): string | null {
    if (!commandStr.length) return null;

    const command = commandStr.trim().toLowerCase();

    // find the command in list
    for (let key in commandList) {
        if(command === key.toLowerCase()) {
            return key;
        }
    }

    // handle for nothing found
    console.error(`ParseCommand: command '${commandStr}' => '${command}' not found`);
    return null;
}

export function parseCommandKeyString(actionStr: string): string | null {
    return convertToCommandKey(actionStr, COMMANDS);
}
