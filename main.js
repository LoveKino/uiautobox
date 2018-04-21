const electron = require('electron');
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 900,
    height: 1000
  });

  // and load the index.html of the app.
  mainWindow.loadURL('http://127.0.0.1:8080');
  mainWindow.hide();

  electron.session.defaultSession.cookies.set({
    url: 'http://127.0.0.1:8080',
    name: '_sessiondata',
    value: '36ECE60909D14E266417B38BD8BC3DE7221F643A-1524456166710-xarre.chen%40shopee.com'
  }, () => {});

  electron.session.defaultSession.cookies.set({
    url: 'http://127.0.0.1:8080',
    name: '_refreshtoken',
    value: 'd41411tnt7n9djnn:okrhr49us8t8344g441v26iposv38dhf58nl9ds7ovkkmk8bgbi920ff18ge1122'
  }, () => {});

  electron.session.defaultSession.cookies.set({
    url: 'http://127.0.0.1:8080',
    name: 'XSRF-TOKEN',
    value: '5ckj5ro1c7qpa2fgh4u18l461tmkquki77bm2dcsvftk5jc4itl9o1otf5pvd6cu'
  }, () => {});

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

//
electron.ipcMain.on('general-communication', (e, arg) => {
  const {
    type,
    data
  } = JSON.parse(arg);
  if (type === 'flushAndExit') {
    console.log(data); // eslint-disable-line
    app.quit();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function() {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
