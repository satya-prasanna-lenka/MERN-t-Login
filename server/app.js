const express = require("express");

require("dotenv").config();

require("./db/conn");

const app = express();

app.use(express.json());
app.use(require("./router/auth"));
const port = process.env.PORT;

// middlewire

// middlewire();

// app.get("/", (req, res) => {
//   res.send("This is home page");
// });

// app.get("/about", middlewire, (req, res) => {
//   res.send("This is about page");
// });

// app.get("/contact", (req, res) => {
//   res.send("This is contact page");
// });

// app.get("/signup", (req, res) => {
//   res.send("This is signup page");
// });

// app.get("/login", (req, res) => {
//   res.send("This is login page");
// });

app.listen(port, () => {
  console.log("server is running at port");
});
