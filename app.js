const express = require("express");
const app = express();

const authorRouter = require("./routes/authorRouter.js");

const indexRouter = require("./routes/indexRouter.js");

app.use("/authors", authorRouter);

app.use("/", indexRouter);
// app.get("/", (req, res) => res.send("Hello, world!"));


// Every thrown error in the application or the previous middleware function calling `next` with an error as an argument will eventually go to this middleware function
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
