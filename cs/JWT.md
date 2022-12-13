# JWT 란 무엇인가?

JWT 란 Jason Web Token의 약자로 모바일이나 웹의 사용자 인증을 위해 사용하는 암호화된 토큰을 의미합니다.
JWT 정보를 request에 담아 사용자의 정보열람, 수정등 개인적인 작업등을 수행할 수 있게 합니다.

# 어떤 정보를 담아서 전달하나요?

![image](/cs/images/jwt.png)

JWT 는 세 파트로 나누어진고, 각 파트는 `.(점)` 으로 구분하여 aaaa.bbbb.cccc 이런식으로 표현됩니다. JWT 는 URL에서 파라미터로 사용할 수 있도록 URL_Safe 한 Base64url 인코딩을 사용합니다.

## 1. Header

토큰의 타입(기본값으로는 JWT)과 JWT를 서명하는데 사용한 알고리즘을 명시한다. 대표적으로 사용되는 알고리즘에는 HMAC, SHA256, RSA, HS256 or RS256가 있다.

```js
{
  "typ": "JWT"
  "alg": "HS256"
}
```

## 2. Payload

유저의 정보를 의미한다. 여기에 담은 정보의 한 조각을 claim 이라고 부르고, name/value 의 한 쌍으로 이루어져 있다. 대표적으로 사용되는 claim은 아래와 같아

- Issuer(iss)
- Subject(sub)
- Audience(aud)
- Expiration time(exp)
- Issued at(iat)

```js
{
  "sub": "user10001",
  "iat": 1569302116
}
```

위 claim 외에도 custom claim들도 사용될 수 있다. 하지만 다음을 주의해야 한다.

- 큰 용량의 데이터를 사용하지 말자. claim set은 최대한 가벼울수록 좋다.
- Sensitive 한 정보를 담지 말자. JWT는 쉽게 decode 되기 때문이다.

## 3. Signature

서명은 JWT의 가장 핵심적인 파트다. 서버에서 토큰의 정보가 서버로부터 생성된 것인지 증명하기 위해 사용한다. 서명을 하기 위해서는 base62 encoded 헤더와 payload를 (period) seperator로 concatenate 후 헤더에 명시된 알고리즘으로 private key를 사용해 서명한다. 해쉬 알고리즘을 사용했기 땨문에, header나 payload 변경시 서명이 무효화된다.

```js
HMACSHA256(base64UrlEncode(header) + '.' + base64UrlEncode(payload), secret);
```

## JWT의 장점

- 확장성 : 제일 큰 장점이다. 기본 서버에 세션을 저장하는 방식은 분산화된 환경에서 처름 로그인한 서버에만 요청을 보내도록 설정하는 등의 작업이 필요하다. 하지만 토큰은 토큰 값만 알고 있으면 어떤 서버로 요청을 보내던 문제가 되지 않는다.
- 다른 도메인이나, 어플리케이션간 이동이 발생해도 같은 JWT를 사용할 수 있다.
- 쿠키 사용으로 인한 보안 취약점 개선
- 불필요한 인증 과정의 감소: JWT를 사용하명 사용자와 관련된 정보를 Auth 서버에 매번 요청할 필요가 없다. JWT에 정보가 포함되있기 떄문에 개별 서비스들이 자체적으로 토큰의 유효성, 권한 정보등을 확인할 수 있다.
- HTTPS 사용의 강제성: Authorization Header에 JWT를 담아 보내기 위해서는 HTTPS를 사용해야 한다.

## JWT의 단점

- 토큰이 expire되기 전에 노출되면 보안적으로 매우 취약하다.
- claim이 많아질수록 JWT 토큰이 길어진다. 매 호출때마다 토큰데이터를 서버에 전달하는데, 길이가 길어질수록 네트워크 대역폭 낭비가 심해질 수 있다.
- Payload에 대한 정보는 암호화되지 않고, Base63 encoding만 하기 때문에 중간에 패킷을 가로채거나 토큰을 취득하게 되면, 데이터를 확인할 수 있다. 이를 해결하기 위해 JWE(Jason Web Encryption)을 통해 암호화하거나 중요데이터를 payload에 넣지 않도록 해야 한다.
