const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema(
  {
    poducts: [ProductCart.Schema],
    transaction_id: {},
    amount: { type: Number },
    address: String,
    updated: Date,
    user: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
