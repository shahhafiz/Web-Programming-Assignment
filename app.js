var express  		= require("express"),
	mongoose		= require("mongoose"),
	passport 		= require("passport"),
	LocalStrategy	= require("passport-local"),
	passportLocalMongoose = require("passport-local-mongoose"),
	bodyParser		= require("body-parser"),
	User			= require("./models/user"),
	Transaction 	= require("./models/transaction"),
	methodOverride  = require("method-override"),
	seedDB			= require("./seeds");


//mongoose.connect("mongodb://localhost/group7");
 mongoose.connect(<APIKEY>");
// seedDB();
var app = express();
app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
//PASSPORT CONFIGURATION
app.use(require("express-session")({
	secret: "JS is the best server-side computing",
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//****************************ROUTE***************************

app.get("/", function(req, res){
	res.render("home");
});

app.get("/about", function(req, res){
	res.render("about")
});

// ******************register*************************
app.get("/register", function(req, res){
	res.render("register");
});

app.post("/register", function(req, res){
	User.register(new User({
		fullname		: req.body.fullname,
		nric			: req.body.nric,
		address			: req.body.address,
		email			: req.body.email,
		username		: req.body.username,
		password		: req.body.password,
		job				: req.body.job,
		sector			: req.body.sector,
		salary			: req.body.salary,
		currentSaving	: 0,
		monthlySaving	: 0,
		savingGoal		: 0,
		transaction 	: [{}]
	}),
	req.body.password, function(err, user){
		if(err){
			console.log(err);
			return res.render('home');
		}
		passport.authenticate("local")(req, res, function(){
			res.redirect("/userhome/"+req.user._id);
		});
	});
});

//*********************login*************************

app.get("/login", function(req, res){
	res.render("login");
});

app.post("/login", passport.authenticate("local", {
	// successRedirect: "/userhome",
	failureRedirect: "/login"
}), function(req, res){
	res.redirect("/userhome/"+req.user._id);
});

// **********************user pages********************
app.get("/userhome/:id", isLoggedIn, function(req, res){
	User.findById(req.params.id).populate("transactions").exec(function(err, user){
		if(err){
			console.log(err);
		} else {
			res.render("userhome", {transactions: user.transactions, user: user, id: req.params.id});
		}
	});
});

app.post("/userhome/:id/expenses", function(req, res){
	var id = req.params.id;
	User.findById(id, function(err, user){
		if(err){
			console.log(err);
			res.redirect("/userhome/:id");
		} else {
			Transaction.create(req.body.transaction, function(err, transaction){
				if(err){
					console.log(err);
				} else {
					user.transactions.push(transaction);
					user.save();
					res.redirect("/userhome/"+req.params.id+"/expenses");
				}
			});
		}
	});
});

//**********************goals***************************
app.get("/userhome/:id/goals",isLoggedIn, function(req, res){
	var id = req.params.id;
	User.find({}, function(err, allTransactions){
		if(err){
			console.log(err);
		} else {
			User.findById(id).populate("transactions").exec(function(err, user){
				if(err){
					console.log(err);
				} else {
					var shopping = 0;
					var entertainment = 0;
					var grocery = 0;
					var food = 0;
					var transport = 0;
					user.transactions.forEach(function(transaction){
						if(transaction.type == "Shopping"){
							shopping += transaction.amount;
						} else if (transaction.type == "Entertainment"){
							entertainment += transaction.amount;
						} else if (transaction.type == "Groceries"){
							grocery += transaction.amount;
						} else if (transaction.type == "Food"){
							food += transaction.amount;
						} else if (transaction.type == "Transport"){
							transport += transaction.amount;
						}
					});
					res.render("goals", {transactions: allTransactions, user: user, id: id, shopping: shopping, entertainment: entertainment,
					 grocery: grocery, food: food, transport: transport});
				}
			})
		}
	});
});

app.post("/userhome/:id/goals/edit", function(req, res){
	var savingPlan = req.body.savingGoal / req.body.duration;
	savingPlan = Math.round(savingPlan * 100)/100;
	console.log(savingPlan);
	User.findByIdAndUpdate(req.params.id,{monthlySaving: savingPlan, savingGoal: req.body.savingGoal}, function(err, user){
		if(err){
			console.log(err);
		} else {
			res.redirect("/userhome/"+user._id+"/goals");
		}
	});
});

app.post("/userhome/:id/goals/update", function(req, res){
	var temp = 0;
	User.findById(req.params.id, function(err, user){
		if(err){
			console.log(err);
		} else {
			temp = user.currentSaving + user.monthlySaving;
			temp =Math.round(temp *100)/100
			User.findByIdAndUpdate(user._id, {currentSaving: temp}, function(err, user){
				if(err){
					console.log(err);
				} else {
					console.log("updated!");
					res.redirect("/userhome/"+user._id+"/goals");
				}
			});
		}
	});
});

//*******************expenses************************
app.get("/userhome/:id/expenses",isLoggedIn, function(req, res){
	var id = req.params.id;
	User.findById(id).populate("transactions").exec(function(err, user){
		res.render("expenses",{user: user, id: user._id});
	});
});

app.get("/userhome/:id/expenses/new",isLoggedIn, function(req, res){
	User.findById(req.params.id, function(err, user){
		if(err){
			console.log(err);
		} else {
			res.render("new",{id: req.params.id});
		}
	})
});

app.get("/logout", function(req, res){
	req.logout();
	res.redirect("/");
});

app.get("*", function(req, res){
	res.render("error");
});

// **********************middleware*********************

function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login");
}

// app.listen(3000, function(){
// 	console.log("Server started!")
// });

app.listen(process.env.PORT, process.env.IP, function(){
	console.log("Server started!")
});
