// Modules to control application life and create native browser window
// const Events = require('./send-event-process');
// const { app, BrowserWindow, globalShortcut } = require('electron')
import { app, BrowserWindow, globalShortcut } from 'electron';

// const {KeyboardEvents, Key} = require('./keyboard-events');
import {KeyboardEvents, Key} from './events/keyboard-events'

const path = require('path')

const createWindow = () => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true
        },
    })

    // and load the index.html of the app.
    // mainWindow.loadFile(path.join(__dirname, '..', '..', 'public', 'index.html'))
    mainWindow.loadFile(path.join(__dirname, '..', '..', 'index.html'));

    // Open the DevTools.
    mainWindow.webContents.openDevTools()

    return mainWindow;
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Некоторые интерфейсы API могут использоваться только после возникновения этого события.
app.whenReady().then(() => {
    const browserWindow = createWindow();

    // const sendKeyboardEvent = new SendEvents.SendKeyboardEvent(browserWindow);
    // console.log(sendKeyboardEvent)

    app.on('activate', () => {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })

    // globalShortcut.register('Alt+CommandOrControl+I', () => {
    globalShortcut.register('f', () => {
        console.log('Electron loves global shortcuts!')

        KeyboardEvents.typeKeys([Key.A, Key.B, Key.C], 1000)
        // sendKeyboardEvent.test()
        //     .then(() => sendKeyboardEvent.sendKey({keyCode: 'k'}, 1000))
        //     .then(() => console.log('typed'))

        browserWindow.webContents.sendInputEvent({keyCode: "a", type: "keyDown"});
        browserWindow.webContents.sendInputEvent({keyCode: "a", type: "char"});
        browserWindow.webContents.sendInputEvent({keyCode: "a", type: "keyUp"});
    })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. Можно также поместить их в отдельные файлы и применить к ним require.
