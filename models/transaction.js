var mongoose = require("mongoose");

var transactionSchema = new mongoose.Schema({
	date	: String,
	amount	: Number,
	type	: String
});

module.exports = mongoose.model("Transaction", transactionSchema);