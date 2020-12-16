console.clear();
const express = require("express");
const connectDB = require("./config/dbConnect");
require("dotenv").config();
const app = express();

// connect to DB
connectDB();

//Routes
app.use(express.json());
app.use("/user", require("./routes/user"));
app.use("/pub", require("./routes/pub")); 

// server
const PORT = process.env.PORT;
app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Server is running on : ${PORT} `);
});
