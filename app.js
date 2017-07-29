const mp3 = require('./mp3/downloadMp3');
const mp4 = require('./mp4/downloadMp4');


mp3.download('https://www.youtube.com/watch?v=Vhh_GeBPOhs',
'C:\\Users\\jun\\Desktop\\in_develope\\youtube-downloader\\download', 'developers.mp3');

mp4.download('https://www.youtube.com/watch?v=Vhh_GeBPOhs',
 'C:\\Users\\jun\\Desktop\\in_develope\\youtube-downloader\\download', 'developers.mp4');
