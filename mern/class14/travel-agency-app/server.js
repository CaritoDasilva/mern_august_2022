const express = require('express');
const app = express();
const cors = require('cors') 
const port = 8080;
const cookieParser = require('cookie-parser');
const { socketEvents } = require('./server/controllers/sockets.controllers');

require('dotenv').config();

console.log('secretito', process.env.SECRET_KEY)

app.use(cookieParser());

app.use(cors());

app.use( express.json() );

app.use(express.urlencoded({ extended:true }));

require('./server/config/mongoose.config');

require('./server/routes/travels.routes')(app);
require('./server/routes/users.routes')(app);

const server = app.listen( port, () => console.log('We are listening from my first server!!!') );

socketEvents(server);