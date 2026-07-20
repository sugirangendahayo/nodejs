const express = require("express");
const PORT = 3000;
const app = express();
app.use(express.static("public"));

app.set("view engine", "ejs");
const blogs = [
  {
    id: 1,
    title: "First Blog",
    content: "This is the content of the first blog.",
  },
  {
    id: 2,
    title: "Second Blog",
    content: "This is the content of the second blog.",
  },
];
app.get("/", (req, res) => {
  res.render("index", { blogs });
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/blogs/create", (req, res) => {
  res.render("create");
});
app.use((req, res) => {
  res.status(404).render("404");
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
