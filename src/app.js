import express from 'express'
import session from 'express-session'
import error from './middleware/error.js';
import router from './router.js'
// import cors from 'cors'

const sessionConfig = {
  secret: "hello-kitty",
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 30,
  }
};

const app = express()
app.set('views', 'src/views')
app.set('view engine', 'ejs')
app.use(session(sessionConfig));
app.use(express.urlencoded())
app.use(express.json())
app.use(router)
// app.use(express.static('/public'));
// app.use(cors)

app.use(error.notFount);
app.use(error.serverError);

export default app