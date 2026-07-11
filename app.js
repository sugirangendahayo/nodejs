const express = require("express");
const PORT = 3000;
const app = express();
app.listen(3000, () => {
  console.log(`Server running on port ${PORT}`);
});
app.set("view engine", "ejs");
app.get("/", (req, res)=>{
  res.render("index")
})
app.get("/about", (req, res)=>{
  res.render("about");
})
app.get("/blogs/create", (req, res)=>{
  res.render("create");
})
app.use((req, res)=>{
  res.status(404).render("404");
})
