const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const PostgreSqlStore = require('connect-pg-simple')(session);
const dbConfig = require('../test/db/knex.js');
const auth = require('./routes/auth.js');
const app = express();
const router = require('./routes.js');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
const sessionOptions = {
	secret: 'secret',
	name: 'pitchmeio',
	store: new PostgreSqlStore({
		conString: dbConfig.config.connection
	}),
	cookie: {},
	resave: true,//resave true updates session on each page view. this avoids session expire
	saveUninitialized: true
};
app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());

// Setup /client as static directory
app.use(express.static(path.resolve(__dirname, '../client')));

// Api and Authentication routes
app.use('/api', router);
app.use('/auth', auth);

app.get('*', function(req, res) {
	res.sendFile(path.resolve(__dirname, '../client/index.html'))
})

app.listen(8080, function() {
	console.log('listening to 8080');
});

module.exports = app;
