require('dotenv').config()

var express = require('express');
var cors = require('cors');
const multer = require("multer")
const upload = multer()

var app = express();

app.use(cors());
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), async(req, res) => {
 return res.json({name: req.file.originalname, type: req.file.mimetype, size: req.file.size})
})


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
