const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PubSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  titre: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  prix: {
    type: String,
  },
  photo: {
    type: File,
  },
  date: {
    type: Date,
    default: Date.getMonth(),
  },
});

module.exports = mongoose.model("Pub", PubSchema);
