const express = require('express');

const app = express();




app.get('/', function(req, res){
 res.send('Hello world!!!!    ken');
});
app.get('/greet/:name',function(req, res){
res.send({greeting: `Hello ${req.params.name}`})
});
app.listen(3000,function(){
    console.log('Server started on port 3000...');
});