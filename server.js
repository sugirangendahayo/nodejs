const http = require("http");
const fs = require("fs");
const PORT = 3000;

const server = http.createServer((req, res) => {
  // console.log("Request made!");
  // res.setHeader("Content-Type", "text/plain");
  // res.write("Hey my name is Solomon");
  // res.end();

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }
  res.setHeader("Content-Type", "text/html");
  fs.readFile(path, (err, data) => {
    if (err) console.log(err);
    res.write(data);
    res.end();
  });
});
server.listen(3000, () => {
  console.log(`Serving on port ${PORT}`);
});
