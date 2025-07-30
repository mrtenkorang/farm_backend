const express = require("express");
const app = express();
const routes = require("./routes/routes");

const { connectToDB } = require("./db_connect");

// connect to the database at the start of the app
connectToDB()

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// Routes
app.use("/api", routes)

