const youtubedl = require('youtube-dl');
const fs = require('fs');

const path = require('path');

exports.download = (url, downloadPath, fileName) => {
  let output = downloadPath + path.sep + fileName;

  let downloaded = 0;
  if (fs.existsSync(output)) {
    downloaded = fs.statSync(output).size;
  }

  console.log(__dirname);

  let video = youtubedl(url,

  // Optional arguments passed to youtube-dl.
  ['--format=18'],

  // start will be sent as a range header
  { start: downloaded, cwd: __dirname + path.sep + 'download' });

  // Will be called when the download starts.
  video.on('info', function(info) {
    console.log('Download started');
    console.log('filename: ' + info._filename);

    // info.size will be the amount to download, add
    let total = info.size + downloaded;
    console.log('size: ' + total);

    if (downloaded > 0) {
      // size will be the amount already downloaded
      console.log('resuming from: ' + downloaded);

      // display the remaining bytes to download
      console.log('remaining bytes: ' + info.size);
    }
  });

  video.pipe(fs.createWriteStream(downloadPath + path.sep + fileName, { flags: 'a' }));

  // Will be called if download was already completed and there is nothing more to download.
  video.on('complete', function complete(info) {
    'use strict';
    console.log('filename: ' + info._filename + ' already downloaded.');
  });

  video.on('end', function() {
    console.log('finished downloading!');
  });

}
