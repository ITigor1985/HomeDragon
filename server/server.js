const app = require("./app");
const mongoose = require("mongoose");

const { DB_HOST, PORT = 4000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() =>
    app.listen(PORT, () => {
      console.log("Server running. Use our API on port: 4000");
    })
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
