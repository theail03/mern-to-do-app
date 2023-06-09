const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const session = require('express-session');
const authRoute = require("./routes/authRoutes");
const taskRoute = require("./routes/tasksRoutes");
const taskListRoute = require("./routes/taskListsRoutes");


dotenv.config();

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

// Sessions
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: true,
    saveUninitialized: true
  })
)

// Body parser
app.use(express.json());

// Routes
app.use("/auth", authRoute);
app.use("/tasks", taskRoute);
app.use("/taskLists", taskListRoute);

const PORT = process.env.PORT || 8800

app.listen(PORT, () => {
  console.log("Backend server is running!");
});
