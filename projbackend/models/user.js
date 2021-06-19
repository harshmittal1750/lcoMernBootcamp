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
  encryptedpassword: {
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
userSchema.method = {
  securePassword: function (plainpassword) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(plainpassword)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
};

module.exports = mongoose.model("User", userSchema);
