const express = require("express");
const cors = require("cors");
const mongoosecon = require("./services/initMongoDb");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const { notFound, internalServerError } = require("./middleware/errors");
const { addComments, allComments } = require("./middleware/feature");
app.get("/", async (req, res, next) => {
  res.send("Cloud Exam APi");
});
app.post("/addcomments", addComments);
app.get("/allComments", allComments);

//errorHandle
app.use(notFound);
app.use(internalServerError);

mongoosecon()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT} `);
    });
  })
  .catch(() => {
    console.log("db cannot be connected");
  });
