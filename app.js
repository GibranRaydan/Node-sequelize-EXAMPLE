const express = require("express");
const User = require("./models/user");
const app = express();
const port = process.env.PORT;

app.get('/',(req,res) => {
    res.send('Hello World')
});

//app.get('/users',async (req,res) => {
    
//    u =  await getUser();
//    u.then( e => console.log(e));
//    res.send(u);
//});

app.listen(port, ()=> {
    console.log('App is listening at http://localhost:'+ port);
});

async function getUser(){
    u = await User.findAll();
    return u;
};