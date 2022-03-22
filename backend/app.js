'use strict'

/**
 * init dotenv
 * init libraries
 * init port
 * cors setup
 * routing
 * port connection
 */

// dotenv
require('dotenv').config();

// libraries
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { router } = require('../../tokobuku-kita/toko-buku-backend/Router/router');

// port

const PORT = process.env.PORT || 3000;

// cors
let originOptionCors = {
    origin: `http://localhost:${PORT}`

}
app.use(cors(originOptionCors));

// routing
app.use('/', router)

// connection port
app.listen(PORT, function(){
    console.log(`connected port at ${PORT}`);
})