const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");
const taskRoute = require("./routes/tasks");

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

// example project routes
app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/movies", movieRoute);
app.use("/lists", listRoute);

// to do app routes
app.use("/tasks", taskRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});
