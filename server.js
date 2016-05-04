/**
 * Created by irek on 02/05/2016.
 */
var express    = require('express');
var app        = express();
var path       = require('path');
var config     = require('./server/config/config');
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');
var api        = express.Router();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));


app.use(express.static(path.resolve(__dirname, 'app')));

mongoose.connect(config.database, function(err){
  if(err) {
    console.log(err);
  }
  console.log("Connected to database.");
});

require('./server/routes/customerApi')(api);
app.use('/customerApi', api);

require('./server/routes/productApi')(api);
app.use('/productApi', api);

app.listen(config.port,config.ip, function(err){
  if(err){
    console.log(err);
  }
  console.log('Listening server running on... port: ' + config.port + " - IP: " + config.ip);
});
