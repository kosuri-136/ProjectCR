const mongoose = require("mongoose");

function connectDb() {
  mongoose.connect("mongodb+srv://kosuriravikanth:Mongo553136@cluster0.cvvip5o.mongodb.net/carrr", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  const connection = mongoose.connection;
  connection.on("connected", () => {
    console.log("connection successfull");
  });
  connection.on("error", () => {
    console.log("connection failed");
  });
}

connectDb();
module.exports = mongoose;
