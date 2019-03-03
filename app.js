const mp3 = require('./mp3/downloadMp3');
const mp4 = require('./mp4/downloadMp4');

exports.downloadMp3 = mp3.download;
exports.downloadMp4 = mp4.download;

// Use case
// const fyda = require('fyda');

// fyda.downloadMp3('https://www.youtube.com/watch?v=Vhh_GeBPOhs','C:\\Users\\jun\\Desktop\\in_develope\\youtube-downloader\\download', 'developers.mp3');
// fyda.downloadMp4('https://www.youtube.com/watch?v=Vhh_GeBPOhs','C:\\Users\\jun\\Desktop\\in_develope\\youtube-downloader\\download', 'developers.mp4');