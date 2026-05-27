const fs = require("fs");

// Reading files
// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) console.log(err);
//   if (data) {
//     console.log(data.toString());
//   }
// });

//Writting files
// fs.writeFile("./docs/blog1.txt", "Hello, call me SUGIRA", () => {
//   console.log("Text was written!");
// });
fs.writeFile("./docs/blog5.txt", "Hello, call me NGENDAHAYO", () => {
  console.log("Text was written!");
});

// Directories
// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err, dir) => {
//     if (err) console.log(err);
//     console.log(`Directory was created!`);
//   });
// } else {
//   console.log("Directory already exists!, taking time to remove it...");
//   setTimeout(() => {
//     fs.rmdir("./assets", (err) => {
//       if (err) console.log(err);

//       console.log("Directory removed!");
//     });
//   }, 3000);
// }

//Delete files
// if (fs.existsSync("./docs/deleteme.txt")) {
//   fs.unlink("./docs/deleteme.txt", (err) => {
//     if (err) console.log(err);
//     console.log("File deleted succesfully!")
//   });
  
// }
