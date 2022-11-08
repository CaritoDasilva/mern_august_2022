const express = require('express');
const app = express();
const cors = require('cors') 
const port = 8080;

app.use(cors());

app.use( express.json() );

app.use(express.urlencoded({ extended:true }));

require('./server/config/mongoose.config');

require('./server/routes/travels.routes')(app);

app.listen( port, () => console.log('We are listening from my first server!!!') );