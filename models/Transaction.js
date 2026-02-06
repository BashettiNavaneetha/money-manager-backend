const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  type: { type: String, enum: ["income", "expense"], required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  division: { type: String, enum: ["Office", "Personal"], required: true },
  description: String,
  date: { type: Date, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Transaction", transactionSchema);
