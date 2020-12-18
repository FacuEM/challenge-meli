const express = require("express");
const db = require("./api/db");
const http = require("http");
const path = require("path");
const morgan = require("morgan");
const API = require("./api/routes/index");
const { User } = require("./api/models/index");

//AUTH
const cookieParser = require("cookie-parser");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");

const app = express();

//AUTH
app.use(session({ secret: "challenge" }));
app.use(cookieParser("challenge"));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded());

// Show the request to the DB
app.use(morgan("tiny"));

//AUTH
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      User.findOne({ where: { email } })
        .then((user) => {
          if (!user) {
            return done(null, false);
          }
          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              return done(null, false);
            }
            return done(null, user);
          });
        })
        .catch(done);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findByPk(id).then((user) => done(null, user));
});

// Render static files
app.use(express.static("public"));

app.use("/api", API);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public", "index.html"));
});

db.sync({ force: false }).then(() => {
  http.createServer(app).listen(3000, () => {
    console.log(`Server listening at port 3000`);
  });
});
