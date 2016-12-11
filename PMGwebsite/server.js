var express = require('express')
  , logger = require('morgan')
  , app = express();
  //, template = require('jade').compileFile(__dirname + '/source/templates/homepagecontent.jade')
//  try {
//    var html = template({ title: 'Home' })
//    res.send(html)
//  } catch (e) {
//    next(e)
//  }
//})

var fs = require('fs');
var path = require('path');
var expressSession = require('express-session');
var expressHbs = require('express3-handlebars');
var MongoStore = require('connect-mongo')(expressSession);
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var dbConnection;

app.use(logger('dev'))
//app.use(express.static(__dirname + '/static'))

app.use(express.static(path.join(__dirname, 'public')));

//mongoStuff
MongoClient.connect('mongodb://cs336:bjarne@ds151137.mlab.com:51137/cs336', function (err, db) {
	if (err) throw err;
  dbConnection = db;
})


app.set('port', (process.env.PORT || 3000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/users', function(req, res) {
  var collection = dbConnection.collection('users');
  collection.find({}).toArray(function(err, docs) {
      if (err) throw err;
      res.json(docs);
  });
});

// This is a middleware that we will use on routes where
// we _require_ that a user is logged in, such as the /secret url
function requireUser(req, res, next){
  if (!req.user) {
    res.redirect('/not_allowed');
  } else {
    next();
  }
}

// This middleware checks if the user is logged in and sets
// req.user and res.locals.user appropriately if so.
function checkIfLoggedIn(req, res, next){
  if (req.session.username) {
    var coll = dbConnection.collection('users');
    coll.findOne({username: req.session.username}, function(err, user){
      if (user) {
        // set a 'user' property on req
        // so that the 'requireUser' middleware can check if the user is
        // logged in
        req.user = user;
        
        // Set a res.locals variable called 'user' so that it is available
        // to every handlebars template.
        res.locals.user = user;
      }
      next();
    });
  } else {
    next();
  }
}      

// Use this so we can get access to `req.body` in our posted login
// and signup forms.
app.use( require('body-parser')() );

// We need to use cookies for sessions, so use the cookie parser middleware
app.use( require('cookie-parser')() );

app.use( expressSession({
  secret: 'somesecretrandomstring',
  store: new MongoStore({
    url: 'mongodb://cs336:bjarne@ds151137.mlab.com:51137/cs336'
  })
}));

// We must use this middleware _after_ the expressSession middleware,
// because checkIfLoggedIn checks the `req.session.username` value,
// which will not be available until after the session middleware runs.
app.use(checkIfLoggedIn);

app.engine('hbs', expressHbs({textname:'hbs', defaultLayout:'main.hbs'}));
app.set('view engine', 'hbs');

//app.get('/', function(req, res){
//  var coll = dbConnection.collection('users');
//    coll.find({}).toArray(function(err, users){
//    res.render('index', {users:users});  
//  })
//});

//app.get('/', function(req, res){
//    res.render('/index.html');  
//});

app.get('/login', function(req, res){
  res.render('login');
});

app.get('/logout', function(req, res){
  delete req.session.username;
  res.redirect('/');
});

app.get('/not_allowed', function(req, res){
  res.render('not_allowed');
});

// The /secret url includes the requireUser middleware.
app.get('/secret', requireUser, function(req, res){
  res.render('secret');
});

app.get('/signup', function(req,res){
  res.render('signup');
});

// This creates a new user and calls the callback with
// two arguments: err, if there was an error, and the created user
// if a new user was created.
//
// Possible errors: the passwords are not the same, and a user
// with that username already exists.
function createUser(username, password, password_confirmation, callback){
    var coll = dbConnection.collection('users');
     if (password !== password_confirmation) {
        var err = 'The passwords do not match';
        callback(err);
     }else {
        var query      = {username:username};
        var userObject = {username: username, password: password};
         
         // make sure this username does not exist already
    coll.findOne(query, function(err, user){
      if (user) {
        err = 'The username you entered already exists';
        callback(err);
      } else {
        // create the new user
        coll.insert(userObject, function(err,user){
          callback(err,user);
        });
      }
    });
  }
}

app.post('/signup', function(req, res){
  // The 3 variables below all come from the form
  // in views/signup.hbs
  var username = req.body.username;
  var password = req.body.password;
  var password_confirmation = req.body.password_confirmation;
  
  createUser(username, password, password_confirmation, function(err, user){
      // This way subsequent requests will know the user is logged in.
      req.session.username = user.username;
      
      res.redirect('/');  
});
});

// This finds a user matching the username and password that
// were given.
function authenticateUser(username, password, callback){
  var coll = dbConnection.collection('users');
  
  coll.findOne({username: username, password:password}, function(err, user){
    callback(err, user);
  });
}

app.post('/login', function(req, res){
  // These two variables come from the form on
  // the views/login.hbs page
  var username = req.body.username;
  var password = req.body.password;
  
  authenticateUser(username, password, function(err, user){
    if (user) {
      // This way subsequent requests will know the user is logged in.
      req.session.username = user.username;

      res.redirect('/');
    } else {
      res.render('login', {badCredentials: true});
//        res.redirect('/about.html')
    }
  });
});

app.listen(process.env.PORT || 3000, function () {
console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})