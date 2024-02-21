<div align="center">
  
# 🫥익명 사회 웹사이트 및 개인 블로그 프로젝트🫥
## 작성 동기 및 소개
#### 기술블로그를 작성하기 위해서 플랫폼을 선택하던중, 저에게는 글을 작성하는 것 뿐만이 아닌, 삶에서 오는 감각적인 부분들과 생각들 그리고 컴퓨터와 보내는 시간들에서 얻게되는 것 들을 아카이빙 하기 위한 플랫폼을 한곳에서 보고싶어서 이런 간소한 공간을 작성하게 되었습니다. 그리고 다른 이유는...
#### 이러한 곳을 필요로 하는 사람은 많다고 봅니다. 예를 들어 사진과 글 그리고 비디오를 저장하는 인스타그램과 페이스북이 좋은 예라고 생각이 듭니다. 하지만 불특정 다수에게 노출이 되어 데이터는 저장되어지고 그 데이터들이 모여서 또다른 대량 소비를 만들어 내는 결과를 낳습니다. 거대기업들은 경제 성장과 소비자의 욕구 증가를 데이터로서 조종한다고 믿습니다. 또한 이러한 대량 소비는 현재 현대 사회에 대두되는 환경 오염을 유발하며, 양극화를 심화시킬수 있습니다. 이는 사회 갈등과 사회 불안정성 그리고 결국에는 경제 성장 저해를 불러 일으킨다고 알고있습니다.
#### 우리의 삶은 쉽게 대량 소비의 문화에서 벗어날수 없는것을 저는 물론 인정하지만, 가끔은 그곳에서 벗어나서, 익명의 사람들에게 자신의 감정과 생각을 공유하는 곳을 제공 하고싶었습니다.
***
## 사용된 기술
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=000000"/><img src="https://img.shields.io/badge/Styled-Components-DB7093?style=flat-square&logo=StyledComponents&logoColor=DB7093"/><img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=000000"/><img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=ffffff"/><img src="https://img.shields.io/badge/ReactQuery-FF4154?style=flat-square&logo=reactquery&logoColor=000000"/><img src="https://img.shields.io/badge/Recoil-3578E5?style=flat-square&logo=recoil&logoColor=000000"/><img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=000000"/><img src="https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=000000"/><img src="https://img.shields.io/badge/Yarn-2c8ebb?style=flat-square&logo=yarn&logoColor=000000"/><img src="https://img.shields.io/badge/p5.js-ED225D?style=flat-square&logo=p5.js&logoColor=ffffff"/><img src="https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=three.js&logoColor=ffffff"/><img src="https://img.shields.io/badge/tensorflow-FF6F00?style=flat-square&logo=tensorflow&logoColor=000000"/><img src="https://img.shields.io/badge/Spotify-1DB954?style=flat-square&logo=spotify&logoColor=000000"/>
###### 🔧 상태관리를 함에 있어서, <img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=000000"/>에서 받아오는 서버상태는 <img src="https://img.shields.io/badge/ReactQuery-FF4154?style=flat-square&logo=reactquery&logoColor=000000"/>로 관리를 하고, 쓸데없는 데이터통신을 줄이기 위해, 몇개의 서버상태는 재사용하기 위해서 <img src="https://img.shields.io/badge/Recoil-3578E5?style=flat-square&logo=recoil&logoColor=000000"/>을 사용했습니다.
###### 🔧 개발 과정에서 컴포넌트와 라우트 그리고 파일의 이름이 통일되지 않은 부분들이 있습니다. (향후 업데이트)
###### 🔧 빠른 개발과 데이터베이스를 다루는 역량의 부족함으로 인해서 통합 서비스 프레임워크인 <img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=000000"/>를 사용해서 조금 더 편리하게 빌드하게 되었습니다. <img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=000000"/> 와 <img src="https://img.shields.io/badge/ReactQuery-FF4154?style=flat-square&logo=reactquery&logoColor=000000"/>의 궁합은 상당히 간편하고 편리했습니다.(소규모 프로젝트이기때문에 가능했다고 생각합니다.)
###### 🔧 첫번째 핵심 기능은 랜딩페이지에서 자신의 얼굴을 익명인들의 한명이라고 표현하고 싶었습니다. 그래서 <img src="https://img.shields.io/badge/tensorflow-FF6F00?style=flat-square&logo=tensorflow&logoColor=000000"/> 라이브러리를 웹캠으로 사람얼굴을 인지시킨후, 메쉬화 시키는 것을 작성했습니다.
###### 🔧 두번째 핵심 기능은 eye 페이지에서 눈으로 볼수느낄수 있는 사진들을 보여주고 싶었습니다. 그런데 그 사진들은 제가 알지 못하는 사람들의 흑백사진으로만 이루어져 있고, 이곳은 오직 저 혼자만 업로드를 할수있는 곳 입니다.
###### 🔧 세번째 핵심 기능은 brain 페이지이고, 이곳은 생각을 적고 정리해서 아카이빙 하는 블로그 페이지입니다. 이곳은 누구나 업로드를 할 수 있으며, 업로드 삭제 수정을 할 수 있으며, <img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=000000"/>에 데이터는 저장 됩니다.
###### 🔧 네번째 핵심 기능은 body 페이지에서 사용된 <img src="https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=three.js&logoColor=ffffff"/> 라이브러리 입니다. 3D 스캔이 된 어떤 한 사람의 집의 모습입니다. 
###### 🔧 마지막 핵심 기능은 ear 페이지의 spotify 공유 페이지 입니다. <img src="https://img.shields.io/badge/Spotify-1DB954?style=flat-square&logo=spotify&logoColor=000000"/> open API 를 사용해서 사용자가 음악을 공유할수 있으며, 함께 글도 작성 할 수 있습니다. ( 향후 apple music도 지원 예정)

***

  ***KOR***
**스택 선택의 이유** : React.js 를 선택한 이유는 React.js의 훅을 트리거로서 컴포넌트의 생애주기를 지배 하는 방식이 저의 머리에 있는 3차원 적인 공간에 그리기에 적절했습니다. 

 사용하면서 불편했던점은 React.js의 단방향적 데이터 바인딩으로 인해, 다른 컴포넌트에서 필요한 데이터를 넘겨주기에는 얽힌 실타래 처럼 되었습니다. 

 그래서 처음에는 useState와 사용법이 비슷한 Zustand를 사용하였지만, 서버상태와 클라이언트상태가 얽혀져버려 데이터를 담아 놓는 공간이 복잡해져 버렸습니다. 

 그래서 Tanstack-Query로 Firestore에서 받아온 데이터는 서버상태로 캐싱을 해놓고, 그 중에서 필요한 것은 Recoil로 클라이언트상태로 만들어서 문제를 해결했습니다.

 그 중에서도 클라이언트상태를 전역상태로 관리하기 위한 라이브러리로 Zustand가 아닌 Recoil로 바꾼이유는 FLUX패턴을 사용하여 비동기처리도하는 Zustand보다는 심플하게 상태만을 useState처럼 가지고 담아두고 싶었기 때문입니다. 

 이보다 간단하다는 Jotai가 있었지만, 작성당시에는 게으름 때문에 Jotai에 대해서 넘겨짚었기 때문입니다. 

 그리고 또한 Styled-components를 사용하여, 컴포넌트의 가독성을 높이고 전체적인 디렉토리의 복잡성도 낮췄다고 생각듭니다. 

 Firebase를 사용한 이유는 저의 부족한 실력으로 DB를 다룰수 없기 때문에, 백엔드 서비스 프레임워크를 사용하기로 하였습니다. 

 그전에 작성했었던 React.js 와 Express.js로 웹서버간의 통신에는 성공했지만, DB의 부재로 인하여 REST API의 CRUD작성까지 도달하지는 못했습니다.

***ENG***
**Reasons for technology stack selection** : 

I chose React.js because I found the way React.js hooks control the lifecycle of components to be appropriate for drawing in a 3D space in my head.

One of the inconveniences I found while using React.js was that the one-way data binding made it difficult to pass data to other components, like a tangled thread.

At first, I used Zustand, which is similar to useState in terms of usage, but the server state and the client state became entangled, making the space where the data was stored complex.

So I solved the problem by caching the data from Firestore with Tanstack-Query as server state, and then creating the data as client state with Recoil in need of.

 The reason I chose Recoil over Zustand for managing the client state as a global state is that I wanted to keep the state simple like useState, rather than Zustand, which uses the FLUX pattern for asynchronous processing. 

 There was also Jotai, which is simpler than Recoil, but I overlooked it at the time because I was lazy. 

 I also think that using Styled-components has improved the readability of components and reduced the overall complexity of the directory.

I used Firebase because I couldn't handle the database with my lack of skills, so I decided to use a backend service framework.

 I had succeeded in communicating between web servers with React.js and Express.js before, but I couldn't reach the CRUD of REST API due to the absence of a database.





</div>
