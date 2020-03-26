import React from 'react';
import { IKContext } from 'imagekitio-react';

import Header from './features/common/Header';
import Footer from './features/common/Footer';
import Main from './features/Main';
import './App.css';
import './Responsive.css';

function App() {
	return (
		<IKContext
			publicKey="public_wl8pd3tjDmxldkdjlzVAKETHZ24="
			urlEndpoint="https://ik.imagekit.io/tutorials/frontend_sdk_demo_files"
			authenticationEndpoint="http://localhost:5500/api/auth"
		>
		{/* <IKContext
		 	publicKey="LmviRpcmROpSQBRwXjZmAM75Mcg="
			urlEndpoint="http://dev-ik.imagekit.io/superman/"
			authenticationEndpoint="http://localhost:5500/api/auth"
			> */}
			<Header />
			<Main />
			<Footer />
		</IKContext>
	);
}

export default App;
