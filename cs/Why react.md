# 리액트를 사용하는 이유

1. 동적 페이지(유저 인터랙션에 따라 페이지 구성을 달리 해주어야 하는 페이지)의 유저 인터페이스를 효율적으로 유지보수 및 관리할 수 있다.

2. 구체적으로는 컴포넌트 기반 아키텍쳐이므로, 재사용이 가능한 컴포넌트를 개발하고 여러 부분에서 가져다가 사용할 수 있어 개발 생산성이 높고 유지보수가 용이하다.

3. HTML 문법과 유사한 JSX 를 사용하기 떄문에, HTML을 작성하듯 코드를 작성할 수 있어 편리하며 가독성이 좋다.

4. 동적 페이지에선 유저 인터랙션에 의한 view의 변화가 빈번하다. 이랙트에선 가상 DOM을 사용해서, 최종적인 변화만을 실제 DOM에 전달하기 때문에 연산 비용이 비교적 적게 든다.

## 리액트가 다른 프레인워크랑 다른점 장점 단점

- 앵귤러

  - 기능이 풍부하고 규모가 큰 애플리케이션을 개발할 떄
  - 믿을 수 있고 확장 가능한 프레임워크가 필요할 떄
  - 채팅 앱이나 메시징 앱과 같은 실시간 애플리케이션을 개발할 때
  - 장기프로젝트이며, 투자규모도 상당한 웹앱을 개발할 때
  - 타입스크립트로 코딩해야 할 떄
  - 객체지향 프로그래밍을 해야 할 떄

- 뷰

  - 시장 진입 단계에서 필요한 프레임워크를 선택할 때
  - 작고 가벼운 애플리케이션을 개발할 때
  - 기존의 프로젝트에서 현대적이지만 제한된 리소스를 가진 프레임워크로 해야할 때
  - 기업이 아니라 사용자 커뮤니티의 지원을 받는 프레임워크를 원할 떄

- 리액트

  - 빠른 일정 안에 엔터프라이즈 수준의 가벼우면서도 현대적인 애플리케이션을 개발할 때
  - 웹사이트 개발 솔루션을 안전하게 보호할 수 있는 유연한 프레임워크가 필요할 떄
  - 크로스 플랫폼 애플리케이션이나 싱글 페이지 애플리케이션을 개발할 때
  - 기존의 앱에서 기능성을 확장할 때
  - 강력한 커뮤니티 지원과 솔루션이 필요할 떄

---

- Angular : Google에서 개발한 Framework. TypeScript 기반으로 매우 안정적이고 탄탄한 Frontend App 개발이 가능. 무겁고 배우기 어렵다는 단점이 있다. (MVC Architecture, Model-View-Control)

- React : Facebook에서 개발한 Library. “지속적으로 데이터가 변화하는 대규모 애플리케이션 구축하는 것” 을 목표로 한다.
  리액트는 오로지 View만 담당한다. 그만큼 내장되어 있는 기능이 부족해 third-party 라이브러리(ex. React-router, Redux)를 함께 사용한다.
  페이스북의 지속적인 관리와 함께 생태계가 활성화 되어 있으며 가장 큰 커뮤니티를 가지고 있다.

- Vue : 2014년 Evan You라는 개인이 개발한 Framework. 다른 프레임워크(라이브러리)에 비해 배우기 쉬움. 가장 나중에 생겼지만 성장 속도가 정말 빠르다. (MVVM Architecture, Model-View-ViewModel)
