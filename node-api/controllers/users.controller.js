var User = require("../models/users.model");
var MD5 = require("md5");
const GlobalService = require("../core/global.service.js");
require("dotenv").config();

exports.doSignup = (req, res) => {
	postData = req.body;
	var newUser = new User(postData);
	newUser.updatedAt = new Date();
	newUser.createdAt = new Date();
	if (postData.matching_passwords.password) {
		newUser.password = MD5(postData.matching_passwords.password);
	}
	newUser.save((err, data) => {
		if (err) {
			return res.json({
				status: 500,
				message: "Failed to create account.",
				data: err
			});
		} else {
			return res.json({
				status: 200,
				message: "Account created succesfully.",
				data: data
			});
		}
	});
};

exports.doSignin = (req, res) => { // DO SIGNIN

	// HERE IS GETTING RUNING HOST NAME FOR DYNAMIC
	process.env.HOST_NAME = 'http://' + req.headers.host + '/';
	process.env.WEBSITE_URL = 'http://' + req.headers.host + '/#/';

	var postData = req.body;
	var where = {
		email: postData.email,
		password: MD5(postData.password)
	};
	User.findOne(where, (err, userResp) => {
		if (userResp) {

			// HERE IS GENERATING TOKEN FOR UI USES
			const rString = exports.randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
			req.session.current_user = userResp;
			res.json({
				status: 200,
				message: "Logged in successfully.",
				data: userResp,
				token: rString
			});
		} else {
			res.json({
				status: 500,
				message: "Invalid username or password.",
				data: err,
			});
		}
	});
};

exports.emailAndNumberAlreadyExits = (req, res) => {
	var postData = req.body;
	const key = postData.email ? 'email' : 'phoneNumber';
	if (!postData.email && !postData.phoneNumber) {
		return res.json({
			status: 404,
			message: `Data Not Exist.`,
		});;
	}
	const whereObj = postData.email ? {
		email: postData.email
	} : {
		phoneNumber: postData.phoneNumber
	};
	User.find(whereObj, (err, data) => {
		if (err) {
			return res.json({
				status: 500,
				message: `Some error occurred while getting the ${key} already exits ${key}.`,
				checkType: key,
				data: err
			});
		} else {
			return res.json({
				status: 200,
				message: `This ${key} is getting successfully.`,
				checkType: key,
				data: data
			});
		}
	});
}

exports.forgotPassword = (req, res) => {
	var postData = req.body;
	postData.email = postData.email.toLowerCase();
	const email = postData.email;
	if (email) {
		var whereObj = {
			email: postData.email,
		};
		User.findOne(whereObj, (err, user) => {
			if (user) {
				const rString = exports.randomString(
					32,
					"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
				);
				User.updateOne({
						_id: user._id,
					}, {
						forgotLink: rString,
						forgotStatus: 1,
					},
					(err, forgotResp) => {
						if (forgotResp) {
							const linkParam =
								process.env.WEBSITE_URL +
								"recoverpassword/" +
								user._id +
								"/" +
								rString;
							var prepareEmailConfig = {
								email: user.email,
								firstName: GlobalService.capitalize(user.firstName),
								markerData: {
									name: GlobalService.capitalize(user.firstName),
									websiteUrl: process.env.WEBSITE_URL,
									recoverPasswordLink: linkParam,
								},
								templatePath: "public/assets/emailtemplates/forgot-password.html",
								subject: "Reset your password for AM.ONLINE your account",
								html: "",
								templateName: "forgot-password", // NEW
							};

							GlobalService.prepareEmailData(
								prepareEmailConfig,
								(err, resp) => {
									return res.json({
										status: 200,
										message: "Please check your email, Reset password link has been sent to " +
											user.email,
										data: resp,
									});
								}
							);
						} else {
							return res.json({
								status: 500,
								message: "No account found with this email address : " + email,
							});
						}
					}
				);
			} else {
				return res.json({
					status: 500,
					message: "No account found with this email address : " + email,
				});
			}
		});
	} else {
		return res.json({
			status: 500,
			message: "No account found with this email address : " + email,
		});
	}
}

exports.randomString = (length, chars) => {
	let result = '';
	for (let i = length; i > 0; --i) {
		result += chars[Math.floor(Math.random() * chars.length)];
	}
	return result;
}

exports.authentication = (req, res) => {
	if (req.session.current_user) {
		return res.json({
			status: 200,
			message: 'Api authenticated Successfully.',
			current_user: req.session.current_user
		});
	} else {
		return res.json({
			status: 500,
			message: 'Authentication failed.',
			current_user: null
		});
	}
};

exports.logout = (req, res) => {
	req.session.destroy();
	return res.json({
		status: 200,
		message: 'Logouted successfully.',
	});
};

exports.getUsersList = (req, res) => {
	var data = req.body;
	User.find({
		role: 'user'
	}).exec((err, data) => {
		if (data == null) {
			return res.json({
				status: 400,
				message: "There are some error while getting users data.",
				data: err
			})
		} else {
			return res.json({
				status: 200,
				message: 'Get Users data successfully.',
				data: data
			})
		}
	})
}
exports.getUserInfo = (req, res) => {
	var data = req.body;
	if (data.forgotLink && data._id) {
		var whereObj = {
			forgotLink: data.forgotLink,
			forgotStatus: 1,
			_id: data._id,
		};
		User.findOne(whereObj)
			.select("-password")
			.exec((err, data) => {
				if (data) {
					return res.json({
						status: 200,
						message: "Get the user info successfully.",
						data: data,
					});
				} else {
					return res.json({
						status: 500,
						message: "Some error occurred while getting users.",
						data: err,
					});
				}
			});
	} else {
		return res.json({
			status: 500,
			message: "Some error occurred while getting the users.",
			data: err,
		});
	}
}
exports.saveUserInfo = (req, res) => {
	var data = req.body;
	if (data.password) {
		data.password = MD5(data.password);
	}
	User.updateOne({
			_id: data._id,
		},
		data,
		(err, resp) => {
			if (err) {
				return res.json({
					status: 500,
					message: "There are in some error while update .",
					data: err,
				});
			} else {
				delete data.password;
				return res.json({
					status: 200,
					message: "Password updated succesfully.",
					data: data,
				});
			}
		}
	);
}