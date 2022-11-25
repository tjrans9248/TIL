# RESTful 하다는게 무슨뜻인가요?

REST(REpresentational State Transfer)ful API는 HTTP 통신에서 어떤 자원에 대한 CRUD 요청을 Reasource와 Method로 표현하여 특정한 형태로 전당하는 방식입니다. RESTful API는 아래와 같은 것들로 구성됩니다.

- Resource(자원, URI)
- Method
- Representational of Resource(자원의 형태, JSON or XML 등)

REST가 디자인 패턴이다, 아키텍처다 많은 이야기가 존재하는데, 하나의 아키텍처로 볼 수 있다. 정확히 표현으로 하면 REST는 Resource Oriented Architecture 이다. API 설계의 중심에 자원이 있고 HTTP Method 를 통해 자원을 처리하도록 설계하는 것이다.

REST의 기본 원칙을 성실히 지킨 서비스 디자인은 ‘REATful’ 하다라고 표현할 수 있다.

# REST 6 가지 원칙

- Uniform Interface
- Stateless
- Chching
- Client-Server
- Hiererchical syetem
- code on demand

# REStful 하게 API를 디자인 한다는 것은 무엇을 의미하는가?

1. 리소스와 행위를 명시적으로 직관적으로 분리한다.
2. Message는 Header와 Body 를 명확하게 분리해서 사용한다.
3. API 버전을 관리한다.
4. 서버와 클라이언트가 같은 방식으로 사용해서 요청하도록 한다.

# 장점

1. Open API를 제공하기 쉽다.
2. 멀티플랫폼 지원 및 연동이 용이하다.
3. 원하는 타입으로 데이터를 주고받을 수 있다.
4. 기존 웹 인프라(HTTP)를 그대로 사용할 수 있다.

# 단점

1. 사용할 수 있는 메소드가 4가지 밖에 없다.
2. 분산환경에는 부적합하다.
3. HTTP 통신 모델에 대해사먼 지원한다
