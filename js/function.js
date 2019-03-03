const log = require('./js/log.js');
const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');

// Add Event Lintener
let inputFakePath = document.getElementById("fake-path");
let inputRealPath = document.getElementById("path");

$(inputFakePath).on('click', function() {
  $(inputRealPath).click();
});

$(inputRealPath).on('change', function(event) {
  event.preventDefault();
  $(inputFakePath).val(inputRealPath.files[0].path);
});

const downloadYoutube = () => {
  log.addLog(`다운로드를 시작합니다. 다운로드가 안될 경우 입력하신 값들을 다시 확인하세요.(특히 해당 URL이 재생목록이 맞는지 확인바랍니다.)`);

  let playListUrl = document.getElementById("playListUrl").value;
  let format = document.getElementById("format").value;
  let path = document.getElementById("path").files[0].path;
  
  // 재생 목록에서 각 영상들의 URL을 가져오는 작업 필요
  // 재생 목록은 window["ytInitialData"] 에 존재
  request({
    uri:playListUrl,
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(body);

      // 영상 URL
      // $('.playlist-video')[i].attribs.href
      console.log($('.playlist-video')[0].attribs.href);

    } else {
      console.error(error);
    }
  });

  return false;
}