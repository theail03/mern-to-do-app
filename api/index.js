const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require('cors');
const authRoute = require("./routes/authRoutes");
const userRoute = require("./routes/usersRoutes");
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

// CORS
const corsOptions = {
  origin: [process.env.CLIENT_URL],
  credentials: true
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/tasks", taskRoute);
app.use("/taskLists", taskListRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});
