/**** Import npm libs ****/
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
const session = require("express-session")(
  {
    secret: "eb8fcc253281389225b4f7872f2336918ddc7f689e1fc41b64d5c4f378cdc438",
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 2 * 60 * 60 * 1000,
      secure: false
  }
});

const sharedsession = require("express-socket.io-session");
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');

app.set('views', __dirname + '/front');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(session);

io.use(sharedsession(session, {
  autoSave: true
}));

if (app.get('env') === 'production') {
  app.set('trust proxy', 1)
  session.cookie.secure = true
}

app.use(express.static('front/html'));
app.use(express.static('front/css'));
app.use(express.static('front/pics'));
app.use(express.static('front/js'));

app.get('/', (req, res) => { //REDIRECTION PAR DEFAUT

  res.sendFile(__dirname + '/front/html/peli.html');
});

http.listen(4200, () => {
  console.log('Serveur lancé sur le port 4200');
});