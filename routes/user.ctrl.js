// api 로직

/* DB 연결 */
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/board.db', err => {
    if (err) {
        return console.error(err.message);
    }
    console.log("Successful connection to the database 'board.db'");
});

const all = function (req, res) {
    req.query.page = req.query.page || 1; // 페이지 번호 기본값 1
    req.query.size = req.query.size || 10; // 페이지당 보여질 글의 개수 기본값 10

    const page = parseInt(req.query.page, 10);
    const size = parseInt(req.query.size, 10);
    if (Number.isNaN(page)) return res.status(400);
    else if (Number.isNaN(size)) return res.status(400);

    const jumpSize = (page - 1) * size; // 다음 페이지로 넘어갈 때 건너뛸 글의 개수

    const pageQuery1 = `select count(*) as 'count' from post`;
    db.all(pageQuery1, (err, result) => {
        if(err) throw err;
        const totalSize = Number(result[0].count);
        const totalPage = Math.ceil(totalSize / size); // (총 글의 개수 / 페이지당 보여질 글의 개수) 반올림
        const startPage = ((Math.ceil(page / size) - 1) * size) + 1;
        let endPage = (startPage + size) - 1;

        const pageQuery2 = `select * from post order by pno desc limit '${jumpSize}', '${size}'`;
        db.all(pageQuery2, (err, result) => {
            if(err) throw err;
            endPage = endPage > totalPage ? totalPage : endPage; // e.g. endPage = 20, totalPage = 18 -> endPage = 18
            const pagination = { page, startPage, endPage, totalPage};
            res.json(result);
            console.log(pagination);
        });
    });
}

const read = function (req, res) {
    const pno = parseInt(req.params.id, 10);
    if (Number.isNaN(pno)) return res.status(400);

    // const user = users.filter((user) => user.id === pno)[0];
    // if (!user) return res.status(404);

    const query = `select * from post where pno == ${pno}`;
    db.all(query, (err, rows) => {
        if (err) {
            throw err;
        }
        rows.forEach((row) => {
            console.log(row);
            res.json(row);
        });
    });
}

const create = function(req, res){
    let author = 'guest';
    if (req.session.is_logined) {
        author = req.session.name;
    }
    const title = req.body.title;
    const content = req.body.content;
    const regdate = Date.now();
    const moddate = Date.now();

    // if(!name){
    //     return res.status(400);
    // }
    //
    // const isExist = users.some((user) => {
    //     return user.name === name;
    // });
    //
    // if(isExist){
    //     return res.status(409);
    // }

    const query =
        `insert into post(title, content, author, regdate, moddate) 
            values ('${title}', '${content}', '${author}', '${regdate}', '${moddate}')`;
    db.all(query, (err) => { if (err) throw err; });
    res.status(201).json({message: 'Create Success!'});
}

const del = function(req, res){
    const pno = parseInt(req.params.id, 10);
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
                    // db.all(queryDel, (err) => { if (err) throw err; });
                    console.log(queryDel);
                    res.json({message: 'Delete Success!'});
                    break;
                } else {
                    console.log(name + "이 삭제 가능한 게시물은 " + result[i].pno + "번 게시물입니다.");
                }
            }
        });
    }
};

const update = function(req, res){
    const pno = parseInt(req.params.id, 10);
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
                    // db.all(queryUpdate, (err) => { if (err) throw err; });
                    console.log(queryUpdate);
                    res.json({message: 'Update Success!'});
                    break;
                } else {
                    console.log(author + "이 수정 가능한 게시물은 " + result[i].pno + "번 게시물입니다.");
                }
            }
        });
    }
};

module.exports = {
    all: all,
    read: read,
    del: del,
    create: create,
    update: update
};