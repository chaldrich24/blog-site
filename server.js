const sequelize = require('./config/connection');
const express = require('express');

const app = express();
const PORT = 3001;

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`You are now connected to port ${PORT}`);
    })
});