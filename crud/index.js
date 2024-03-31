const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
require("dotenv").config();
const productRoute = require("./routes/product.route.js");
const userRoute = require("./routes/user.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use("/api/products", productRoute);
app.use("/api/users", userRoute);




app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});


mongoose
.connect(
    "mongodb+srv://pratyushsingh92:0EycPZSBA4IXwfAH@backenddb.c5omgz6.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });