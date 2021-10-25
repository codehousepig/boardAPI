# boardAPI
[위코드 x 원티드] 백엔드 프리온보딩 선발 과제

---
### 구현한 방법과 이유에 대한 간략한 내용
사용언어: JavaScript <br>
프레임워크: Express <br>
구현한 방법: 라우팅 역할을 해주는 A.js 와 로직을 담당하는 A.ctrl.js 를 먼저 만들고, 테스트를 위한 간단한 view 를 만들었습니다. <br>
이유: 스프링 부트를 이용한 MVC 디자인 패턴에 익숙하였고, 웹에서 더 많이 사용하는 JavaScript를 선택하였습니다.

### 자세한 실행 방법
(Postman 으로 테스트 진행) <br>
0. 서버 실행
<div>
  <img src="https://user-images.githubusercontent.com/61304585/138636672-94861576-87f4-4cf6-a155-61446bc71c88.png"  width="200"> 
</div>
<br>

1. 글 목록 확인 <br>
Method: GET, 127.0.0.1:3000/posts (기본 size=10, page=1)
<div>
  <img src="https://user-images.githubusercontent.com/61304585/138637155-045d5a1d-e273-4660-996b-61fe6abfa45b.png"  width="500"> 
  <img src="https://user-images.githubusercontent.com/61304585/138637265-0fe0f901-2f6b-4f3a-a884-cf0c7e858a82.png"  width="500"> 
  <img src="https://user-images.githubusercontent.com/61304585/138637380-1f416489-66c8-49b3-97ce-30c569e74285.png"  width="500"> 
</div>
<br>
Method: GET, 127.0.0.1:3000/posts?size=5&page=3
<div>
  <img src="https://user-images.githubusercontent.com/61304585/138637502-2b44edef-18e5-4a5b-b3b5-f15a9cac268d.png"  width="500"> 
  <img src="https://user-images.githubusercontent.com/61304585/138637521-c485652a-768d-4419-a617-587d7c87dba8.png"  width="500"> 
  <img src="https://user-images.githubusercontent.com/61304585/138637545-e5faee26-409c-4d7c-9eb6-8d3428dce83c.png"  width="500"> 
</div>
<br>

2. 글 확인 (Read) <br>
Method: GET, 127.0.0.1:3000/posts/20
<div>
  <img src="https://user-images.githubusercontent.com/61304585/138637751-9f8c7d1b-5459-4196-be56-28aa3128f085.png"  width="500"> 
</div>
<div>
  <img src="https://user-images.githubusercontent.com/61304585/138637773-cff9fa77-a7d5-4e30-baf0-5892ca8328c4.png"  width="200"> 
</div>
<br>

3. 글 작성 (Create) <br>
Method: POST, 127.0.0.1:3000/posts
<div>
  <img src="https://user-images.githubusercontent.com/61304585/138638310-d566345d-6570-43f9-89e3-8f43121c2bd4.png"  width="500"> 
  <img src="https://user-images.githubusercontent.com/61304585/138638434-110abe3a-9f32-44a6-b116-613aed00615a.png"  width="500"> 
</div>
<br>

4. 글 수정 (Update) <br>
Method: PUT, 127.0.0.1:3000/posts/25
<div>
  <img src="https://user-images.githubusercontent.com/61304585/138638801-5366f760-fdfb-4c34-b434-8a34c40a3f0b.png"  width="500"> 
  <img src="https://user-images.githubusercontent.com/61304585/138638934-b68d2c6f-3553-41e4-976f-de52a02cfd45.png"  width="500"> 
</div>
<br>

5. 글 삭제 (Delete) <br>
Method: DELETE, 127.0.0.1:3000/posts/25
<div>
  <img src="https://user-images.githubusercontent.com/61304585/138639079-dbad30ba-90e5-4215-96bf-9ce9ee6274d2.png"  width="500"> 
  <img src="https://user-images.githubusercontent.com/61304585/138639150-a711d85f-8b87-45fd-b70c-247132174de8.png"  width="500"> 
</div>
<br>
