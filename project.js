/*const http = require('http');
const data ={
    firstname:'anisha',
    lastname: 'shaji'
}
const site = http.createServer(function (req,res){
             console.log('hello world');
console.log(req.headers);
console.log(req.url);
     res.setHeader('Content-Type','application/json');   
     res.write(JSON.stringify(data));
           //res.setHeader('content-type','text/html');
           //  res.write('<h1>helloooooo</h1>');
res.end();
});

site.listen(3000);      */


var express = require('express');
var app = express()

app.get('/',function(req,res){
    res.send('helooo there')
})

app.listen(3000)
