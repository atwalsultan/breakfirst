const express = require("express");
const router = express.Router();

// For environment variables
require("dotenv").config();

// Create and configure transporter
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.EMAIL,
		pass: process.env.PASS,
	},
});

// Send out mails
router.post("/", (req, res) => {
	// To team member (Abhishek)
	const mailOptionsSelf = {
		to: process.env.EMAIL,
		subject: `BreakFirst | Message from ${req.body.firstName}${req.body.lastName && " " + req.body.lastName}`,
		text: `Hi Sultan,\n${req.body.firstName}${req.body.lastName && " " + req.body.lastName} just submitted the contact form on BreakFirst. Here's what they wrote:\n\n\t"${req.body.message}"\n\nYou can reach out to them using the email they provided: ${req.body.email}`,
	};

	// Send mail
	transporter.sendMail(mailOptionsSelf, (error, info) => {
		if (error) {
			console.log(error);
		} else {
			console.log("Email sent to Sultan: " + info.response);

			// To submitter
			const mailOptionsUser = {
				to: req.body.email,
				subject: `BreakFirst | Message Received`,
				text: `Hi ${req.body.firstName}${req.body.lastName && " " + req.body.lastName},\n\nGreetings from BreakFirst.\n\nWe wish to inform you that we have received your message and one of our team members will reach out to you as soon as possible. Thank you for writing to us. \n\nRegards,\nTeam BreakFirst\n\nPS: This thread is not monitored. Please do not reply to this email. If you have more questions/suggestions, you may submit the contact form again.`,
			};

			// Send mail
			transporter.sendMail(mailOptionsUser, (error, info) => {
				if (error) {
					console.log(error);
				} else {
					console.log(`Email sent to ${req.body.email}: ` + info.response);
				}
			});
		}
	});

	res.send("success!");
});

module.exports = router;
