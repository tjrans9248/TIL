# CORS(Cross origin resource sharing)

cors 는 sop를 위한반 에러이다.!!
SOP(same-origin policy, 동일 출처 정책): 출처가 동일한 프로토콜, 포트번호, 도메인에서만 자원을 사용가능 하도록 하는 보안정책이다.

즉, CORS 에러는 요청 브라우저에서 다른 도메인(프로토콜, 포트번호)을 가지는 서버로 요청이 갈때 브라우저에서 발생하는 보안정책이다. (서버정책이 아니니 헷갈리지 말길 바란다.)

요청한 출처와 API의 서버의 출처가 다르기 떄문에 브라우저에서 CORS 에러가 생긴다.

출처자가 다른 경우란? Internet explorer 예외사항

1. 프로토콜이 다른 경우 (http, https가 동일해야 한다. http > https 는 가능하지만 반대의 경우 에러)
2. 도메인이 다른경우 요청(www.naver.com - www.daum.net)
3. 포트번호가 다른 경우 (naver.com:3000 - naver.com:8080)

경로는 상관없다 ex) naver.com - naver.com/webtoon/list?title=34123&weekday
⁇ Why 이러한 정책이 있나
애초에 웹응 사용자의 공격에 너무나 취약하다.
웹사이트에 개발자 도구로 확인하면 흔하게 script 코드를 볼 수 있다. 물론 난독화가 되어 있지만 암호화는 되어 있지 않다. 이런 경우 사용자가 악의적으로 script를 추가해서 다른 사이트를 요청하게 되면 보안측면에서 너무나도 취약하다는 것을 알수 있다. 그리ㅗ 인해 해킹에서 막아야 하기 때문에 sop 정책이 나온것이다.
