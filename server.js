const routes = require('./controllers');
const path = require('path');

const sequelize = require('./config/connection');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
    secret: 'Super secret secret secret',
    cookie: {},
    resave: false,
    saveUnauthorized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

const hbs = exphbs.create();

const app = express();
const PORT = 3001;

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`You are now connected to port ${PORT}`);
    })
});