const { contextBridge, ipcRenderer } = require("electron")
const { readFileSync } = require("fs")

// contextBridge.exposeInMainWorld("readFileSyncMethod", {
//     readFileSync: (path) => readFileSync(path)
// })

contextBridge.exposeInMainWorld('readFileMethod', {
    readFile (path) {
        return readFileSync(path)
    }
})


