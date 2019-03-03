# youtube-downloader
MP3 &amp; MP4 Youtube Downloader

## Install
<pre><code>npm install fyda</code></pre>

## API
### download by mp3
fyda.downloadMp3(url, downloadPath, fileName);
### download by mp4
fyda.downloadMp4(url, downloadPath, fileName);

## Use case

<pre><code>const fyda = require('fyda');

fyda.downloadMp3('https://www.youtube.com/watch?v=Vhh_GeBPOhs',
'C:\\Users\\jun\\Desktop\\in_develope\\youtube-downloader\\download', 'developers.mp3');

fyda.downloadMp4('https://www.youtube.com/watch?v=Vhh_GeBPOhs',
'C:\\Users\\jun\\Desktop\\in_develope\\youtube-downloader\\download', 'developers.mp4');
</code></pre>
