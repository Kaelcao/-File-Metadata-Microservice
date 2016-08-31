var express = require("express");
var app = express();
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' })
var fs = require("fs");

app.set('views', __dirname+"/views");
app.set('view engine','jade');


app.set('port', process.env.PORT || 5000);

app.get('/',(req,res) => {
    res.render('index');
});
app.post('/getfilesize', upload.single('file'), function (req, res, next) {
    var size = req.file.size;
    fs.unlink(req.file.path,function(err){
        if (err) throw(err);
        console.log('file deteled');
    });
    res.json({
        size
    });
})

app.listen(app.get('port'),() => {
    console.log('App is listening at port ' + app.get('port'));
})