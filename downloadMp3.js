const Downloader = require('./downloadMp3-core');
const url_module = require('url');
const querystring = require('querystring');


exports.download = (url, downloadPath, fileName) => {
  var mp3 = new Downloader(downloadPath);


  let videoId = querystring.parse(url_module.parse(url).query).v;

  // let output = downloadPath + path.sep + fileName;

  mp3.getMP3({videoId: videoId, name: fileName}, function(err,res){
      if(err)
          throw err;
      else{
          console.log("Song was downloaded: " + res.file);
      }
  });

}
