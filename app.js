const express = require("express");
const app = express();
const port = 8000;
const taskManagerRoute = require("./routes/taskManagerRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/tasks", taskManagerRoute);

app.listen(port, (err) => {
  if (err) {
    return console.log("Something bad happened", err);
  }
  console.log(`Server is listening on ${port}`);
});

module.exports = app;
