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
});
