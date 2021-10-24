var express = require('express');
var session = require('express-session');
var FileStore = require('session-file-store')(session);

const app = express();
const bodyParser = require('body-parser');

const user = require('./routes/user');
const login = require('./routes/login');
const view = require('./routes/view');

app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(session({
    secret: 'test',
    resave: false,
    saveUninitialized: true,
    store: new FileStore()
}));

app.use('/posts', user);
app.use('/auth', login);
app.use('/', view);

module.exports = app;
