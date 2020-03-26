const express = require('express');
const cors = require('cors');
const path = require('path');
const ImageKit = require("imagekit");
const PORT = 5500;

const app = express();

app.use(cors());
// app.use(express.static(path.join(__dirname, '/../build')));

// const imagekit = new ImageKit({
//     publicKey : "your_public_api_key",
//     privateKey : "your_private_api_key",
//     urlEndpoint : "https://ik.imagekit.io/your_imagekit_id/"
// });

// PROD CONFIG
// const imagekit = new ImageKit({
//     publicKey : "public_wl8pd3tjDmxldkdjlzVAKETHZ24=",
//     privateKey : "private_8WqJz7EyAwOKDR+nayUkwjl34ho=",
//     urlEndpoint : "https://ik.imagekit.io/tutorials/"
// });

// DEV CONFIG
const imagekit = new ImageKit({
    publicKey : "LmviRpcmROpSQBRwXjZmAM75Mcg=",
    privateKey : "fEn9lnw+4QKnfZbocnowhnkaRvw=",
    urlEndpoint : "http://dev-ik.imagekit.io/superman/"
});

app.get('/api/auth', (req, res) => {
    const authParams = imagekit.getAuthenticationParameters();
    res.send(authParams);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// app.get('*', (req, res) => {
// 	res.sendFile(path.join(__dirname + '/../build/index.html'));
// });

app.listen(process.env.PORT || PORT, () => console.log(`Server listening on ${PORT}`));