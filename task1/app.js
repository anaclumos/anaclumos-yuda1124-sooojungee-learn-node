/* 
http://localhost:8080/index.html 로 접속했을 때 public 디렉토리의 index.html 파일을 읽어 클라이언트에 응답한다.
http를 사용하지 않고 net 모듈만으로 구현한다.
*/

var net = require("net");

let server = net.createServer(sock => {
  let client = sock.remoteAddress;
  console.log('serving stream to ' + client);

  // Headers:
  sock.write(
    'HTTP/2.0 200 OK\r\n' +
    '\r\n'
  );

  sock.write('Hello world');
  sock.end();
});

server.listen(8080);