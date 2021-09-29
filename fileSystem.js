const fs = require("fs"); // importing inbuild filesystem modules here; no need to install ..
const { join } = require("path");

// two parms   one is curretn path , callback)=>
fs.readdir(".", (err, files) => {
  if (err) {
    console.log("Err in dir file");
  } else {
    console.log(files);
  }
});
