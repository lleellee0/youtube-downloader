# Youtube Downloader

본 프로그램이 법적으로 문제가 있으면 알려주세요.
기타 문의사항도 lleellee013@gmail.com으로 메일 바랍니다.

이 프로그램은 Node.js와 Electron을 이용해 유튜브 영상을 mp3나 mp4로 다운로드 받는 프로그램입니다. 사용을 위해선 먼저 [다운로드(1.1.1 버전)](https://github.com/lleellee0/youtube-downloader/releases/download/v1.1.1/v1.1.1.youtube-downloader-win32-ia32.zip)를 받아주세요. 윈도우 32비트 버전입니다.(64비트에서도 사용가능)

다운로드가 완료되었으면 압축을 해제해주세요. 압축을 해제하고 폴더로 들어가면 'youtube-downloader.exe'라는 파일이 있습니다. 이 파일을 실행하시면 됩니다.

## 사용방법

**1.** 실행하면 다음과 같은 화면이 보일겁니다.
![첫 실행화면](https://github.com/lleellee0/images/blob/master/20190307_003945.png?raw=true)

여기에는 다음과 같은 입력 공간이 있습니다.
- Play List URL
- Format
- Select Download Path

Play List URL에는 Youtube의 재생목록에서 영상 하나를 선택하신 후 그 URL을 붙여넣어주시면 됩니다.

![재생목록 URL](https://github.com/lleellee0/images/blob/master/20190307_003932.png?raw=true)

**2.** Format에는 mp3나 mp4중에 하나를 입력합니다. 다른 포맷도 지원하지만, 추천드리진 않습니다.
Select Download Path를 클릭하면 다운로드할 경로를 선택할 수 있습니다. 폴더를 하나 만드신 후 선택해주시기 바랍니다.

**3.** 여기까지 입력 후 Start Download를 선택하시면 다운로드가 시작됩니다.

![다운로드 시작](https://github.com/lleellee0/images/blob/master/20190307_004009.png?raw=true)

다음과 같이 지정한 경로에 파일이 생성되기 시작합니다.

![다운로드 중인 파일들](https://github.com/lleellee0/images/blob/master/20190307_004024.png?raw=true)

기다리시면 다운로드가 완료됩니다.

![다운로드 중인 파일들](https://github.com/lleellee0/images/blob/master/20190307_004336.png?raw=true)


## 사용법 영상
[![사용법 유튜브 영상](https://github.com/lleellee0/images/blob/master/20190307_003945.png?raw=true)](https://www.youtube.com/watch?v=4CaPpuDB5S0&feature=youtu.be)


## 참고

- [ytdl-core ffmpeg exam](https://github.com/lleellee0/node-ytdl-core/blob/master/example/ffmpeg.js) - ytdl-core ffmpeg 예제
- [ffmpeg](https://www.ffmpeg.org/) - FFMPEG 사용하여 인코딩
- [fluent-ffmpeg](https://www.npmjs.com/package/fluent-ffmpeg) - NPM fluent-ffmpeg
- [ffmpeg-static](https://www.npmjs.com/package/ffmpeg-static) - NPM ffmpeg-static
- [node fs](https://nodejs.org/api/fs.html) - Node.js fs.unlink, fs.createWriteStream
- [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - a very basic starter Electron app

## License

[CC0 1.0 (Public Domain)](LICENSE.md)
