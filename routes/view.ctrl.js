// api 로직
const express = require('express');
const router = express.Router();

/* DB 연결 */
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/board.db', err => {
    if (err) {
        return console.error(err.message);
    }
    console.log("Successful connection to the database 'board.db'");
});

const mainView = function (req, res) {
    console.log(req.session);

    res.render('main', {
        is_logined: req.session.is_logined,
        email: req.session.name
    });
};

const postCreate = function (req, res) {
    let author = 'guest';
    if (req.session.is_logined) {
        author = req.session.name;
    }
    const title = req.body.title;
    const content = req.body.content;
    const regdate = Date.now();
    const moddate = Date.now();

    const query =
        `insert into post(title, content, author, regdate, moddate) 
            values ('${title}', '${content}', '${author}', '${regdate}', '${moddate}')`;
    db.all(query, (err) => { if (err)  throw err; });
    res.redirect('/');
};

const postDelete = function (req, res) {
    const pno = parseInt(req.body.pno, 10);
    if(isNaN(pno)) return res.status(400);

    const name = req.session.name;
    if (!req.session.is_logined) {
        console.log("게스트입니다. 로그인 하세요.");
        res.redirect('/');
        return false;
    } else {
        console.log(name + " 로그인 중");
        const queryFindPNO = `select pno from post where author = '${name}'`;
        db.all(queryFindPNO, (err, result) => {
            if(err) throw err;
            for (var i in result) {
                if (pno == result[i].pno) {
                    console.log(result[i].pno + "번 게시물 삭제가능합니다!");
                    const queryDel = `delete from post where pno == ${pno}`;
                    db.all(queryDel, (err) => { if (err) throw err; });
                    console.log(queryDel);
                    res.redirect('/');
                    break;
                } else {
                    console.log(name + "이 삭제 가능한 게시물은 " + result[i].pno + "번 게시물입니다.");
                }
            }
        });
    }
};

const postUpdate = function (req, res) {
    const pno = parseInt(req.body.pno, 10);
    if(isNaN(pno)) return res.status(400);

    const title = req.body.title;
    const content = req.body.content;
    const author = req.session.name;
    const moddate = Date.now();

    if (!req.session.is_logined) {
        console.log("게스트입니다. 로그인 하세요.");
        res.redirect('/');
        return false;
    } else {
        console.log(author + " 로그인 중");
        const queryFindPNO = `select pno from post where author = '${author}'`;
        db.all(queryFindPNO, (err, result) => {
            if(err) throw err;
            for (var i in result) {
                if (pno == result[i].pno) {
                    console.log(result[i].pno + "번 게시물 수정가능합니다!");
                    const queryUpdate =
                        `UPDATE post SET 
                           title = '${title}',
                           content = '${content}',
                           author = '${author}',
                           moddate = '${moddate}'
                        WHERE pno == '${pno}'`;
                    db.all(queryUpdate, (err) => { if (err) throw err; });
                    console.log(queryUpdate);
                    res.redirect('/');
                    break;
                } else {
                    console.log(author + "이 수정 가능한 게시물은 " + result[i].pno + "번 게시물입니다.");
                }
            }
        });
    }
};

module.exports = {
    mainView: mainView,
    postCreate: postCreate,
    postDelete: postDelete,
    postUpdate: postUpdate
};