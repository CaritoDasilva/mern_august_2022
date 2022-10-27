const express = require('express');

const app = express();
const port = 8080;

app.use( express.json() );

app.use(express.urlencoded({ extended:true }));

require('./server/config/mongoose.config');

const usersRoutes = require('./server/routes/users.routes');

usersRoutes(app);

app.listen( port, () => console.log('We are listening from my first server!!!') );