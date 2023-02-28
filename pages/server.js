const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const connectionString = "mongodb+srv://shreyas:shreyas@160@cluster0.18qss0y.mongodb.net/?retryWrites=true&w=majority";

// Connect to the MongoDB database
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB,server running"))
  .catch((error) => console.log(error));

// Configure middleware
app.use(bodyParser.json());
app.use(cors());

// Define routes
const postsRouter = require("./routes/posts");
app.use("/api/posts", postsRouter);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));

module.exports = app;
