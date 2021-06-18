const moongoose = require("moongoose");

var userSchema = new moongoose.Schema({
  firstName: {
    type: "string",
    required: true,
    maxLength: 32,
    trim: true,
  },
  lastName: {
    type: "string",
    required: false,
    maxLength: 32,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  userinfo: {
    type: String,
    trim: true,
  },
  // TODO: come back here and
  password: {
    type: String,
    role: {
      type: Number,
      default: 0,
    },
    purchases: {
      type: Array,
      default: [],
    },
  },
});

module.exports = mongoose.model("User", userSchema);
