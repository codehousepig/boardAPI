// api 로직

/* DB 연결 */
const e = require("express");
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/board.db', err => {
    if (err) {
        return console.error(err.message);
    }
    console.log("Successful connection to the database 'board.db'");
});

const index = function (req, res) {
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

const show = function (req, res) {
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

const destroy = function(req, res){
    const pno = parseInt(req.params.id, 10);

    if(isNaN(pno)){
        return res.status(400);
    }

    const query = `delete from post where pno == ${pno}`;
    db.all(query, (err) => {
        if (err) {
            throw err;
        }
    });
    res.status(204);
}

const create = function(req, res){
    const title = req.body.title;
    const content = req.body.content;
    const author = req.body.author;
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
    db.all(query, (err) => {
        if (err) {
            throw err;
        }
    });
    res.status(201);
}

const update = function(req, res){
    const pno = parseInt(req.params.id, 10);
    const title = req.body.title;
    const content = req.body.content;
    const author = req.body.author;
    const moddate = Date.now();

    if(isNaN(pno)){
        return res.status(400);
    }

    // const isConflict = users.some((user) => {
    //     return user.name === name;
    // });
    //
    // if(isConflict){
    //     return res.status(409);
    // }

    console.log(title);

    const query =
        `UPDATE post SET 
           title = '${title}',
           content = '${content}',
           author = '${author}',
           moddate = '${moddate}'
        WHERE pno == '${pno}'`;
    console.log(query);

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

module.exports = {
    index: index,
    show: show,
    destroy: destroy,
    create: create,
    update: update
};