const express = require('express');
const cors = require('cors');
const ImageKit = require("imagekit");
const PORT = 5500;

const app = express();

app.use(cors());


// const imagekit = new ImageKit({
//     publicKey : "your_public_api_key",
//     privateKey : "your_private_api_key",
//     urlEndpoint : "https://ik.imagekit.io/your_imagekit_id/"
// });

const imagekit = new ImageKit({
    publicKey : "public_wl8pd3tjDmxldkdjlzVAKETHZ24=",
    privateKey : "private_8WqJz7EyAwOKDR+nayUkwjl34ho=",
    urlEndpoint : "https://ik.imagekit.io/tutorials/"
});

app.get('/api/auth', (req, res) => {
    const authParams = imagekit.getAuthenticationParameters();
    res.send(authParams);
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));