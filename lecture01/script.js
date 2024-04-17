// learning about file system in node JS
const { error } = require("console");
const fs = require("fs");

// fs.writeFile("name.text", "heloo world", function (err) {
//   if (err) console.log("something wrong");
//   else console.log("file write succcessfully");
// });
// fs.writeFile("rename.txt", "#web developer", function (err) {
//   if (err) console.log("error");
//   else console.log("its done");
// });

// // rename the file
// fs.rename("rename.txt", "name2.txt", (err) => {
//   if (err) console.log("something wrong");
//   else console.log("rename successfully");
// });

// //append new data in file

// fs.appendFile("name2.txt", "< add new data>", (err) => {
//   if (err) throw err;
//   else console.log(" appends successfully");
// });

// // coppy file
// fs.copyFile("name.text", "name2.txt", (err) => {
//   if (err) throw err;
//   else console.log(" copy  successfully");
// });

// // delete file

// fs.unlink("name2.txt", (err) => {
//   if (err) throw err;
//   else console.log(" delete succesfully  successfully");
// });
fs.unlink("rename.txt", (err) => {
  if (err) throw err;
  else console.log(" delete succesfully  successfully");
});
