const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose');
const url = 'mongodb://localhost/admin';

const User = require('./model/user');

// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useMongoClient:true })
// 	.then(() => {
// 		console.log('Connected to MongoDB...')
// 	}).catch((error) => { console.error(error) });

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/user/login', (req, res) => {
	mongoose.connect(url, { useMongoClient: true }, function (err) {
		if (err) throw err;
		User.find({
			username: req.body.username, password: req.body.password
		}, function (err, user) {
			if (err) throw err;
			if (user.length === 1) {
				return res.status(200).json({
					status: 'success',
					data: user
				})
			} else {
				return res.status(400).json({
					status: 'fail',
					message: 'Login Failed'
				})
			}
		})
	});
})

app.post('/api/user/create', (req, res) => {
	mongoose.connect(url, { useMongoClient: true }, async function (err) {
		if (err) throw err;
		const user = new User({
			name: req.body.name,
			username: req.body.username,
			password: req.body.password
		})
		try {
			await user.save()
			res.status(200).send(user)
		} catch (err) {
			res.status(400).send(err)
		}

	});
})

app.listen(3000, () => console.log('Blog server running on port 3000!'))