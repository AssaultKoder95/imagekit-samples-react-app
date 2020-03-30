require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const ImageKit = require('imagekit');
const PORT = 5500;

const app = express();

app.use(cors());
// app.use(express.static(path.join(__dirname, '/../build')));

// PROD CONFIG - Main Account
const imagekit = new ImageKit({
	publicKey: process.env.PROD_PUBLIC_KEY,
	privateKey: process.env.PROD_PRIVATE_KEY,
	urlEndpoint: 'https://ik.imageskit.io/tutorials/'
});

// // DEV CONFIG
// const imagekit = new ImageKit({
//     publicKey : process.env.DEV_PRIVATE_KEY,
//     privateKey : process.env.DEV_PRIVATE_KEY,
//     urlEndpoint : "http://dev-ik.imagekit.io/superman/"
// });

app.get('/api/auth', (req, res) => {
	const authParams = imagekit.getAuthenticationParameters();
	res.send(authParams);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// app.get('*', (req, res) => {
// 	res.sendFile(path.join(__dirname + '/../build/index.html'));
// });

app.listen(process.env.PORT || PORT, () =>
	console.log(`Server listening on ${PORT}`)
);
