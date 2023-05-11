const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const path = require('path');

// import db connection
const sequelize = require('./config/connection');

// create new store
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// create express server, set port
const app = express();
const PORT = process.env.PORT || 3001;

// configure session object with store
const sess = {
    secret: 'secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

// add express-session (express middleware)
app.use(session(sess));

// create default handlebars engine, can pass in custom helpers
const hbs = exphbs.create();
;
// handlebars configurations, inform express
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve static files/import css with direct path
app.use(express.static(path.join(__dirname, 'public')));

// connect to routes in 'controller' folder
app.use(routes);

// sync sequelize models to db and start server
sequelize.sync({force: false})
    .then(() => {
        app.listen(PORT, () =>
        console.log (`Listening at http://localhost:${PORT}`));
    });