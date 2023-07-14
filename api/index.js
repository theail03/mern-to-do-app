const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
const authRoute = require("./routes/authRoutes");
const taskRoute = require("./routes/tasksRoutes");
const taskListRoute = require("./routes/taskListsRoutes");

// Load config
dotenv.config();

// Passport config (needs to be after dotenv.config())
require('./config/passportConfig')(passport);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

// CORS
const corsOptions = {
  origin: [process.env.CLIENT_URL],
  credentials: true
};

app.use(cors(corsOptions));

// Sessions
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60, // 1 hour
      sameSite: 'none',
      secure: true
    }
  })
)

// Body parser
app.use(express.json());

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/auth", authRoute);
app.use("/tasks", taskRoute);
app.use("/taskLists", taskListRoute);

const PORT = process.env.PORT || 8800;

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
