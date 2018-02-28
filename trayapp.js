var { app, BrowserWindow, Tray, Menu } = require('electron')
var path = require('path')
var url = require('url')
var iconpath = path.join(__dirname, 'tray-icon.png') // path of y
var win
function createWindow() {
    win = new BrowserWindow({ width: 600, height: 600, icon: iconpath })

    win.loadURL(path.join(__dirname, 'index.html'));

    var appIcon = new Tray(iconpath)

    var contextMenu = Menu.buildFromTemplate([
        {
            label: 'Show App', click: function () {
                win.show()
            }
        },
        {
            label: 'Quit', click: function () {
                app.isQuiting = true
                app.quit()
            }
        }
    ])

    appIcon.setContextMenu(contextMenu)
    appIcon.setToolTip('Project Tracker')

    win.on('close', function (event) {
        win = null
        app.isQuiting = true
        app.quit()
    })

    win.on('minimize', function (event) {
        event.preventDefault()
        win.hide()
    })

    win.on('show', function () {
        appIcon.setHighlightMode('always')
    })
    
}

app.setAppUserModelId('ProjectTracker.Savvy')
app.on('ready', createWindow)