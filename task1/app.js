/* 
http://localhost:8080/index.html 로 접속했을 때 public 디렉토리의 index.html 파일을 읽어 클라이언트에 응답한다.
http를 사용하지 않고 net 모듈만으로 구현한다.
*/

var net = require("net");
var fs = require('fs');

let server = net.createServer(sock => {
  let client = sock.remoteAddress;
  console.log('serving stream to ' + client);
    fs.readFile('public/index.html', function (err, data) {
        if (err) {
            console.log(err)
            return;
        }
        sock.write(
            'HTTP/2.0 200 OK\r\n' +
            '\r\n'
        );

        sock.write(data);
        sock.end();
    });
  // Headers:
});

server.listen(8080);