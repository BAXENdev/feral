
const { app, BrowserWindow, ipcMain, web } = require('electron')


const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    // webPreferences: {
    //   contextIsolation: true,
    //   nodeIntegration: false,
    //   preload: path.join(__dirname, 'preload.js')
    // }
  })

  win.loadFile('dist/feral/index.html')
}



// const { exec } = require('child_process');
// exec("C:/Users/baxen/Documents/Github/feral/src/assets/middleware/feral_mid.exe")

//Uncomment below for final product

// let child = require('child_process').execFile;
// let executablePath = "./src/assets/middleware/feral_mid.exe";
// let parameters = [];

// child(executablePath, parameters, function(err, data) {
//   // window.alert("Service Failed. Exiting...")
//   // app.quit()
// });

app.whenReady().then(() => {
  createWindow()
})

