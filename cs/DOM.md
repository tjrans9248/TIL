# DOM

## BOM

브라우저와 관련된 객체들의 집합을 브라우저 객체 모델(BOM: Browser Object Model) 이라고 부릅니다. 이 브라우저 객체 모델(BOM)을 이용해서 Browser와 관련된 기능들을 구성합니다. DOM은 이 BOM 중의 하나입니다.

브라우저 객체 모델(BOM)의 최상위 객체는 window 객체입니다. DOM 은 이 window 객체의 하위 객체이기도 합니다.

## DOM

DOM 을 풀어서 설명하면 Document Object Model입니다. 해석을 하면 '문서 객체 모델' 이죠.

이 문서 객체란 <html> 이나 <body> 같은 html 문서의 태그들을 js가 이용할 수 있는 객체(Object)로 만들면 그것을 문서 객체라고 합니다.

즉, _DOM은 넓은 의미로 웹 브라우저가 HTML 페이지를 인식하는 방식을 의미합니다._ 조금 좁은 의미로 본다면 document 객체와 관련된 객체의 집합을 의미할 수도 있습니다.

## DOM의 형태

DOM tree

![image](/cs/images/dom%20tree.png)

dom tree는 하나의 root node에서 시작해서 아래로 퍼져나가는 형태로 그립니다.

- tree에서는 위쪽의 node를 부모 아래쪽 노드를 자식이라고 합니다.
- root node는 가장 최상단에서 시작하는 node니가 부모가 없는 node가 됩니다. 그리고 자식이 없는 node를 leaf node 라고 합니다.

## node란 무엇인가?

tree 구조에서 root 노드를 포함한 모든 개개의 개체를 node라고 합니다.  
이중, HTML 태그를 요소노드(element node) 라고 부르고 요소 노드 안에 있는 글자를 text 노드라고 부르기도 합니다.

## Javascript로 문서객체를 생성한다는 것은 어떤 의미인가?

1. 웹 브라우저가 HTML 페이지에 적혀 있는 태그를 읽으면 태그를 생성하는 것

2. 원래 HTML에 없던 문서객체를 js를 이용해서 생성할 수 있습니다. 이런 과정을 동적으로 문서객체를 생성한다고 합니다. 따라서 js로 문서객체를 생성한다는 것은 처음에는 HTML 페이지에 없던 문서객체를 동적으로 생성하는 것이 됩니다.
