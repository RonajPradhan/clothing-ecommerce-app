const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); //Making sure url is encoded i.e. no spaces

app.use(cors());

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'client/build')));
	app.get('*', function (req, res) {
		res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	});
}

app.listen(port, (error) => {
	if (error) throw error;
	console.log('Server is running on port ' + port);
});

app.post('/payment', (req, res) => {
	const body = {
		source: req.body.token.id,
		amount: req.body.amount,
		currency: 'usd',
	};

	stripe.charges.create(body, (stripeErr, stripeRes) => {
		if (stripeErr) {
			res.status(500).send({ error: stripeErr });
		} else {
			res.status(200).send({ success: stripeRes });
		}
	});
});

app.post('/sendEmail', (req, res) => {
	const { name, email, message } = req.body;

	if (!name || !email || !message) {
		res.status(403).json({ error: `name, email or message is invalid` });
	}

	let transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			type: 'OAuth2',
			user: process.env.MAIL_USERNAME,
			pass: process.env.MAIL_PASSWORD,
			clientId: process.env.OAUTH_CLIENTID,
			clientSecret: process.env.OAUTH_CLIENT_SECRET,
			refreshToken: process.env.OAUTH_REFRESH_TOKEN,
		},
	});

	let mailOptions = {
		from: email,
		to: process.env.MAIL_USERNAME,
		subject: 'Contacting you from your portfolio',
		text: ` name: ${name} \n email: ${email} \n message: ${message}`,
	};

	transporter.sendMail(mailOptions, (err, data) => {
		if (err) {
			console.log('Error ' + err);
		} else {
			res.json('Email sent Successfully!');
		}
	});
});
