const { app, BrowserWindow } = require('electron')

function createWindow() {
    let appWindow = new BrowserWindow()
    appWindow.loadFile('./index.html')
}

app.on('ready', createWindow)