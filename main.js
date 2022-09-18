const { app, BrowserWindow } = require('electron')
const path = require('path');
var Datastore = require('nedb');


const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
  
    win.loadFile('src/index.html')
  }

  app.whenReady().then(() => {
    createWindow()
  })
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })