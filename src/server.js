//import package - lib
const express = require ('express');
const path = require('path');
const pages = require('./pages.js')

//init express\
const server = express()
server
    //use 
    .use(express.urlencoded({ extended: true }))
    //using static docs
    .use(express.static('public'))
    
    //setting template engine
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')

    //applications ports
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

//server on
server.listen(5500)