// 테스트 코드

const request = require('supertest');
const should = require('should');
const app = require('../app');

describe('GET /users 는', function () {
    describe('성공시',  () => {
        it('유저 객체를 담은 배열로 응답한다', (done) => {
            request(app)
                .get('/users')
                .end((err, res) => {
                    res.body.should.be.instanceof(Array);
                    done();
                })
        });

        it('최대 limit 갯수만큼 응답한다', (done) => {
            request(app)
                .get('/users?limit=2')
                .end((err, res) => {
                    res.body.should.have.lengthOf(2);
                    done();
                })
        });
    });

    describe('실패시', function () {
        it('limit이 숫자형이 아니면 400을 응답한다',  (done) => {
            request(app)
                .get('/users?limit=two')
                .expect(400)
                .end(done());
        });
    });
});

describe('GET /users/1는', () => {
    describe('성공시', function () {
        it('id가 1인 유저 객체를 반환한다', function (done) {
            request(app)
                .get('/users/1')
                .end((err, res) => {
                    res.body.should.have.property('id', 1);
                    done();
                });
        });
    });
    describe('실패시', function () {
        it('id가 숫자가 아닐경우 400으로 응답한다', function (done) {
            request(app)
                .get('/users/one')
                .expect(400)
                .end(done());
        });
        it('id로 유저를 찾을수 없을 경우 404로 응답한다', (done) => {
            request(app)
                .get('/users/999')
                .expect(404)
                .end(done());
        });
    });
});

describe('DELETE /users/1은', () =>{
    /* 성공 케이스 */
    describe('성공 시', () => {
        it('204를 응답한다', (done)=>{
            request(app)
                .delete('/users/1')
                .expect(204)
                .end(done());
        });
    });

    /* 실패 케이스 */
    describe('실패 시', () => {
        it('400을 응답한다', (done) => {
            request(app)
                .delete('/users/one')
                .expect(400)
                .end(done());
        });
    });
});

describe('POST /users는', () => {
    /* 성공 케이스 */
    describe('성공 시', () => {
        let body;
        name = 'test';

        before((done) => {
            request(app)
                .post('/users')
                .send({name: name})
                .expect(201)
                .end((err, res) => {
                    body = res.body;
                    done();
                });
        });
        it('생성된 객체를 반환한다', () => {
            body.should.have.be.property('id');
        });
        it('등록된 name을 반환한다', () => {
            body.should.have.be.property('name', name);
        });
    });

    /* 실패 케이스 */
    describe('실패 시', () => {
        it('name 값을 누락할 경우 400 반환', (done) => {
            request(app)
                .post('/users')
                .send({})
                .expect(400)
                .end(done());
        });

        it('name 중복의 경우 409 반환', (done) =>{
            request(app)
                .post('/users')
                .send({name: 'alice'})
                .expect(409)
                .end(done());
        });
    });
});

describe('PUT /users/2는', () => {
    /* 성공 케이스 */
    describe('성공 시', () => {
        it('변경된 name을 반환함',  (done) => {
            let name = 'jinbro-park';
            request(app)
                .put('/users/2')
                .send({name: name})
                .end((err, res) => {
                    res.body.should.have.property('name', name);
                    done();
                });
        });
    });

    /* 실패 케이스 */
    describe('실패 시', () => {
        it('id가 숫자가 아닐 경우 400 코드 응답', (done) => {
            request(app)
                .put('/users/two')
                .expect(400)
                .end(done());
        });

        it('name 값이 누락되었을 경우 400 코드 응답', (done) => {
            request(app)
                .put('/users/2')
                .send({})
                .expect(400)
                .end(done());
        });

        it('id 값으로 유저를 찾지 못했을 경우 404 코드 응답', (done) => {
            request(app)
                .put('/users/999')
                .send({name: 'fake'})
                .expect(404)
                .end(done());
        });

        it('name 값이 이미 존재하는 경우 409 코드 응답', (done) => {
            request(app)
                .put('/users/2')
                .send({name: 'bek'})
                .expect(409)
                .end(done());
        });
    });
});