const sequelize = require('./config/connection');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const path = require('path');

const hbs = exphbs.create();

const app = express();
const PORT = 3001;

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