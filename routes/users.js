const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/todos");

let todosSchema = mongoose.Schema({
  input:String,
})

module.exports = mongoose.model("input",todosSchema);