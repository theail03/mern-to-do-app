const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const taskRoute = require("./routes/tasks");
const taskListRoute = require("./routes/taskLists");


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

app.use(express.json());

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/tasks", taskRoute);
app.use("/taskLists", taskListRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});
