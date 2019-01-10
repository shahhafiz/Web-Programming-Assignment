var mongoose = require("mongoose");
var User = require("./models/user");
var Transaction = require("./models/transaction");


var transactionData = [
	{
       	date: "2018-01-08",
       	amount: 88,
       	type: "Shopping"
    },
    {
    	date: "2018-01-09",
    	amount: 99,
    	type: "Transport"
    },
    // {
    // 	date: "2018-01-10",
    // 	amount: 78,
    // 	type: "Food"
    // },
    // {
    // 	date: "2018-01-11",
    // 	amount: 78,
    // 	type: "Shopping"
    // },
    // {
    // 	date: "2018-01-12",
    // 	amount: 76,
    // 	type: "Groceries"
    // },
    // {
    // 	date: "2018-01-13",
    // 	amount: 13,
    // 	type: "Transport"
    // },
    // {
    // 	date: "2018-01-14",
    // 	amount: 55,
    // 	type: "Food"
    // },
    // {
    // 	date: "2018-01-15",
    // 	amount: 99,
    // 	type: "Shopping"
    // },
    // {
    // 	date: "2018-01-16",
    // 	amount: 100,
    // 	type: "Entertainment"
    // },
    // {
    // 	date: "2018-01-17",
    // 	amount: 39,
    // 	type: "Groceries"
    // },
    // {
    // 	date: "2018-01-18",
    // 	amount: 44,
    // 	type: "Entertainment"
    // },
    // {
    // 	date: "2018-01-19",
    // 	amount: 91,
    // 	type: "Transport"
    // },
    // {
    // 	date: "2018-01-20",
    // 	amount: 81,
    // 	type: "Food"
    // },
    // {
    // 	date: "2018-01-21",
    // 	amount: 11,
    // 	type: "Shopping"
    // },
    // {
    // 	date: "2018-01-22",
    // 	amount: 50,
    // 	type: "Entertainment"
    // },
    // {
    // 	date: "2018-01-23",
    // 	amount: 81,
    // 	type: "Groceries"
    // },
    // {
    // 	date: "2018-01-24",
    // 	amount: 33,
    // 	type: "Transport"
    // },
    // {
    // 	date: "2018-01-25",
    // 	amount: 77,
    // 	type: "Food"
    // },
    // {
    // 	date: "2018-01-26",
    // 	amount: 68,
    // 	type: "Entertainment"
    // },
    // {
    // 	date: "2018-01-27",
    // 	amount: 11,
    // 	type: "Transport"
    // },
    // {
    // 	date: "2018-01-28",
    // 	amount: 120,
    // 	type: "Groceries"
    // },
    // {
    // 	date: "2018-01-29",
    // 	amount: 30,
    // 	type: "Food"
    // },
    // {
    // 	date: "2018-01-30",
    // 	amount: 88,
    // 	type: "Food"
    // }
];

var userData = [
	{
		fullname		: "Shah",
		nric			: 123,
		address			: "Perlis",
		email			: "iamshahhafiz@gmail.com",
		username		: "shahhafiz",
		password		: "shah",
		job				: "Students",
		sector			: "Academic",
		salary			: 2000,
		company			: "University Malaya",
		father			: "Shahril",
		mother			: "Mila",
		partner			: "Yah",
		agreement		: "True",
		currentSaving	: 2000,
		monthlySaving	: 100,
		savingGoal		: 10000,
	},
	{
		fullname		: "Abu",
		nric			: 123,
		address			: "N9",
		email			: "fadzlyhusaini@gmail.com",
		username		: "fadzlyhusaini",
		password		: "shah",
		job				: "Students",
		sector			: "Academic",
		salary			: 2000,
		company			: "University Malaya",
		father			: "Isa",
		mother			: "Rahmah",
		partner			: "Mira",
		agreement		: "True",
		currentSaving	: 1500,
		monthlySaving	: 80,
		savingGoal		: 10000,
	},
	{
		fullname		: "Ob",
		nric			: 123,
		address			: "Pahang",
		email			: "amirdeni@gmail.com",
		username		: "amirdeni",
		password		: "shah",
		job				: "Students",
		sector			: "Academic",
		salary			: 2000,
		company			: "University Malaya",
		father			: "Deni",
		mother			: "Ibu",
		partner			: "Janna",
		agreement		: "True",
		currentSaving	: 2200,
		monthlySaving	: 90,
		savingGoal		: 10000,
	}
]

// function seedDB(){
// 	User.remove({}, function(err){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			console.log("removed users!");
// 			userData.forEach(function(seed){
// 				User.create(seed, function(err, user){
// 					if(err){
// 						console.log(err)
// 					} else {
// 						console.log("User added");
// 						Transaction.create({
// 							date: "12344",
// 							amount: 88,
// 							type: "Makanan"
// 						}, function(err, transaction){
// 							if(err){
// 								console.log(err);
// 							} else {
// 								user.transactions.push(transaction);
// 								user.save()
// 								console.log("Transaction added");
// 							}
// 						});
// 					}
// 				});
// 			});
// 		}
// 	});
// };

function seedDB(){
//     User.find({username: "mohdshah"}, function(err, user){
//         user.update({$set: {monthlySaving: 1000}});
//     });
//     // User.save(); 
//     console.log("Update!");
};


module.exports = seedDB;