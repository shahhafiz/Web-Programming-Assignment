var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
	fullname		: String,
	nric			: Number,
	address			: String,
	email			: String,
	username		: String,
	password		: String,
	job				: String,
	sector			: String,
	salary			: Number,
	currentSaving	: Number,
	monthlySaving	: Number,
	savingGoal		: Number,
	transactions	: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Transaction"
		}
	]
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);