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
const bodyParser  =  require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(functoin(res,req,next){
    console.log("i am in the middle");
    console.log(req.body);
    next();

})

app.get('/',function(req,res){
    res.send('helooo there')
})
app.post('/',function(req,res){
   console.log(req.body);
    res.send('<h1>post send</h1>')
})
app.put('/',function(req,res){



    res.send('this is put')
})
app.delete('/',function(req,res){

    res.send('delete')
})

app.listen(3000)


















