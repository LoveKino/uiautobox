// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

window.location.href = 'http://127.0.0.1:8080/#/';

/*
const {
  ipcRenderer
} = require('electron');

ipcRenderer.on('general-communication', (event, arg) => {
  console.log(arg);
});
ipcRenderer.send('general-communication', 'haha');
*/
