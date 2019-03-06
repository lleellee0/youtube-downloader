# Youtube Downloader

**Clone and run for a quick way to see Electron in action.**

This is a minimal Electron application based on the [Quick Start Guide](https://electronjs.org/docs/tutorial/quick-start) within the Electron documentation.

**Use this app along with the [Electron API Demos](https://electronjs.org/#get-started) app for API code examples to help you get started.**

A basic Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.

You can learn more about each of these components within the [Quick Start Guide](https://electronjs.org/docs/tutorial/quick-start).

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/electron/electron-quick-start
# Go into the repository
cd electron-quick-start
# Install dependencies
npm install
# Run the app
npm start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## 참고

- [ytdl-core ffmpeg exam](https://github.com/lleellee0/node-ytdl-core/blob/master/example/ffmpeg.js) - ytdl-core ffmpeg 예제
- [fluent-ffmpeg](https://www.npmjs.com/package/fluent-ffmpeg) - NPM fluent-ffmpeg
- [ffmpeg-static](https://www.npmjs.com/package/ffmpeg-static) - NPM ffmpeg-static
- [node fs](https://nodejs.org/api/fs.html) - Node.js fs.unlink, fs.createWriteStream
- [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - a very basic starter Electron app

## License

[CC0 1.0 (Public Domain)](LICENSE.md)
