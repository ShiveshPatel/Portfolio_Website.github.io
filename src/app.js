const express=require('express');
const app=express();

const router=require('./router.js/user')
require('./db/conn');
const User=require('./models/usermessage');
const path=require('path');  
const hbs=require('hbs');
const {registerPartials}  = require('hbs');

const port=process.env.PORT || 5000;
//setting path
const static_path=path.join(__dirname,'../public');
const templates_path=path.join(__dirname,'../templates/views');
const partials_path=path.join(__dirname,'../templates/partials');

//middleware
app.use(router);
app.use('/css',express.static(path.join(__dirname,'../node_modules/bootstrap/dist/css')));
app.use('/js',express.static(path.join(__dirname,'../node_modules/bootstrap/dist/js')));
app.use('/jq',express.static(path.join(__dirname,'../node_modules/jquery/dist/css'))); 
app.use(express.urlencoded({extended:false}));//shows json value in browser
app.use(express.static(static_path));
app.set('view engine','hbs');
app.set('views',templates_path);
hbs.registerPartials(partials_path);

app.listen(port,()=>{
    console.log(`Server starting at ${port}...`);
})