
// progress 예제
// https://github.com/lleellee0/node-ytdl-core/blob/master/example/progress.js

const ytdl = require('ytdl-core');
const fs = require('fs');

let video = ytdl('https://www.youtube.com/watch?v=HVANBB2zRAc&list=PLqh5vK4CKWeZyaNrMmfGPJiPuGM0XX1kM');


  video.pipe(fs.createWriteStream('video.mp4'));
  video.once('response', () => {
    starttime = Date.now();
  });
  video.on('progress', (chunkLength, downloaded, total) => {
    console.log(chunkLength);
    console.log(downloaded);
    console.log(total);
  });

  video.on('end', () => {
    console.log('완료');
  });