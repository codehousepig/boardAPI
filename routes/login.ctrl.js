// api 로직

/* DB 연결 */
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/board.db', err => {
    if (err) {
        return console.error(err.message);
    }
    console.log("Successful connection to the database 'board.db'");
});

/* Signup 관련 */
const signupView = function (req, res) {
    res.render('signup');
};

const signup = function (req, res) {
    const name = req.body.name;
    const passwd = req.body.passwd;

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
        `insert into user(name, passwd) 
        values ('${name}', '${passwd}')`;
    db.all(query, (err) => {
        if (err) {
            throw err;
        }
    });
    res.status(201);
    res.redirect(`/`);
};

/* Login 관련 */
const loginView = function (req, res) {
    res.render('login');
};

const login_process = function (req, res) {
    const name = req.body.name;
    const passwd = req.body.passwd;

    const queryE = `select name from user where name = '${name}'`;
    db.all(queryE, (err, result) => {
        if(err) throw err;
        console.log(result[0].name);
        const authName = result[0].name;

        const queryP = `select passwd from user where passwd = '${passwd}'`;
        db.all(queryP, (err, result) => {
            if(err) throw err;
            console.log(result[0].passwd);
            const authPasswd = result[0].passwd;

            if (name === authName && passwd === authPasswd) {
                // res.send('Success!');
                req.session.is_logined = true;
                req.session.name = authName;
                req.session.save(function () {
                    res.redirect(`/`);
                });
            } else {
                res.send('NO!!');
            }
        });
    });
};

const logout = function (req, res) {
    req.session.destroy(function (err) {
        if(err) throw err;
        req.session;
    });
    res.redirect(`/`);
};

module.exports = {
    loginView: loginView,
    login_process: login_process,
    logout: logout,
    signupView: signupView,
    signup: signup
};