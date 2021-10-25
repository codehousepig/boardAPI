# boardAPI
[위코드 x 원티드] 백엔드 프리온보딩 선발 과제

---
## 구현한 방법과 이유에 대한 간략한 내용
사용언어: JavaScript <br>
프레임워크: Express <br>
구현한 방법: 라우팅 역할을 해주는 A.js 와 로직을 담당하는 A.ctrl.js 를 먼저 만들고, 테스트를 위한 간단한 view 를 만들었습니다. <br>
이유: 스프링 부트를 이용한 MVC 디자인 패턴에 익숙하였고, 웹에서 더 많이 사용하는 JavaScript를 선택하였습니다.

## 자세한 실행 방법
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

6. 회원가입 화면 - view <br>
Method: GET, 127.0.0.1:3000/auth/signup
<div>
  <img src="https://user-images.githubusercontent.com/61304585/138640802-dcd3a5f4-bc3a-4e78-a84a-47c87abbc35c.png"  width="200"> 
</div>
<br>

7. 회원가입 <br>
Method: POST, 127.0.0.1:3000/auth/signup
<div>
  <img src="https://user-images.githubusercontent.com/61304585/138641867-39ff7ff1-949b-42af-bc9a-0ba490871ae6.png"  width="200"> 
</div>
<div>
  <img src="https://user-images.githubusercontent.com/61304585/138641943-8e1a66a1-994d-4d09-905d-ed96de466a23.png"  width="500"> 
</div>
<div>
  <img src="https://user-images.githubusercontent.com/61304585/138641982-febd2b8a-2d14-4dd0-b855-306d51a7fd27.png"  width="200"> 
</div>
<br>

8. 로그인 화면 - view <br>
Method: GET, 127.0.0.1:3000/auth/login
<div>
  <img src="https://user-images.githubusercontent.com/61304585/138642755-7f3d92f2-2a9e-47b5-9318-688239694d1e.png"  width="200"> 
</div>
<br>

9. 로그인 <br>
Method: POST, 127.0.0.1:3000/auth/login_process
<div>
  <img src="https://user-images.githubusercontent.com/61304585/138642378-1e4d8ff9-6dc3-478c-92b5-60c17980e3ec.png"  width="200"> 
  <img src="https://user-images.githubusercontent.com/61304585/138642459-934731fc-835c-441e-b693-3a32ca39eb9c.png"  width="200"> 
</div>
<br>
<div>
  <img src="https://user-images.githubusercontent.com/61304585/138642903-7b91ce98-841b-4e55-9365-419cb2848d1f.png"  width="500"> 
  <img src="https://user-images.githubusercontent.com/61304585/138643147-21619775-8615-4e81-a6a8-32816ebf772b.png"  width="500"> 
</div>
<br>

10. 로그아웃 -> 11. 로그인, 회원가입 UI <br>
Method: GET, 127.0.0.1:3000/auth/logout -> Method: GET, 127.0.0.1:3000/
<div>
  <img src="https://user-images.githubusercontent.com/61304585/138643468-8f28ea51-e7f4-4713-8c10-4a322deda4ae.png"  width="200"> 
</div>
<br>
<div>
  <img src="https://user-images.githubusercontent.com/61304585/138643349-6cdcaa23-e721-4828-b2d8-3fbbbddb0123.png"  width="500"> 
  <img src="https://user-images.githubusercontent.com/61304585/138643378-c7746c2b-13bc-4199-91ee-e555c15462ab.png"  width="500"> 
</div>
<br>

12. 로그인 이후 글 작성 UI <br>
Method: POST, 127.0.0.1:3000/create
<div>
  <img src="https://user-images.githubusercontent.com/61304585/138644612-f0dcca07-2a59-4936-8e7d-08fc5863c4fe.png"  width="200"> 
  <img src="https://user-images.githubusercontent.com/61304585/138644762-c1e286de-9f3b-4a9a-acbe-d6812d83a1dd.png"  width="200"> 
  <img src="https://user-images.githubusercontent.com/61304585/138644804-b39b1863-ff54-4c3d-b36d-7f230a62157f.png"  width="500">
  <img src="https://user-images.githubusercontent.com/61304585/138645007-1607653f-755e-4315-a2f8-a6d9a52d0efa.png"  width="500"> 
</div>
<br>

13. 로그인 이후 글 삭제 UI <br>
Method: POST, 127.0.0.1:3000/delete
<div>
  <img src="https://user-images.githubusercontent.com/61304585/138645280-daac569c-9065-4496-b45b-b898977c7884.png"  width="200"> 
  <img src="https://user-images.githubusercontent.com/61304585/138645348-551c3465-2596-49ff-aadb-04290d27d899.png"  width="200"> 
  <img src="https://user-images.githubusercontent.com/61304585/138645160-a51cfd4b-dee0-41be-a6ec-bff6faa582a7.png"  width="500">
  <img src="https://user-images.githubusercontent.com/61304585/138645467-8e809a97-57e0-46e7-8aa2-4700309ce7ff.png"  width="500"> 
</div>
<div>
  <img src="https://user-images.githubusercontent.com/61304585/138645577-b461b3d9-adf6-40f4-ab69-0f61d3c2d87c.png"  width="200"> 
  <img src="https://user-images.githubusercontent.com/61304585/138645601-83e95950-3247-4b44-afc8-1bf91677df68.png"  width="200"> 
  <img src="https://user-images.githubusercontent.com/61304585/138645874-41385177-c886-459c-a4b6-92355f0ca9d2.png"  width="500"> 
</div>
<br>

14. 로그인 이후 글 수정 UI <br>
Method: POST, 127.0.0.1:3000/update
<div>
  <img src="https://user-images.githubusercontent.com/61304585/138645826-79742215-30e7-4a70-8510-ef66e5b7beae.png"  width="200"> 
  <img src="https://user-images.githubusercontent.com/61304585/138646044-e925b3d6-cfaa-47de-abb9-c66c47eadbf9.png"  width="200"> 
  <img src="https://user-images.githubusercontent.com/61304585/138646082-f740456c-d6ff-43c7-b32c-3ecc2b816e0b.png"  width="500"> 
</div>
<div>
  <img src="https://user-images.githubusercontent.com/61304585/138646189-23c713f1-a982-413a-8073-88fbc60310ee.png"  width="200"> 
  <img src="https://user-images.githubusercontent.com/61304585/138646261-1a824674-edea-4ea4-925b-bb284ee9172f.png"  width="400"> 
  <img src="https://user-images.githubusercontent.com/61304585/138646317-d1543495-aa90-43ba-9f06-0467a5f62d5d.png"  width="500"> 
</div>
<br>

## api 명세
<div>
  <img src="https://user-images.githubusercontent.com/61304585/138657730-ebfa3427-77f0-4741-9fe3-f450c7ec9bfd.png"  width="300"> 
</div>
<br>

## 글
### 3. 작성
``` javascript
POST /posts
```
* Request
```json
{
    "title":"test22",
    "content":"test...22"
}
```
* Response
```json
{
    "message": "Create Success!"
}
```
### 4. 수정
``` javascript
PUT /posts/{pno}
```
* Request
```json
{
    "title":"test25",
    "content":"test...25"
}
```
* Response
```json
{
    "message": "Update Success!"
}
```
### 5. 삭제
``` javascript
DELETE /posts/{pno}
```
* Response
```json
{
    "message": "Delete Success!"
}
```

## 회원
### 7. 가입
``` javascript
POST /auth/signup
```
* Request
```json
{
    "name":"user7",
    "passwd":"7777"
}
```
* Response
```
redirect(`/`)
```
### 9. 로그인
``` javascript
POST /auth/login_process
```
* Request
```json
{
    "name":"user7",
    "passwd":"7777"
}
```
* Response
```
redirect(`/`)
```

## UI
### 12. 글 작성
``` javascript
POST /create
```
* Request
```json
{
    "title":"test22",
    "content":"test...22"
}
```
* Response
```
redirect('/');
```
### 13. 글 삭제
``` javascript
POST /delete
```
* Request
```json
{
    "pno":"26"
}
```
* Response
```
redirect('/');
```
### 14. 글 수정
``` javascript
POST /update
```
* Request
```json
{
    "pno":"18"
    "title":"loginupdate",
    "content":"update...user"
}
```
* Response
```
redirect('/');
```
