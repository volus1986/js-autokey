interface KeyboardEntry{
    keyCode: string,
    modifiers?: Array<string>,
    type?: string
}

interface BrowserWindow {
    webContents: {
        sendInputEvent(entry: KeyboardEntry): null
    }
}

class SendKeyboardEvent1 {
    browserWindow

    constructor(browserWindow: BrowserWindow) {
        this.browserWindow = browserWindow
    }
/*
    sendKey(entry: KeyboardEntry, delay: number) {
        ["keyDown", "char", "keyUp"].forEach(async(type) => {
            entry.type = type;
            this.browserWindow.webContents.sendInputEvent(entry);

            // Delay
            await new Promise(resolve => setTimeout(resolve, delay));
        });
    }
*/
    async sendKey(entry: KeyboardEntry, delay: number) {
            this.browserWindow.webContents.sendInputEvent(entry);

            await new Promise(resolve => setTimeout(resolve, delay));
    }


    async sendKeySequence(sequence: Array<KeyboardEntry>, delay:number)
    {
        for (const entry of sequence)
        {
            await this.sendKey(entry, delay);
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }

    async test() {
        const sequence = [
            {keyCode: "a"},
            {keyCode: "s", modifiers: ["Shift"]},
            {keyCode: "space"},
            {keyCode: "k", modifiers: ["Shift"]},
            {keyCode: "l"},
        ];

        await this.sendKeySequence(sequence, 500);
    }
}

// exports.SendKeyboardEvent = SendKeyboardEvent