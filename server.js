var express = require("express");
var app = express();

app.set('views', __dirname+"/views");
app.set('view engine','jade');


app.set('port', process.env.PORT || 5000);

app.get('/',(req,res) => {
    res.render('index',{url:req.protocol + '://' + req.get('host')});
});

app.listen(app.get('port'),() => {
    console.log('App is listening at port ' + app.get('port'));
})