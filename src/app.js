
var fs = require('fs');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');

app.get('/', function (req, res) {

fs.readFile('./users.json', function(err,data){
  if (err){
    throw err;
  }
  var users = JSON.parse(data);
  console.log(users);

	res.render('index',{user: users});
});
})

app.get('/search', function (req, res) {


	res.render('search');
});

app.post('/match', function (req, res) {
fs.readFile('./users.json', function(err,data)	{
  
  if (err){
    throw err;
  }
  var users = JSON.parse(data);
for (i = 0; i < users.length; i++){
	if (req.body.firstname === users[i].firstname){
	res.render('match',{user: users[i]})

	}
}
})
})

var server = app.listen(3000);