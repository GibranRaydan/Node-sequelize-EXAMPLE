const express = require("express");
const User = require("./models/user");
const app = express();
const router = express.Router();
const port = process.env.PORT;

app.use('/', require('./routes/routes'));

/* app.get('/',(req,res) => {
    res.send('Hello World')
}); */

app.listen(port, ()=> {
    console.log('App is listening at http://localhost:'+ port);
});

