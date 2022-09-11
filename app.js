require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { result } = require('lodash');
const { render } = require('ejs');
const blogRoutes = require('./routes/blogRoutes');

//express app
const app = express();
//connect to mongodb
const dbURI = `mongodb+srv://padmanabhmishra407:2832000.de@cluster0.yjextay.mongodb.net/cluster0?retryWrites=true&w=majority`;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => {console.log('connected to db');
    app.listen(3000)}) //conecting to db and then listening to app at port 3000
.catch((err) => console.error(err,'O-->==<--O'))
//register view engine
app.set('view engine', 'ejs');

//listen for requests
//middleware & static files Eg. CSS,Images,etc.
app.use(express.static('public'));
app.use(express.urlencoded({ extended:true }));
app.use(morgan('dev'));

//routes
app.get('/',(req, res) => {
    res.redirect('/blogs');
});

app.get('/about',(req, res) => {
    res.render('about', {title: 'About' });
});

app.get('/login', (req,res) => {
    res.render('login', {title:'Login'});
});

//blog routes
app.use('/blogs',blogRoutes);
//404 page
app.use((req,res) => {
    res.status(404).render('404', {title: '404'});
});